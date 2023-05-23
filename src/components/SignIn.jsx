import { auth } from "../firebase/firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import GoogleButton from "react-google-button";

function SignIn() {
  const handleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <div className="flex justify-center">
      <GoogleButton onClick={handleSignIn} />
    </div>
  );
}

export default SignIn;
