import Footer from "@/components/Footer/_footer";
import Header from "@/components/Header/_header";
import {
  IQuestion,
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
  const [searchQuestions, setSearchQuestions] = useState([] as IQuestion[]);

  const handleUserInput = (event: any) => {
    const newQuery = event.currentTarget.value;
    setQuery(newQuery);
    if (newQuery !== "") {
      setSearchQuestions(getQuestionsFilter(newQuery));
    } else {
      setSearchQuestions([]);
    }
  };

  useEffect(() => {
    setUserQuestions(getUserQuestions(userData?.email));
  }, [userData]);
  return (
    <div className="layout">
      <Header></Header>
      <main>
        <h2>Centro de Gestión de Consultas</h2>

        <h3>Consulta nuestro FAQ</h3>

        {userData.email && (
          <>
            <h3>Mis preguntas</h3>
            <div className={styles.questionList}>
              {userQuestions.map((question: IQuestion) => (
                <Question
                  question={question.question}
                  answer={question.answer}
                  image={userData.picture}
                ></Question>
              ))}
            </div>
          </>
        )}

        <h3>Buscador</h3>
        <input
          className={styles.queryInput}
          value={query}
          onInput={(e) => handleUserInput(e)}
        />
        <div className={styles.questionList}>
          {searchQuestions.length ? (
            searchQuestions.map((question: IQuestion) => (
              <Question
                question={question.question}
                answer={question.answer}
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
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Forum;
