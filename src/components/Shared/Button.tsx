import React, { ReactNode } from "react";

import styles from "./Button.module.scss";

const Button = ({
  action,
  mode = "mainButton",
  disabled = false,
  children = null,
}: {
  action: () => void;
  mode?: string;
  disabled?: boolean;
  children: ReactNode;
}) => {
  const handleClick = (e: any) => {
    e.preventDefault();
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
