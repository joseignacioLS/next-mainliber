
import React from "react";
import Question from "../../Shared/Question";
import { faq } from "@/services/api";

import List from "@/components/Shared/List";

const FAQ = () => {
  return (
    <>
      <h2>Preguntas Frecuentes</h2>
      <List
        content={faq.map((question, i) => {
          return (
            <Question
              key={question.question + "_" + i}
              question={question.question}
              answer={question.answer}
              showAvatar={false}
            ></Question>
          );
        })}
        direction="column"
      ></List>
    </>
  );
};

export default FAQ;
