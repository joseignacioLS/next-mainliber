import React from "react";

import styles from "@/styles/Footer/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerColumn}>
        <span className={styles.footerColumnTitle}>Contacto</span>
      </div>
      <div className={styles.footerColumn}>
        <span className={styles.footerColumnTitle}>Redes</span>
        <span>Twitter</span>
        <span>Facebook</span>
        <span>Instagram</span>
        <span>TikTok</span>
      </div>
    </footer>
  );
};

export default Footer;
