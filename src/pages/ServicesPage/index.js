import React from "react";
import "./styles.css";
import { Title, ServiceCard } from "../../components";

import img1 from "../../Assets/imgs/services/img-1.jpg";
import img2 from "../../Assets/imgs/services/img-2.jpg";
import img3 from "../../Assets/imgs/services/img-3.png";

export default function ServicesPage({ id }) {
  return (
    <section className="service-container" id={id}>
      <Title text="Servicios" />
      <div className="service-container__cards">
        <ServiceCard
          src={img1}
          text="Lideres en el sector de mecanizados y  fabricacion de piezas, contando con el material ideal para el trabajo."
          component={
            <ul className="service__text">
              <li>
                Contamos con diseños, fabricaciones y mecanizados de componentes
                mecánicos, consumibles para maquinarias y líneas de producción.
              </li>
              <li>
                Sustitución de importaciones a través de diseño y fabricación de
                partes y/o piezas de máquinas.
              </li>
            </ul>
          }
        />
        <ServiceCard
          src={img3}
          text="Distintos servicios de automatizacion industrial como armado de tableros, lazos de control, entre otros."
          component={
            <ul className="service__text">
              <li>
                Desarrollo de proyectos de automatizacion con PLC/SCADA/HMI.
              </li>
              <li>Modelado, simulación y control del proceso de producción.</li>
              <li>Modelado 3D de los procesos industriales.</li>
            </ul>
          }
        />
        <ServiceCard
          src={img2}
          text="Mantenimiento en general, ofreciendo soluciones en equipos e instalaciones especificas."
          component={
            <ul className="service__text">
              <li>Mantenimiento general a los sistemas de Gas industrial.</li>
              <li>
                Soldaduras especiales (argón,Tig, aluminio, acero, inoxidable,
                fundición, etc.) para piezas asociadas a líneas de producción
                masiva de alimentos.
              </li>
            </ul>
          }
        />
      </div>
    </section>
  );
}
