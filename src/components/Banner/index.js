import React from "react";
import "./styles.css"

function Banner({ text = "Banner Text" }) {
  return (
    <div className="banner-container">
      <h2 className="banner-container__text">{text}</h2>
    </div>
  );
}

export default Banner;
