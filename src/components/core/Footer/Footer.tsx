import React, { useEffect, useState } from "react";

import styles from "./Footer.module.scss";
import List from "@/components/Shared/List";

const Footer = () => {
  const [year, setYear] = useState(0);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <footer className={styles.footer}>
      <List direction="column" space={32}>
        <List aligment="flex-start" distribution="space-evenly">
          <List direction="column" space={2} maxWidth={150}>
            <span className={styles.footerColumnTitle}>Disclaimer</span>
            <span>Texto legal</span>
            <span>Tecnicismos</span>
          </List>
          <List direction="column" space={2} maxWidth={150}>
            <span className={styles.footerColumnTitle}>Redes</span>
            <a href="" target="_blank">
              <List>
                <img
                  height="24"
                  src="/assets/logos/rrss/twitter.png"
                  alt="twitter logo"
                />
                <span>Twitter</span>
              </List>
            </a>

            <a href="" target="_blank">
              <List>
                <img
                  height="24"
                  src="/assets/logos/rrss/facebook.png"
                  alt="facebook logo"
                />
                <span>Facebook</span>
              </List>
            </a>

            <a href="" target="_blank">
              <List>
                <img
                  height="24"
                  src="/assets/logos/rrss/instagram.png"
                  alt="instagram logo"
                />
                <span>Instagram</span>
              </List>
            </a>

            <a href="" target="_blank">
              <List>
                <img
                  height="24"
                  src="/assets/logos/rrss/linkedin.png"
                  alt="linkedin logo"
                />
                <span>Linkedin</span>
              </List>
            </a>

            <a href="" target="_blank">
              <List>
                <img
                  height="24"
                  src="/assets/logos/rrss/youtube.png"
                  alt="youtube logo"
                />
                <span>Youtube</span>
              </List>
            </a>
          </List>
        </List>
        <span>
          Tanto esta web como su contenido son copyright de Mainliber - ©
          Mainliber {year}. Todos los derechos reservados.
        </span>
      </List>
    </footer>
  );
};

export default Footer;
