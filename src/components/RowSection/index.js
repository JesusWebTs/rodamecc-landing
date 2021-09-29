import React from "react";
import "./styles.css";
import exampleImage from "./assets/img/example-image.png";
import { Title } from "../";
function RowSection({
  reverse = false,
  src = exampleImage,
  alt = "example Image",
  title = "Title",
  text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
}) {
  return (
    <section
      className={`section-row__container ${
        reverse ? "section-row__container--reverse" : ""
      }`}
    >
      <div className="section-row__content">
        <Title text={title} />
        <p>{text}</p>
      </div>

      <div
        style={{
          ["--image"]: `url(${src})`,
        }}
        className="section-row__image"
      />
    </section>
  );
}

export default RowSection;
