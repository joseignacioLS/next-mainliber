import Footer from "@/components/core/Footer/_footer";
import Header from "@/components/core/Header/_header";
import React from "react";
import Question from "../../Shared/Question";
import { faq } from "@/services/api";

import styles from "@/styles/Sections/FAQ/FAQ.module.scss";

const FAQ = () => {
  return (
    <>
      <h2>FAQ</h2>
      <div className={styles.questionList}>
        {faq.map((question) => {
          return (
            <Question
              key={question.question}
              question={question.question}
              answer={question.answer}
              showAvatar={false}
            ></Question>
          );
        })}
      </div>
    </>
  );
};

export default FAQ;
