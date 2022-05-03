import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import "./Login.css";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => alert(err));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => alert(err));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="amazon"
          className="logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <p>E-mail</p>
          <input type="email" onChange={emailHandler} value={email}></input>
          <p>Password</p>
          <input
            type="password"
            onChange={passwordHandler}
            value={password}
          ></input>
          <br />
          <button className="login__btn" onClick={submitHandler}>
            Sign in
          </button>
        </form>
        <p className="p">
          By signing in you agree to{" "}
          <strong>Amazon clone's conditions of use & Sale</strong>. Please see
          our <strong>Privacy Notice</strong>, our{" "}
          <strong>Cookies Notice</strong> and our{" "}
          <strong>Interest-based Ads</strong> Notice.
        </p>
        <button className="login__register__btn" onClick={register}>
          Create your amazon clone account
        </button>
      </div>
    </div>
  );
}

export default Login;
