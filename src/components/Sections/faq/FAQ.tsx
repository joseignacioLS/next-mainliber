import React from "react";
import Question from "../../Shared/Question";
import { IQuestion } from "@/services/api";

import List from "@/components/Shared/List";

const FAQ = () => {
  return (
    <>
      <h2>Preguntas Frecuentes</h2>
      <List
        marginTop={true}
        content={[].map((question: IQuestion, i: number) => {
          return (
            <Question
              key={question._id}
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
