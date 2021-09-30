import React from "react";
import "./styles.css";
import exampleImage from "./assets/img/example-image.png";
//Component
import { Title } from "../";
function SectionCard({ src = exampleImage, alt = "Example Image", children }) {
  return (
    <section className="section-card__container">
      <img src={src} alt={alt} />
      <div className="section-card__content">{children}</div>
    </section>
  );
}

export default SectionCard;
