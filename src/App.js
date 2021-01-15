import "./App.css";
import Header from "./components/Header";
import Messages from "./components/Messages";
import TextInput from "./components/TextInput";
import db from "./firebase";
import { useState, useEffect, useRef } from "react";
import Login from "./components/Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp")
      .onSnapshot((snapshot) =>
        setMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, 1000);

  return (
    <div className="App">
      {user ? (
        <>
          <Header />
          <div className="chat__messages">
            {messages.map((message, i) => (
              <Messages
                message={message.message}
                timestamp={message.timestamp}
                user={message.user}
                userimage={message.userImage}
                key={i}
                id={i}
              />
            ))}
          </div>
          <TextInput />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
