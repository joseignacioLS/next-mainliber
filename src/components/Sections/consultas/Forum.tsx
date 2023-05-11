import React, { useContext, useEffect, useState } from "react";
import { IQuestion, getUserQuestionsRequest } from "@/services/api";

import Question from "../../Shared/Question";

import { UserContext } from "@/contexts/user";
import GoogleLogin from "@/components/Shared/GoogleLogin";
import List from "@/components/Shared/List";
import QuestionForm from "./QuestionForm";
import QuestionSearch from "./QuestionSearch";
import { ModalContext } from "@/contexts/modal";
import Button from "@/components/Shared/Button";
import Spinner from "@/components/Shared/Spinner";

const Forum = () => {
  const { userData } = useContext(UserContext);
  const [userQuestions, setUserQuestions] = useState([] as IQuestion[]);
  const [isLoadedQuestions, setIsLoadedQuestions] = useState(false);
  const { openModal } = useContext(ModalContext);

  const updateQuestionsOnUser = () => {
    if (!userData?.email) return;
    setIsLoadedQuestions(false);
    getUserQuestionsRequest(userData?.email)
      .then((data) => {
        setUserQuestions(data);
        setIsLoadedQuestions(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    updateQuestionsOnUser();
  }, [userData?.email]);

  return (
    <>
      <h2>Consultas</h2>
      {userData?.email ? (
        <div className="separatedBlock">
          <List>
            <h3>Mis preguntas</h3>
            <Button
              action={() =>
                openModal(
                  <QuestionForm
                    setUserQuestions={setUserQuestions}
                  ></QuestionForm>
                )
              }
            >
              Nueva Consulta
            </Button>
          </List>
          <h4>Mis consultas previas</h4>
          <List maxHeight={600} padding={true} direction="column">
            {isLoadedQuestions ? (
              userQuestions.length > 0 ? (
                userQuestions.map((question: IQuestion) => (
                  <Question
                    key={question._id}
                    question={question.question}
                    answer={question.answer}
                    image={userData.picture}
                  ></Question>
                ))
              ) : (
                <span>No hay consultas previas</span>
              )
            ) : (
              <Spinner></Spinner>
            )}
          </List>
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
