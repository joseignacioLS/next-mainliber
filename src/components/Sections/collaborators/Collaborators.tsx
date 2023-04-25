import React from "react";

import styles from "@/styles/Sections/Collaborators.module.scss";

const logos = [
  "Arag.png",
  "DKV.jpg",
  "Fiatc.jpg",
  "Generali.png",
  "Mapfre.png",
  "MutuaLevante.png",
  "MutuaMadrilena.png",
  "PlusUltra.jpg",
  "Zurich.png",
];

const Collaborators = () => {
  return (
    <>
      <h2>Nuestras Colaboraciones</h2>
      <div className={styles.collaboratorsContainer}>
        <div className={styles.collaborators}>
          {[...logos, ...logos, ...logos].map((logo: string, i: number) => (
            <img
              key={logo + "_" + i}
              src={"/assets/logos/" + logo}
              height="100px"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Collaborators;