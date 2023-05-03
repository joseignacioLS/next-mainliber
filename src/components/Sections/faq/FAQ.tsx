import React, { useEffect, useState } from "react";
import Question from "../../Shared/Question";
import { IQuestion, getFaqQuestionsRequest } from "@/services/api";

import List from "@/components/Shared/List";

const FAQ = () => {
  const [faqQuestions, setFaqQuestions] = useState([] as IQuestion[]);
  const getFaqQuestions = () => {
    getFaqQuestionsRequest()
      .then((data) => {
        setFaqQuestions(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getFaqQuestions();
  }, []);
  return (
    <>
      <h2>Preguntas Frecuentes</h2>
      <List
        marginTop={true}
        direction="column"
      >{faqQuestions.map((question: IQuestion, i: number) => {
        return (
          <Question
            key={question._id}
            question={question.question}
            answer={question.answer}
            showAvatar={false}
          ></Question>
        );
      })}</List>
    </>
  );
};

export default FAQ;
