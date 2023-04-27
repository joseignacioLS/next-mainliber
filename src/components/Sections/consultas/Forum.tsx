import React, { useContext, useEffect, useState } from "react";
import {
  IQuestion,
  getQuestionsFilter,
  getUserQuestions,
} from "@/services/api";

import Question from "../../Shared/Question";

import { UserContext } from "@/contexts/user";
import GoogleLogin from "@/components/Shared/GoogleLogin";
import List from "@/components/Shared/List";
import QuestionForm from "./QuestionForm";
import QuestionSearch from "./QuestionSearch";

const Forum = () => {
  const [query, setQuery] = useState("");
  const { userData }: any = useContext(UserContext);
  const [userQuestions, setUserQuestions] = useState([] as IQuestion[]);

  const handleUserInput = (event: any) => {
    const newQuery = event.currentTarget.value;
    setQuery(newQuery);
  };
  const updateQuestionsOnUser = async () => {
    setUserQuestions(await getUserQuestions(userData?.email));
  };

  useEffect(() => {
    updateQuestionsOnUser();
  }, [userData]);

  return (
    <>
      <h2>Consultas</h2>
      {userData.email ? (
        <div className="separatedBlock">
          <h3>Mis preguntas</h3>
          <QuestionForm setUserQuestions={setUserQuestions}></QuestionForm>
          <h4>Mis consultas previas</h4>
          <List
            content={userQuestions.map((question: IQuestion, i: number) => (
              <Question
                key={i}
                question={question.question}
                answer={question.answer}
                image={userData.picture}
              ></Question>
            ))}
            direction="column"
          ></List>
        </div>
      ) : (
        <div className="separatedBlock">
          <h3>Inicia sesión para realizar consultas</h3>
          <span>
            Inicia sesión con tu cuenta de Google para realizar tus consultas y
            recibir una notificación al ser contestadas.
          </span>
          <GoogleLogin></GoogleLogin>
        </div>
      )}

      <div className="separatedBlock">
        <QuestionSearch
          query={query}
          handleUserInput={handleUserInput}
        ></QuestionSearch>
      </div>
    </>
  );
};

export default Forum;
