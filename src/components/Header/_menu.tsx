import React from "react";

import styles from "@/styles/Header/Menu.module.scss";

const Menu = ({ currentSection }: { currentSection: string }) => {
  return (
    <div className={styles.menu}>
      <a
        href="#"
        className={`${currentSection === "home" ? styles.active : ""}`}
        data-section="Home"
      ></a>
      <a
        href="#consultas"
        className={`${currentSection === "consultas" ? styles.active : ""}`}
        data-section="Consultas"
      ></a>
      <a
        href="#faq"
        className={`${currentSection === "faq" ? styles.active : ""}`}
        data-section="FAQ"
      ></a>
    </div>
  );
};

export default Menu;
