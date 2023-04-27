import React, { useContext } from "react";

import { ModalContext } from "@/contexts/modal";
import Decesos from "./Individual/Decesos";
import Salud from "./Individual/Salud";
import Automovil from "./Individual/Automovil";
import Hogar from "./Individual/Hogar";
import Vida from "./Individual/Vida";

import styles from "@/styles/Sections/Services.module.scss";

const Services = () => {
  const { openModal } = useContext(ModalContext);
  return (
    <>
      <h2>Nuestros Servicios</h2>
      <div className={styles.services}>
        <div
          className={styles.service}
          onClick={() => {
            openModal(<Decesos />);
          }}
        >
          <span>Decesos</span>
          <img src="/assets/iconos/test.png" />
        </div>
        <div
          className={styles.service}
          onClick={() => {
            openModal(<Salud />);
          }}
        >
          <span>Salud</span>
          <img src="/assets/iconos/test.png" />
        </div>
        <div
          className={styles.service}
          onClick={() => {
            openModal(<Automovil />);
          }}
        >
          <span>Automóvil</span>
          <img src="/assets/iconos/test.png" />
        </div>
        <div
          className={styles.service}
          onClick={() => {
            openModal(<Hogar />);
          }}
        >
          <span>Hogar</span>
          <img src="/assets/iconos/test.png" />
        </div>
        <div
          className={styles.service}
          onClick={() => {
            openModal(<Vida />);
          }}
        >
          <span>Vida</span>
          <img src="/assets/iconos/test.png" />
        </div>
      </div>
    </>
  );
};

export default Services;
