import React, { useEffect, useState } from "react";
import Question from "../../Shared/Question";
import { IQuestion, getFaqQuestionsRequest } from "@/services/api";

import List from "@/components/Shared/List";
import Spinner from "@/components/Shared/Spinner";

const FAQ = () => {
  const [faqQuestions, setFaqQuestions] = useState([] as IQuestion[]);
  const [isLoadedQuestions, setIsLoadedQuestions] = useState(false);
  const getFaqQuestions = () => {
    setIsLoadedQuestions(false);
    getFaqQuestionsRequest()
      .then((data) => {
        setFaqQuestions(data);
        setIsLoadedQuestions(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getFaqQuestions();
  }, []);
  return (
    <section id="faq" className="mainSection">
      <h2>Preguntas Frecuentes</h2>
      <List marginTop={true} direction="column">
        {isLoadedQuestions ? (
          faqQuestions.map((question: IQuestion, i: number) => {
            return (
              <Question
                key={question._id}
                question={question.question}
                answer={question.answer}
                showAvatar={false}
              ></Question>
            );
          })
        ) : (
          <Spinner></Spinner>
        )}
      </List>
    </section>
  );
};

export default FAQ;
