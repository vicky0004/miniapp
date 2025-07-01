import { useMiniKit } from "sdk-sporran-test/minikit-provider"; 
import { useEffect } from "react";

function Profile() {
  const { isInstalled, identity  } = useMiniKit();

  useEffect(() => {
    if (isInstalled) {
      console.log("MiniKit is installed.");
      console.log("Identity:", identity);
    }
  }, [isInstalled, identity]);

  return (
    <div>
      <h2>Profile</h2>
      {isInstalled && identity ? (
        <>
          <p><strong>Name: </strong>{identity.name}</p>
          <p><strong>Email: </strong> {identity.email}</p>
          <p><strong>Web3 Name: </strong> {identity.web3Name}</p>
          <p><strong>DID: </strong> {identity.did}</p>
          {/* <p><strong>Address:</strong> {identity.address}</p> */}
        </>
      ) : (
        <p>Profile not found.</p>
      )}
    </div>
  );
}

export default Profile;
