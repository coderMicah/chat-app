import { useState } from "react";
import { auth, db } from "../firebase/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

function SendMessage({scroll}) {
  const [input, setInput] = useState("");

  const collectionRef = collection(db, "messages");
  const sendMessage = async (e) => {
    e.preventDefault();
    if (input.length === 0) {
      alert("Please enter valid message");
      return;
    }
    const { uid, displayName } = auth.currentUser;
    await addDoc(collectionRef, {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });
   
    setInput('')
    scroll.current.scrollIntoView({behavior:'smooth'})
  };
  return (
    <form
      onSubmit={sendMessage}
      className="h-14 w-full max-w-[728px] flex text-xl absolute bottom-0"
    >
      <input
        className="w-full text-xl p-3 bg-gray-900 text-white outline-none border-none"
        type="text"
        placeholder="Message.."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="w-[20%] bg-green-500" type="submit">
        Send
      </button>
    </form>
  );
}

export default SendMessage;
