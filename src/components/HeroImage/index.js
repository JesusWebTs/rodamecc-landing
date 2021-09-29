import React from "react";
import "./styles.css";
import heroImage from "./assets/image/example-image.png";

function HeroImage({
  src = heroImage,
  alt = "Example Image",
  text = "Hero Image",
}) {
  return (
    <div
      className="hero-image__container"
      style={{
        ["--image"]: `url(${src})`,
      }}
    >
      <h1>{text}</h1>
    </div>
  );
}

export default HeroImage;
