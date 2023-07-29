import React from "react";

import styles from "./Header.module.scss";
import Menu from "./Menu";
import Head from "next/head";
import GoogleLogin from "../../Shared/GoogleLogin";
import List from "@/components/Shared/List";

const Header = () => {
  return (
    <header className={styles.header}>
      <Head>
        <title>MainLiber Seguros</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon.png"
        ></link>
      </Head>
      <div className={styles.loginContainer}>
        <GoogleLogin></GoogleLogin>
      </div>
      <nav className={styles.navbar}>
        <Menu></Menu>
      </nav>
      <div className={styles.hero}>
        <h1>
          <img
            src="/assets/logos/mainliber.png"
            alt="MainLiber, correduría de seguros"
          />
        </h1>
        <span className={styles.subtitle}>Correduría de seguros</span>
      </div>
    </header>
  );
};

export default Header;
