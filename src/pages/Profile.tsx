import { useMiniKit } from "../sdk/sdk-provider";
import { useEffect, useState } from "react";

function Profile() {
  const { isInstalled } = useMiniKit();
  const [identity, setIdentity] = useState<{ did: string; w3Name: string; address: string } | null>(null);

  useEffect(() => {
    if (isInstalled) {
      const storedIdentity = localStorage.getItem("identity");
      if (storedIdentity) {
        setIdentity(JSON.parse(storedIdentity));
      }
    }
  }, [isInstalled]);

  return (
    <div>
      <h2>Profile</h2>
      {isInstalled && identity ? (
        <>
          <p><strong>DID:</strong> {identity.did}</p>
          <p><strong>Address:</strong> {identity.address}</p>
          <p><strong>Web3 Name:</strong> {identity.w3Name}</p>
        </>
      ) : (
        <p>SDK not installed.</p>
      )}
    </div>
  );
}

export default Profile;
