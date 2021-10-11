import React from "react";
import "./styles.css";
import img1 from "../../Assets/imgs/about/img-1.jpg";
import { RowSection } from "../../components";
function AboutPage({ id }) {
  return (
    <RowSection
      id={id}
      title="Nosotros"
      src={img1}
      front={
        <>
          <p>
            Somos una empresa con mas de 10 años en el mercado, brindando
            calidad y satisfacción a nuestros clientes, especializada en el área
            de metalmecánica, fabricaciones, mecanizados, mantenimiento y
            sistemas de gas metano, para el sector industrial, contamos con
            personal altamente calificado y con gran experiencia, comprometidos
            con la calidad y el servicio para sacar adelante los proyectos que
            cualquier empresa solicite y requiera.
          </p>
          <h3>¿Que Hacemos?</h3>
          <p>
            Nos caracterizamos por ofrecer todo lo relacionado con fabricaciones
            industriales, mecanizados de partes y piezas en aceros, o aleaciones
            en general, mantenimiento mecánico, soldaduras especiales ,
            fabricaciones de partes en acero inoxidable, mantenimiento a
            sistemas de gas industrial para la industrias de producción masiva
            de alimentos, civil, cementera y petrolera.
          </p>
        </>
      }
      back={
        <>
          <h3>Misión</h3>
          <p>
            Continuar ofreciendo servicios especializado de alta gama que estén
            por encima de lo esperado por nuestros clientes. Buscar relaciones
            comerciales de largo plazo con los clientes y proveedores, basado en
            requerimientos acordados y caracterizados por la confianza y el
            entendimiento.
          </p>
          <h3>Visión</h3>
          <p>
            Ser una empresa de mayor prestigio en el area de mecanizados y
            fabricaciones industriales a nivel nacional, orientada al
            crecimiento de nuestros clientes, empeados y que contribuya al
            desarrollo de país.
          </p>
        </>
      }
    />
  );
}

export default AboutPage;
