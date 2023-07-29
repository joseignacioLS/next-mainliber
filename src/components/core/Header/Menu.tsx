import React, { useEffect, useState } from "react";

import styles from "./Menu.module.scss";

const menuData: {
  id: string;
  text: string;
  element: Element | null;
  section: string;
}[] = [
  {
    id: "servicios",
    text: "Servicios",
    element: document.querySelector("#servicios"),
    section: "servicios",
  },
  {
    id: "consultas",
    text: "Consultas",
    element: document.querySelector("#consultas"),
    section: "consultas",
  },
  {
    id: "faq",
    text: "FAQ",
    element: document.querySelector("#faq"),
    section: "faq",
  },
  {
    id: "contacto",
    text: "Contacto",
    element: document.querySelector("#contacto"),
    section: "contacto",
  },
];

const Menu = () => {
  const [currentSection, setCurrentSection] = useState("home");

  const handleScroll = (
    faqSection: HTMLElement,
    forumSection: HTMLElement,
    contactSection: HTMLElement
  ) => {
    let modSection = "servicios";
    if (!faqSection || !forumSection || !contactSection) return;
    if (window.scrollY >= contactSection.offsetTop - 15) {
      modSection = "contacto";
    } else if (window.scrollY >= faqSection.offsetTop - 15) {
      modSection = "faq";
    } else if (window.scrollY >= forumSection.offsetTop - 15) {
      modSection = "consultas";
    }
    setCurrentSection(modSection);
  };

  useEffect(() => {
    const faqSection = document.querySelector("#faq") as HTMLElement;
    const forumSection = document.querySelector("#consultas") as HTMLElement;
    const contactSection = document.querySelector("#contacto") as HTMLElement;
    document.addEventListener("scroll", () => {
      handleScroll(faqSection, forumSection, contactSection);
    });
    handleScroll(faqSection, forumSection, contactSection);
  }, []);

  return (
    <div className={styles.menu}>
      {menuData.map((data) => {
        return (
          <button
            key={data.id}
            onClick={() => data.element?.scrollIntoView({ behavior: "smooth" })}
            className={`${currentSection == data.section ? styles.active : ""}`}
            data-section={data.text}
          ></button>
        );
      })}
    </div>
  );
};

export default Menu;
