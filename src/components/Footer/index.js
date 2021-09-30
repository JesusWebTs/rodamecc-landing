import React from "react";
import "./styles.css";

function Footer({ text = "Footer Text" }) {
  return (
    <footer className="footer-container">
      <p className="footer-container__text">{text}</p>
    </footer>
  );
}

export default Footer;
