import React, { ReactNode } from "react";

import styles from "./Button.module.scss";
import Link from "next/link";

const Button = ({
  action,
  mode = "mainButton",
  disabled = false,
  children = null,
  redirect = "",
}: {
  action: (e: any) => void;
  mode?: string;
  disabled?: boolean;
  children: ReactNode;
  redirect?: string;
}) => {
  const handleClick = (e: any) => {
    e.preventDefault();
    action(e);
  };
  return (
    <button
      disabled={disabled}
      className={`${styles.button} ${styles[mode]} ${
        disabled ? styles.disabled : ""
      }`}
      onClick={(e) => {
        handleClick(e);
      }}
    >
      {redirect !== "" ? <Link href={redirect}>{children}</Link> : children}
    </button>
  );
};

export default Button;
