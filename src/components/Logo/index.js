import React from "react";
import "./styles.css";
import logo from "../../Assets/imgs/logos/Large-Transparent.svg";

function Logo() {
  return (
    <a href="https://rodamecc.vercel.app" className="logo__container">
      <img src={logo} alt="Logo" />
    </a>
  );
}

export default Logo;
