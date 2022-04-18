import React from "react";
import "./Navbar.css";
import logo from "./../../assets/logo.png";


const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-left">
        <img className="flash-logo" src={logo} alt="logo" />
        <p className="flash-logo-text">FlashType</p>
      </div>
      <div className="nav-right">
        <a
          target="_blank"
          className="nav-aam-link"
          href="https://www.linkedin.com/in/nikhil-chinchore-098b49201/"
          rel="noreferrer"
        >
          NC😎
        </a>
      </div>
    </div>
  );
};

export default Navbar;
