import Footer from "@/components/Footer/_footer";
import Header from "@/components/Header/_header";
import React from "react";
import Question from "../consultas/_question";
import { faq } from "@/services/api";

const FAQ = () => {
  return (
    <>
      <h2>FAQ</h2>
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
    </>
  );
};

export default FAQ;
