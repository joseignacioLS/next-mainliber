import React from "react";

import styles from "@/styles/Avatar/Avatar.module.scss";

const Avatar = ({
  picture,
  name,
  height,
}: {
  picture: string;
  name?: string;
  height: number;
}) => {
  return (
    <div className={styles.avatar} style={{ height: height + "rem" }}>
      <img src={picture} style={{ width: height - 1 + "rem" }} />
      {name && <span>{name}</span>}
    </div>
  );
};

export default Avatar;
