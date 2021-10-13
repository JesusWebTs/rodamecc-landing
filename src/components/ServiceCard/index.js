import React from "react";
import "./styles.css";
import exampleImage from "./assets/img/example-image.png";

function ServiceCard({
  src = exampleImage,
  alt = "example image",
  text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  subtitle = "Lorem Ipsum",
  component = (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  ),
}) {
  return (
    <article className="service-card__container">
      <div
        className="service-card__turn-card"
        style={{
          backgroundImage: `url(${src})`,
        }}
      >
        <div className="service-card__front">
          <header>
            <div
              className="service-card__img"
              style={{
                backgroundImage: `url(${src})`,
              }}
            />
          </header>
          <div className="service-card__bottom">
            <div className="service-card__text">
              <p>{text}</p>
            </div>
          </div>
        </div>
        <div className="service-card__back">{component}</div>
      </div>
    </article>
  );
}

export default ServiceCard;
