import React from "react";
import "./Login.css";
import { loginUrl } from "../spotify";

function Login() {
  return (
    <div className="login">
      <img
        src="https://www.pngkey.com/png/full/190-1907978_spotify-logo-png-white-spotify-logo-white-transparent.png"
        alt=""
        className="login__logo"
      />
      <a href={loginUrl} className="login__button">
        LOGIN WITH SPOTIFY
      </a>
    </div>
  );
}

export default Login;
