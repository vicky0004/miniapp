// MiniKitContext.tsx
import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { MiniKit } from './minikit'; // Adjust path as needed

interface MiniKitContextType {
  isInstalled: boolean;
}

const MiniKitContext = createContext<MiniKitContextType>({ isInstalled: false });

export const useMiniKit = () => useContext(MiniKitContext);

interface MiniKitProviderProps {
  appId?: string;
  children: ReactNode;
}

export const MiniKitProvider: React.FC<MiniKitProviderProps> = ({ appId, children }) => {
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const installMiniKit = async () => {
      const result = await MiniKit.install(appId ?? 'unknown-app-id');
      if (result.success) {
        const { did, w3Name } = result.initResult || {};
        if (did && w3Name) {
          const identity = {
            did,
            w3Name,
            address: did
          };
          alert("identity created in mini = "+identity);
          localStorage.setItem("identity", JSON.stringify(identity));
        }
        setIsInstalled(true);
      } else {
        alert('MiniKit installation failed.');
      }
    };
    installMiniKit();
  }, [appId]);

  return (
    <MiniKitContext.Provider value={{ isInstalled }}>
      {children}
    </MiniKitContext.Provider>
  );
};
