import React from "react";

import styles from "./Button.module.scss";


const Button = ({
  action,
  mode = "mainButton",
  disabled = false,
  children = "",
}: {
  action: any;
  mode?: string;
  disabled?: boolean;
  children: any;
}) => {
  const handleClick = (e: any) => {
    action();
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
      {children}
    </button>
  );
};

export default Button;
