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
      alert(MiniKit.isInstalled() ? 'MiniKit is already installed.' : 'Installing MiniKit...');
      const result = await MiniKit.install(appId);
      alert(`MiniKit installation result: ${JSON.stringify(result)}`);
      if (result.success) {
        setIsInstalled(true);
      } else {
        alert('MiniKit installation failed:');
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
