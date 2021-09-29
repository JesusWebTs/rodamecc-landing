import React from "react";
import "./styles.css";
//Components
import { HeroImage, NavBar } from "../";
function Header() {
  return (
    <>
      <header className="header-container">
        <NavBar />
      </header>
      <HeroImage />
    </>
  );
}

export default Header;
