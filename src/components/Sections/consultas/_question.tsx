import React, { useState } from "react";

import styles from "@/styles/Sections/Consultas/Question.module.scss";
import Avatar from "@/components/Avatar/_avatar";

const Question = ({
  question,
  answer,
  image = "/assets/iconos/test.png",
  showAvatar = true,
}: {
  question: string;
  answer: string | undefined;
  image?: string;
  showAvatar?: boolean;
}) => {
  return (
    <div className={`${styles.questionItem}`}>
      {showAvatar && (
        <Avatar
          className={styles.user}
          picture={image}
          height={6}
          name="user"
        ></Avatar>
      )}
      <span className={styles.question}>{question}</span>
      <span
        className={`${styles.answer} ${
          answer === undefined && styles.notAnswered
        }`}
      >
        {answer || "Estamos trabajando en contestar esta pregunta"}
      </span>
    </div>
  );
};

export default Question;
