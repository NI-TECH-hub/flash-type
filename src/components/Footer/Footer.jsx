import React from "react";
import './Footer.css'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className="footer-container">
        <a target="_nikhil" href="https://github.com/NI-TECH-hub">Copyright © {year} FLASHTYPE</a>
      </div>
    );
}

export default Footer;