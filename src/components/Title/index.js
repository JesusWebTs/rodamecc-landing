import React from "react";
import "./styles.css";

function Title({ text, children }) {
  return <h2 className="section__title">{text ? text : children}</h2>;
}

export default Title;
