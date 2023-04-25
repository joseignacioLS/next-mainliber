import React from "react";

import styles from "@/styles/Header/Header.module.scss";
import GoogleLogin from "./_googleLogin";
import Menu from "./_menu";
import Head from "next/head";

const Header = () => {
  return (
    <header className={styles.header}>
      <Head>
        <title>MainLiber</title>
      </Head>
      <nav className={styles.navbar}>
        <Menu></Menu>
        <GoogleLogin></GoogleLogin>
      </nav>
      <div className={styles.hero}>
        <h1 className={styles.pageTitle}>MainLiber</h1>
      </div>
    </header>
  );
};

export default Header;
