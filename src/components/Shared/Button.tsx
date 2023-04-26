import React from "react";

import styles from "@/styles/Shared/Button.module.scss";

const Button = ({
  text,
  action,
  isMain = true,
}: {
  text: string;
  action: () => void;
  isMain?: boolean;
}) => {
  const handleClick = (e: any) => {
    action();
  };
  return (
    <button
      className={`${styles.button} ${
        isMain ? styles.mainButton : styles.secondaryButton
      }`}
      onClick={(e) => {
        handleClick(e);
      }}
    >
      {text}
    </button>
  );
};

export default Button;
