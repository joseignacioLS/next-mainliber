import React, { useEffect, useState } from "react";

import styles from "./Menu.module.scss";

const Menu = () => {
  const [currentSection, setCurrentSection] = useState("home");

  const handleScroll = (
    faqSection: any,
    forumSection: any,
    contactSection: any
  ) => {
    let modSection = "servicios";
    if (window.scrollY >= faqSection.offsetTop) {
      modSection = "faq";
    } else if (window.scrollY >= forumSection.offsetTop) {
      modSection = "consultas";
    } else if (window.scrollY >= contactSection.offsetTop) {
      modSection = "contacto";
    }
    setCurrentSection(modSection);
  };

  useEffect(() => {
    const faqSection = document.querySelector("#faq");
    const forumSection = document.querySelector("#consultas");
    const contactSection = document.querySelector("#contacto");
    document.addEventListener("scroll", () => {
      handleScroll(faqSection, forumSection, contactSection);
    });
    handleScroll(faqSection, forumSection, contactSection);
  }, []);

  return (
    <div className={styles.menu}>
      <a
        href="#"
        className={`${currentSection === "servicios" ? styles.active : ""}`}
        data-section="Servicios"
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
      <a
        href="#contacto"
        className={`${currentSection === "contacto" ? styles.active : ""}`}
        data-section="Contacto"
      ></a>
    </div>
  );
};

export default Menu;
