import React from "react";
import "./styles.css";

//Componenets
import { Logo } from "../";

export default function NavBar({ tags }) {
  return (
    <nav className="navbar__container">
      <Logo />
      <ol>
        <li>
          <a className="navbar__element" href="#">
            Inicio
          </a>
        </li>
        <li>
          <a className="navbar__element" href="#services">
            Servicios
          </a>
        </li>
        <li>
          <a className="navbar__element" href="#about">
            Nosotros
          </a>
        </li>
        <li>
          <a className="navbar__element" href="#contact">
            Contacto
          </a>
        </li>
      </ol>
    </nav>
  );
}
