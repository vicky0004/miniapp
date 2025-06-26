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
        const { did, web3Name } = result.initResult || {};
        if (did && web3Name) {
          const identity = {
            did,
            web3Name,
            address: did
          };
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
