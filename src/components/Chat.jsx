import { useEffect, useRef, useState } from "react";
//components
import Message from "./Message";

//firebase methods
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase/firebase";
import SendMessage from "./SendMessage";


function Chat() {
  const [messages, setMessages] = useState([]);
  const collectionRef = collection(db, "messages");
  const scroll = useRef();

  useEffect(() => {
    const q = query(collectionRef, orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) =>
        messages.push({ ...doc.data(), id: doc.id })
      );
      setMessages(messages);
    });

    return () => unsubscribe();
  });
  return (
    <>
      <main className="flex flex-col p-[10px] relative overflow-scroll">
        {/* Chat message component */}
        {messages &&
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
      </main>
      {/* Send message component */}
      <SendMessage scroll={scroll}/>
      <span ref={scroll}></span>
    </>
  );
}

export default Chat;
