import List from "@/components/Shared/List";
import Question from "@/components/Shared/Question";
import { IQuestion } from "@/services/api";
import React from "react";

import styles from "@/styles/Sections/Consultas/QuestionSearch.module.scss";

const QuestionSearch = ({ query, handleUserInput, searchQuestions }: any) => {
  return (
    <>
      <h3>Buscador</h3>
      <input
        className={styles.queryInput}
        value={query}
        onInput={(e) => handleUserInput(e)}
        placeholder="Empieza a escribir..."
      />
      <List
        content={
          searchQuestions.length ? (
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
          )
        }
        direction="column"
      ></List>
    </>
  );
};

export default QuestionSearch;
