import React from "react";
import { useStateValue } from "../../StateProvider";
import db from "../../firebase";
import { useState } from "react";
import firebase from "firebase";
import "./TextInput.css";

function TextInput() {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();

  const sendMessage = (e) => {
    e.preventDefault();

    if (user) {
      db.collection("messages").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
      });
    }
    setInput("");
  };

  return (
    <div className="textInput">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Type here!`}
        />
        <button type="submit" onClick={sendMessage}>
          SEND
        </button>
      </form>
    </div>
  );
}

export default TextInput;
