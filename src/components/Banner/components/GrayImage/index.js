import React from "react";
import "./styles.css"
function GrayImage({ src, alt }) {
  return (
    <div className="banner-container__img-container">
      <img src={src} alt={alt} />
    </div>
  );
}

export default GrayImage;
