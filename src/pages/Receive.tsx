import { useMiniKit } from "sdk-sporran-test/minikit-provider";
import { useEffect, useState } from "react";
import { FiCopy, FiCheck } from 'react-icons/fi';
import styles from './Receive.module.css';

function Profile() {
  const { isInstalled, identity } = useMiniKit();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isInstalled) {
      console.log("MiniKit is installed.");
      console.log("Identity:", identity);
    }
  }, [isInstalled, identity]);

  const handleCopy = () => {
    if (identity?.walletAddress) {
      navigator.clipboard.writeText(identity.walletAddress).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500); // Reset after 1.5s
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.headingRow}>
        <h2 className={styles.title}>Receive Credentials</h2>
        {identity?.walletAddress && (
          copied ? (
            <FiCheck className={styles.copyIcon} title="Copied!" />
          ) : (
            <FiCopy className={styles.copyIcon} onClick={handleCopy} title="Copy Address" />
          )
        )}
      </div>
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
