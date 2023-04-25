import React from "react";

import styles from "@/styles/Header/Header.module.scss";
import Menu from "./_menu";
import Head from "next/head";
import GoogleLogin from "./_googleLogin";

const Header = () => {
  return (
    <header className={styles.header}>
      <Head>
        <title>MainLiber</title>
      </Head>
      <div className={styles.loginContainer}>
        <GoogleLogin></GoogleLogin>
      </div>
      <nav className={styles.navbar}>
        <Menu></Menu>
      </nav>
      <div className={styles.hero}>
        <h1 className={styles.pageTitle}>MainLiber</h1>
      </div>
    </header>
  );
};

export default Header;
