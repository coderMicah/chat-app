//components
import SignIn from "./SignIn";

//auth
import { auth } from "../firebase/firebase";

//firebase-hooks
import { useAuthState } from "react-firebase-hooks/auth";
import SignOut from "./SignOut";

function Navbar() {
  const [user] = useAuthState(auth);
  return (
    <nav className="bg-gray-800 flex justify-between items-center p-4">
      <h1 className="text-white text-3xl">Chat App</h1>
      {user ? <SignOut /> : <SignIn />}
    </nav>
  );
}

export default Navbar;
