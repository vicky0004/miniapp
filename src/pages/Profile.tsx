import { useMiniKit } from "sdk-sporran-test/minikit-provider";
import { useEffect } from "react";
import styles from './Profile.module.css';

function Profile() {
  const { isInstalled, identity } = useMiniKit();

  useEffect(() => {
    if (isInstalled) {
      console.log("MiniKit is installed.");
      console.log("Identity:", identity);
    }
  }, [isInstalled, identity]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Profile</h2>
      {isInstalled && identity ? (
        <div className={styles.details}>
          <p><strong>Name:</strong> {identity.name}</p>
          <p><strong>Email:</strong> {identity.email}</p>
          <p><strong>Web3 Name:</strong> {identity.web3Name}</p>
          <p className={styles.did}><strong>DID:</strong> {identity.did}</p>
          <p><strong>WalletAddress:</strong>{identity.walletAddress}</p>
        </div>
      ) : (
        <p className={styles.notFound}>Profile not found.</p>
      )}
    </div>
  );
}

export default Profile;
