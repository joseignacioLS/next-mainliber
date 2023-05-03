import Button from "@/components/Shared/Button";
import List from "@/components/Shared/List";
import React from "react";

const Contact = () => {
  return (
    <>
      <h2>Contacta con nosotros</h2>
      <List direction="column" aligment="flex-start" space={32}>
        {[
          <div key="map">
            <p>Encuentranos en SEAT Sala Rodríguez:</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d552.9416477894946!2d-0.45632219210998604!3d38.374196241579774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd62376137932721%3A0xde3d806b161dad3d!2sSEAT%20Sala%20Rodr%C3%ADguez%20-%20Alicante!5e0!3m2!1ses!2ses!4v1682794884424!5m2!1ses!2ses"
              width="600"
              height="450"
            ></iframe>
          </div>,
          <div key="rrss">
            <p>Tambien puedes visitar nuestras redes sociales</p>
            <List>
              {[
                <span key="linkeding">Linkeding</span>,
                <span key="facebook">Facebook</span>,
                <span key="twitter">Twitter</span>,
                <span key="instagram">Instagram</span>,
              ]}
            </List>
          </div>,
          <div key="consultas">
            <p>
              Si tienes más dudas, visita nuestra{" "}
              <a href="#consultas">
                <Button
                  action={() => {}}
                >sección de consultas</Button>
              </a>
            </p>
          </div>,
        ]}
      </List>
    </>
  );
};

export default Contact;
