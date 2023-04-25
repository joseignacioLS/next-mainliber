import React, { useState } from "react";

import styles from "@/styles/Header/Menu.module.scss";

const Menu = () => {

  return (
    <div className={styles.menu}>
      <a href="#">Home</a>
      <a href="#consultas">Consultas</a>
      <a href="#faq">FAQ</a>
    </div>
  );
};

export default Menu;
