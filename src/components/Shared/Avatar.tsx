import React from "react";

import styles from "./Avatar.module.scss";

const Avatar = ({
  picture,
  name,
  height,
  className
}: {
  picture: string;
  name?: string;
  height: number;
  className?: string;
}) => {
  return (
    <div className={`${styles.avatar} ${className}`} style={{ height: height + "rem" }}>
      <img src={picture} style={{ width: height - 1 + "rem" }} />
      {name && <span>{name}</span>}
    </div>
  );
};

export default Avatar;
