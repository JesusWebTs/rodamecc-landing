import React from "react";
import "./styles.css";

function Footer({ text = "Footer Text", logo }) {
  return (
    <footer className="footer-container">
      {logo ? <img src={logo} /> : ""}
      <p className="footer-container__text">{text}</p>
    </footer>
  );
}

export default Footer;
