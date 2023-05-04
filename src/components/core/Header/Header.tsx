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
          href="https://images.motorflash.com/filter?path=https%3A%2F%2Fwww.gruposala.com%2F%2F%2Fupload%2Fmainliber.png&size=400&format=webp"
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
            src="https://images.motorflash.com/filter?path=https%3A%2F%2Fwww.gruposala.com%2F%2F%2Fupload%2Fmainliber.png&size=400&format=webp"
            alt="MainLiber, correduría de seguros"
          />
        </h1>
        {/* <h1 className={styles.pageTitle}>MainLiber</h1> */}
      </div>
    </header>
  );
};

export default Header;
