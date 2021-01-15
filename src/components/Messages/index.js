import React from "react";
import "./Messages.css";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

function Messages({ message, timestamp, user, userimage }) {
  return (
    <div className="message">
      <img src={userimage} alt="profile picture" />
      <div className="message__info">
        <h4>
          {user}{" "}
          <span className="message__timestamp">
            {new Date(timestamp?.toDate()).toLocaleString()}
          </span>
          <IconButton
            aria-label="delete"
            className="delete"
            onClick={() => console.log("hey it worked")}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </h4>
        <p id="text">{message} </p>
      </div>
    </div>
  );
}

export default Messages;
