import React from "react";
import "./styles.css";

import { GrayImage } from "./components";

import logo1 from "./assets/img/Devenalsa.png";
import logo2 from "./assets/img/Hermo.png";
import logo3 from "./assets/img/industrias-amapola.png";
import logo4 from "./assets/img/Plumrose.png";

function Banner({ text = "Banner Text" }) {
  return (
    <div className="banner-container">
      <div className="banner-container__content">
        <GrayImage src={logo4} alt="Plumrose Logo" />
        <GrayImage src={logo3} alt="Industrias Amapola Logo" />
        <h2 className="banner-container__text">{text}</h2>
        <GrayImage src={logo1} alt="Devenalsa Logo" />
        <GrayImage src={logo2} alt="Hermo Logo" />
      </div>
    </div>
  );
}

export default Banner;
