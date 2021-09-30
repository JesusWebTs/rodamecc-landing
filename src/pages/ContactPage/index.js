import React from "react";
import "./styles.css";
import { Title, SectionCard, ContactInfoCard } from "../../components";

export default function ContactPage() {
  return (
    <section className="contact-container">
      <Title text="Contacto" />
      <SectionCard>
        <ContactInfoCard
          addres="Casa de guaiber"
          emails={["jesus.152006@gmail.com"]}
          phoneNumbers={["+584141394732"]}
        />
      </SectionCard>
    </section>
  );
}
