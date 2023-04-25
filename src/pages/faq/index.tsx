import Footer from "@/components/Footer/_footer";
import Header from "@/components/Header/_header";
import React from "react";
import Question from "../consultas/_question";

const questions = [
  {
    question: "¿Cómo puedo hacerme socio de MainLiber?",
    answer:"Contacta con nosotros en fake@email.fk y conoce más sobre nuestro servicio personalizado."
  }
]

const FAQ = () => {
  return (
    <div className="layout">
      <Header></Header>
      <main>
        {questions.map(question => {
          return <Question key={question.question} question={question.question} answer={question.answer} showAvatar={false}></Question>
        })}
      </main>
      <Footer></Footer>
    </div>
  );
};

export default FAQ;
