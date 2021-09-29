import React from "react";
import "./styles.css";
import { Title, ServiceCard } from "../../components";

export default function ServicesPage() {
  return (
    <section className="service-container">
      <Title text="Servicios" />
      <div className="service-container__cards">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
      </div>
    </section>
  );
}
