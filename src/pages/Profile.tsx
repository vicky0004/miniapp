import { useMiniKit } from "sdk-sporran-test/minikit-provider"; 
import { useEffect, useState } from "react";

function Profile() {
  const { isInstalled } = useMiniKit();
  const [identity, setIdentity] = useState<{ did: string; web3Name: string; address: string } | null>(null);

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
          <p><strong>email: </strong> vicky@gmail.com</p>
          <p><strong>username:</strong> vicky kumar</p>
          <p><strong>Web3 Name:</strong> {identity.web3Name}</p>
          <p><strong>DID:</strong> {identity.did}</p>
          {/* <p><strong>Address:</strong> {identity.address}</p> */}
        </>
      ) : (
        <p>Profile not found.</p>
      )}
    </div>
  );
}

export default Profile;
