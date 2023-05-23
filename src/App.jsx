//components
import Chat from "./components/Chat";
import Navbar from "./components/Navbar";

//firebase
import { auth } from "./firebase/firebase";

//firebase hooks
import { useAuthState } from "react-firebase-hooks/auth"

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="max-w-[728px] mx-auto text-center">
      <section className="relative flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl">
        <Navbar/>
        {user && <Chat/>}
      </section>
    </div>
  )
}

export default App;
