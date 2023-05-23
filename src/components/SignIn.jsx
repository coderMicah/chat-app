import { auth } from "../firebase/firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";


function SignIn() {
  const handleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <div className="flex justify-center ">
    
      <button className="text-white border rounded-md p-2 border-gray-400" onClick={handleSignIn}>
        Sign In
      </button>
    </div>
  );
}

export default SignIn;
