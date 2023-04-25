import Footer from "@/components/Footer/_footer";
import Header from "@/components/Header/_header";
import {
  IQuestion,
  createNewQuestion,
  getQuestionsFilter,
  getUserQuestions,
} from "@/services/api";
import React, { useContext, useEffect, useState } from "react";
import Question from "./_question";

import styles from "@/styles/Consultas/Consultas.module.scss";
import { UserContext } from "@/contexts/user";

const Forum = () => {
  const [query, setQuery] = useState("");
  const { userData }: any = useContext(UserContext);
  const [userQuestions, setUserQuestions] = useState([] as IQuestion[]);
  const [searchQuestions, setSearchQuestions] = useState(
    getQuestionsFilter("")
  );

  const [formData, setFormData] = useState({
    question: "",
    subscribe: true,
  } as {
    question: string;
    subscribe: boolean;
  });

  const handleFormData = (value: any, field: string) => {
    setFormData((oldValue) => {
      return { ...oldValue, [field]: value };
    });
  };

  const handleSubmitForm = (e: any) => {
    e.preventDefault();
    if (!userData?.email) return;
    createNewQuestion(userData.email, formData.question, formData.subscribe);
    setFormData({
      question: "",
      subscribe: false,
    });
    setUserQuestions(getUserQuestions(userData?.email));
    setSearchQuestions(getQuestionsFilter(query));
  };

  const handleUserInput = (event: any) => {
    const newQuery = event.currentTarget.value;
    setQuery(newQuery);
    setSearchQuestions(getQuestionsFilter(newQuery));
  };

  useEffect(() => {
    setUserQuestions(getUserQuestions(userData?.email));
  }, [userData]);
  return (
    <>
      <h2>Centro de Gestión de Consultas</h2>
      {userData.email ? (
        <div className="separatedBlock">
          <h3>Mis preguntas</h3>
          <form
            className={styles.questionForm}
            onSubmit={(e) => {
              handleSubmitForm(e);
            }}
          >
            <h4>Nueva consulta</h4>
            <label>
              <span>Escribe tu pregunta</span>
              <textarea
                value={formData.question}
                onChange={(e) => {
                  handleFormData(e.currentTarget.value, "question");
                }}
              ></textarea>
            </label>
            <label className={styles.labelRow}>
              <input
                type="checkbox"
                checked={formData.subscribe}
                onChange={(e) => {
                  handleFormData(e.currentTarget.checked, "subscribe");
                }}
              />
              <span>
                Deseo recibir un aviso por email cuando mi pregunta sea
                contestada
              </span>
            </label>
            <button>Enviar pregunta</button>
          </form>
          <h4>Mis consultas previas</h4>
          <div className={styles.questionList}>
            {userQuestions.map((question: IQuestion, i: number) => (
              <Question
                key={i}
                question={question.question}
                answer={question.answer}
                image={userData.picture}
              ></Question>
            ))}
          </div>
        </div>
      ) : (
        <div className="separatedBlock">
          <h3>Inicia sesión para realizar consultas</h3>
          <span>
            Inicia sesión con tu cuenta de google usando el botón de la barra de
            navegación para realizar tus consultas y que te notifiquemos al ser
            contestadas.
          </span>
        </div>
      )}

      <div className="separatedBlock">
        <h3>Buscador</h3>
        <input
          className={styles.queryInput}
          value={query}
          onInput={(e) => handleUserInput(e)}
        />
        <div className={styles.questionList}>
          {searchQuestions.length ? (
            searchQuestions.map((question: IQuestion, i: number) => (
              <Question
                key={i}
                question={question.question}
                answer={question.answer}
                showAvatar={false}
              ></Question>
            ))
          ) : (
            <p>
              {query === ""
                ? "Escribe en la caja para empezar a búscar"
                : "Búsqueda sin resultados"}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Forum;
