import React, { ReactNode } from "react";

import styles from "./Question.module.scss";
import Avatar from "@/components/Shared/Avatar";

const Question = ({
  question,
  answer = "",
  user,
  image = "/assets/iconos/test.png",
  showAvatar = true,
}: {
  question: string;
  answer?: string;
  image?: string;
  user?: string;
  showAvatar?: boolean;
}) => {
  return (
    <div className={`${styles.questionItem}`}>
      {showAvatar && (
        <Avatar
          className={styles.user}
          picture={image}
          height={6}
          name={user}
        ></Avatar>
      )}
      <span className={styles.question}>{question}</span>
      <span
        className={`${styles.answer} ${answer === "" && styles.notAnswered}`}
      >
        {answer || "Estamos trabajando en contestar esta pregunta"}
      </span>
    </div>
  );
};

export default Question;
