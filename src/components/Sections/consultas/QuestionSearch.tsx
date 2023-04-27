import List from "@/components/Shared/List";
import Question from "@/components/Shared/Question";
import { IQuestion, getQuestionsFilter } from "@/services/api";
import React, { useState } from "react";

import styles from "./QuestionSearch.module.scss";
import Button from "@/components/Shared/Button";
import Spinner from "@/components/Shared/Spinner";

const QuestionSearch = () => {
  
  const [query, setQuery] = useState("");
  const [searchQuestions, setSearchQuestions] = useState([] as IQuestion[]);
  const [isLoading, setIsLoading] = useState(false);
  const [initSearch, setInitSearch] = useState(false);

    const handleUserInput = (event: any) => {
    const newQuery = event.currentTarget.value;
    setQuery(newQuery);
  };

  const updateQuestionsOnQuery = async () => {
    setInitSearch(true);
    setIsLoading(true);
    const newQuestions = await getQuestionsFilter(query);
    setSearchQuestions(newQuestions);
    setIsLoading(false);
  };
  return (
    <>
      <h3>Buscador</h3>
      <input
        className={styles.queryInput}
        value={query}
        onInput={(e) => handleUserInput(e)}
        placeholder="Empieza a escribir..."
      />
      <Button text="Buscar" action={updateQuestionsOnQuery}></Button>
      {isLoading ? (
        <Spinner></Spinner>
      ) : (
        <List
          content={
            searchQuestions?.length > 0 ? (
              searchQuestions.map((question: IQuestion, i: number) => (
                <Question
                  key={i}
                  question={question.question}
                  answer={question.answer}
                  showAvatar={false}
                ></Question>
              ))
            ) : (
              <span>{initSearch ? "Búsqueda sin resultados" : ""}</span>
            )
          }
          direction="column"
        ></List>
      )}
    </>
  );
};

export default QuestionSearch;
