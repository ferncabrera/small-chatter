import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";
import { actionTypes } from "../../reducer";
import { useStateValue } from "../../StateProvider";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = (e) => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src="https://img.icons8.com/doodle/96/000000/chat.png" />{" "}
        <h1>Welcome to Small Talker</h1>
        <p>A quick, easy-to-use live chat.</p>
        <p>Sign in with google to start chatting!</p>
        <p>
          Author's{" "}
          <a className="website" href="http://www.fernandocesarcabrera.com">
            website!
          </a>
        </p>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
}

export default Login;
