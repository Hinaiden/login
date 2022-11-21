import "./Hero.css";
import MainVideo from "../assets/video.mp4";

import React, { useState } from "react";

function Hero() {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(
    <i class="icon fa-sharp fa-solid fa-eye-slash"></i>
  );

  const handleToggle = () => {
    if (type === "password") {
      setIcon(<i class="icon fa-sharp fa-solid fa-eye"></i>);
      setType("text");
    } else {
      setIcon(<i class="icon fa-sharp fa-solid fa-eye-slash"></i>);
      setType("password");
    }
  };
  return (
    <div className="hero container text-center ">
      <video autoPlay loop muted id="video" class="col col-lg-2">
        <source src={MainVideo} type="video/mp4" />
      </video>

      <div className="row justify-content-center body col col-lg-2 ">
        <div className="col-lg-6 text-center">
          <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
              <label>Username</label>
              <input
                type="text"
                className="loginInput"
                placeholder="Enter your username"
              />
              <label>Password</label>
              <input
                type={type}
                className="loginInput"
                placeholder="Enter your password"
              />
              <span className="eye" onClick={handleToggle}>
                {icon}
              </span>

              <button className="loginButton" type="submit ">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
