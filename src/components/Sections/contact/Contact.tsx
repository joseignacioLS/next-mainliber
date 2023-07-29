import List from "@/components/Shared/List";
import React from "react";

const Contact = () => {
  return (
    <section id="contacto" className="mainSection coloredSection">
      <h2>Información y Contacto</h2>
      <h3>Sobre nosotros</h3>

      <p>
        Mainliber es la correduría del Grupo Sala, especializada en seguros
        particulares, nacida con vocación de servicio al cliente. Nos ocupamos
        de todo, tanto del trámite de siniestros, como de la contratación de
        seguros, modificación si fuese el caso y vigilancia de cartera. Todos
        los años estudiamos sus seguros por si hubiese mejores ofertas tanto en
        precio como en coberturas. Trabajamos con las Compañías más solventes
        del mercado y podemos hacer cualquier seguro que necesites.
      </p>
      <p>
        Mainliber Insurance Bróker, S.L. es una sociedad de correduría, con
        número de inscripción en el Registro Especial de Mediadores de Seguros,
        Corredores de Reaseguros y sus Altos Cargos de la Comunidad Valenciana
        VS/2014-016, y tiene concertado seguro de responsabilidad civil por los
        importes legales, así como capacidad financiera según lo establecido en
        el artículo 27 de la Ley 26/2006, de 17 de julio, de mediación de
        seguros y reaseguros privados.
      </p>
      <h3>Ven a visitarnos</h3>
      <List aligment="flex-start">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d552.9416477894946!2d-0.45632219210998604!3d38.374196241579774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd62376137932721%3A0xde3d806b161dad3d!2sSEAT%20Sala%20Rodr%C3%ADguez%20-%20Alicante!5e0!3m2!1ses!2ses!4v1682794884424!5m2!1ses!2ses"
            width="600"
            height="450"
          ></iframe>
        </div>
        <div>
          <h4>Dirección</h4>
          <p>SEAT Sala Rodríguez</p>
          <p>Alicante, Av. de Denia, 145, 03015 Alicante</p>
          <h4>Horario</h4>
          <p>Lunes a Viernes de 10.00 a 13.00 y de 14.00 a 19.00</p>
          <h4>Contacto</h4>
          <p>Telefono:</p>
          <p>Email:</p>
        </div>
      </List>
    </section>
  );
};

export default Contact;
