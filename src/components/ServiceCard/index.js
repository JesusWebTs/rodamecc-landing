import React from "react";
import "./styles.css";
import exampleImage from "./assets/img/example-image.png";

function ServiceCard({
  src = exampleImage,
  alt = "example image",
  text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  subtitle = "Lorem Ipsum",
}) {
  return (
    <article className="service-card__container">
      <header>
        <img src={src} alt={alt} />
      </header>
      <div>
        <h3>{subtitle}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}

export default ServiceCard;
