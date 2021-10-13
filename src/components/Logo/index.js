import React from "react";
import "./styles.css";
import logo from "../../Assets/imgs/logos/Large-Transparent.svg";
import logoSmall from "../../Assets/imgs/logos/Small.svg";

function Logo() {
  return (
    <a href="https://rodamecc.vercel.app" className="logo__container">
      <img src={logo} alt="Logo"  />
     {/*  <img src={logoSmall} alt="Logo" className="logo__small" /> */}
    </a>
  );
}

export default Logo;
