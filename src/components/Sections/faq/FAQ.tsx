import React, { useEffect, useState } from "react";
import Question from "../../Shared/Question";
import { IQuestion, getFaqQuestionsRequest } from "@/services/api";

import List from "@/components/Shared/List";

const FAQ = () => {
  const [faqQuestions, setFaqQuestions] = useState([] as IQuestion[]);
  const getFaqQuestions = async () => {
    const questions = await getFaqQuestionsRequest();
    setFaqQuestions(questions)
  };

  useEffect(() => {
    getFaqQuestions();
  }, []);
  return (
    <>
      <h2>Preguntas Frecuentes</h2>
      <List
        marginTop={true}
        content={faqQuestions.map((question: IQuestion, i: number) => {
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
