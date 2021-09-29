import React from "react";
import "./styles.css";
import logo from "../../Assets/imgs/logos/Large-Transparent.svg";

function Logo() {
  return (
    <div className="logo__container">
      <img src={logo} alt="Logo" />
    </div>
  );
}

export default Logo;
