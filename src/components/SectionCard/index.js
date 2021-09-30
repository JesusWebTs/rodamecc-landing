import React from "react";
import "./styles.css";
import exampleImage from "./assets/img/example-image.png";
//Component
import { Title } from "../";
function SectionCard({
  src = exampleImage,
  googleDir,
  alt = "Example Image",
  children,
}) {
  return (
    <section className="section-card__container">
      <div className="section-card__left">{googleDir ? googleDir : ""}</div>
      <div className="section-card__right">
        <div className="section-card__content">{children}</div>
      </div>
    </section>
  );
}

export default SectionCard;
