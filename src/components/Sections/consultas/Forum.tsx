import React, { useContext, useEffect, useState } from "react";
import { IQuestion, getUserQuestions } from "@/services/api";

import Question from "../../Shared/Question";

import { UserContext } from "@/contexts/user";
import GoogleLogin from "@/components/Shared/GoogleLogin";
import List from "@/components/Shared/List";
import QuestionForm from "./QuestionForm";
import QuestionSearch from "./QuestionSearch";
import { ModalContext } from "@/contexts/modal";
import Button from "@/components/Shared/Button";

const Forum = () => {
  const { userData }: any = useContext(UserContext);
  const [userQuestions, setUserQuestions] = useState([] as IQuestion[]);
  const { openModal } = useContext(ModalContext);

  const updateQuestionsOnUser = async () => {
    if (!userData?.email) return;
    setUserQuestions(await getUserQuestions(userData?.email));
  };

  useEffect(() => {
    updateQuestionsOnUser();
  }, [userData?.email]);

  return (
    <>
      <h2>Consultas</h2>
      {userData?.email ? (
        <div className="separatedBlock">
          <List
            content={[
              <h3 key="title">Mis preguntas</h3>,
              <Button
                key="button"
                text="Nueva Consulta"
                action={() =>
                  openModal(
                    <QuestionForm
                      setUserQuestions={setUserQuestions}
                    ></QuestionForm>
                  )
                }
              ></Button>,
            ]}
          ></List>
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
        <QuestionSearch></QuestionSearch>
      </div>
    </>
  );
};

export default Forum;
