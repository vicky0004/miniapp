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
      <h2 className={styles.title}>Receive Credentials</h2>
      {isInstalled && identity ? (
        <div className={styles.details}>
          <p className={styles.longtext}><strong>WalletAddress: </strong>{identity.walletAddress}</p>
        </div>
      ) : (
        <p className={styles.notFound}>Profile not found.</p>
      )}
    </div>
  );
}

export default Profile;
