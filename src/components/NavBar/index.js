import React, { useEffect, useState } from "react";
import "./styles.css";

//Componenets
import { Logo } from "../";

export default function NavBar({ tags }) {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar__container">
      <Logo />
      <div
        className={"navbar__toggle-menu"}
        onClick={() => setToggle((prev) => !prev)}
      />
      <ol
        className={`navbar__elements ${
          toggle ? "navbar__elements--show" : "navbar__elements--show-not"
        }`}
      >
        <li onClick={() => setToggle(false)}>
          <a className="navbar__element" href="#">
            Inicio
          </a>
        </li>
        <li onClick={() => setToggle(false)}>
          <a className="navbar__element" href="#services">
            Servicios
          </a>
        </li>
        <li onClick={() => setToggle(false)}>
          <a className="navbar__element" href="#about">
            Nosotros
          </a>
        </li>
        <li onClick={() => setToggle(false)}>
          <a className="navbar__element" href="#contact">
            Contacto
          </a>
        </li>
      </ol>
    </nav>
  );
}
