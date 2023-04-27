import React from "react";

import styles from "./Button.module.scss";

const Button = ({
  text,
  action,
  isMain = true,
  disabled = false,
}: {
  text: string;
  action: () => void;
  isMain?: boolean;
  disabled?: boolean;
}) => {
  const handleClick = (e: any) => {
    action();
  };
  return (
    <button
      disabled={disabled}
      className={`${styles.button} ${
        isMain ? styles.mainButton : styles.secondaryButton
      } ${disabled ? styles.disabled : ""}`}
      onClick={(e) => {
        handleClick(e);
      }}
    >
      {text}
    </button>
  );
};

export default Button;
