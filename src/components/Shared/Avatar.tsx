import React, { useEffect, useState } from "react";

import styles from "./Avatar.module.scss";

const Avatar = ({
  picture,
  name,
  height,
  className,
}: {
  picture: string;
  name?: string;
  height: number;
  className?: string;
}) => {
  useEffect(() => {
    const img = document.querySelector("#avatar-img") as HTMLImageElement;
    img.addEventListener("error", () => {
      img.src =
        "https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA";
    });
    img.src = picture;
  }, [picture]);
  return (
    <div
      className={`${styles.avatar} ${className}`}
      style={{ height: height + "rem" }}
    >
      <img
        id="avatar-img"
        src={picture}
        style={{ width: height - 1 + "rem" }}
        alt="imagen de perfil del usuario"
      />
      {name && <span>{name}</span>}
    </div>
  );
};

export default Avatar;
