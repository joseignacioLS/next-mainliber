import React, { useEffect, useState } from "react";

import styles from "@/styles/Header/Menu.module.scss";
import { useRouter } from "next/router";

const Menu = () => {
  const [currentSection, setCurrentSection] = useState("home");

  const router = useRouter();

  const handleScroll = (faqSection: any, forumSection: any) => {
    let modSection = "home";
    if (window.scrollY >= faqSection.offsetTop) {
      modSection = "faq";
    } else if (window.scrollY >= forumSection.offsetTop) {
      modSection = "consultas";
    }
    setCurrentSection(modSection);
  };

  useEffect(() => {
    const faqSection = document.querySelector("#faq");
    const forumSection = document.querySelector("#consultas");
    document.addEventListener("scroll", () => {
      handleScroll(faqSection, forumSection);
    });
    handleScroll(faqSection, forumSection);
  }, []);

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
