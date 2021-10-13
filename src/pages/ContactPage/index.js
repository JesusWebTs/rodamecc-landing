import React from "react";
import "./styles.css";
import { Title, SectionCard, ContactInfoCard } from "../../components";

export default function ContactPage({ id }) {
  return (
    <section className="contact-container" id={id}>
      <Title text="Contacto" />

      <SectionCard
        googleDir={
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d412.71177171851707!2d-66.66151356479658!3d10.229432751659362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2ae3d9b001b05f%3A0x50e21669830cfb10!2sMecafab%202009%2C%20c.a.!5e0!3m2!1ses!2sve!4v1633033844992!5m2!1ses!2sve"
            width="600"
            height="450"
            style={{
              border: 0,
            }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        }
      >
        <ContactInfoCard
          addres="Domicilio fiscal calle Las Brisas entre Av. Falcon y Av. Ayacucho, local Nro. 0. zona casco central Santa Teresa del Tuy Miranda zona postal 1215."
          emails={["industrias.rodamecc@gmail.com"]}
          phoneNumbers={["+584141394732", "+584142853977", "+582392318555"]}
        />
      </SectionCard>
    </section>
  );
}
