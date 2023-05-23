
import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";

function SignOut() {
    const signOutUser = () => {
        signOut(auth)
    }

    return (
        <button onClick={signOutUser} className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-400">
            Logout
        </button>
    );
}

export default SignOut;