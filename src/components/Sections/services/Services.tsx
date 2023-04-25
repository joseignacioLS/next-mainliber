import React from "react";

import styles from "@/styles/Sections/Services.module.scss";

const Services = () => {
  return (
    <>
      <h2>Nuestros Servicios</h2>
      <div className={styles.services}>
        <div className={styles.service}>
          <span>Decesos</span>
          <img src="/assets/iconos/test.png" />
        </div>
        <div className={styles.service}>
          <span>Salud</span>
          <img src="/assets/iconos/test.png" />
        </div>
        <div className={styles.service}>
          <span>Automóvil</span>
          <img src="/assets/iconos/test.png" />
        </div>
        <div className={styles.service}>
          <span>Hogar</span>
          <img src="/assets/iconos/test.png" />
        </div>
        <div className={styles.service}>
          <span>Vida</span>
          <img src="/assets/iconos/test.png" />
        </div>
      </div>
    </>
  );
};

export default Services;
