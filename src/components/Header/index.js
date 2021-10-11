import React from "react";
import "./styles.css";
//Components
import { HeroImage, NavBar } from "../";
function Header({ text, src }) {
  return (
    <>
      <header className="header-container">
        <NavBar />
      </header>
      <HeroImage src={src} text={text} />
    </>
  );
}

export default Header;
