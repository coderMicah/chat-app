import { auth } from "../firebase/firebase";

export default function Message({ message }) {
  const style = {
    message:`flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
    sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
    received: `bg-[#e5e5ea] text-gray-900 float-left rounded-br-full`,
  };

  const messageClass =
    message.uid == auth.currentUser.uid ? style.sent : style.received;

  return (
    <div>
      <div className={`${style.message} ${messageClass}`}>
        <p className="absolute mt-[-4rem] text-gray-600 text-xs">
          {message.name}
        </p>
        <p>{message.text}</p>
      </div>
    </div>
  );
}
