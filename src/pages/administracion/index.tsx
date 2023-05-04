import React, { useContext, useEffect, useState } from "react";

import Button from "@/components/Shared/Button";
import List from "@/components/Shared/List";
import Question from "@/pages/administracion/_question";
import { UserContext } from "@/contexts/user";
import { IQuestion, getPageOfQuestionsRequest } from "@/services/api";
import { useRouter } from "next/router";
import Modal from "@/components/core/Modal/Modal";
import { ModalContext } from "@/contexts/modal";
import Spinner from "@/components/Shared/Spinner";
import Head from "next/head";

const Index = () => {
  const [page, setPage] = useState(0);
  const [maxPage, setMaxPage] = useState(0);
  const [questions, setQuestions] = useState([] as IQuestion[]);
  const [loading, setLoading] = useState(true);

  const [onlyUnanswered, setOnlyUnanswered] = useState(false);
  const [showFaq, setShowFaq] = useState(false);

  const { userData } = useContext(UserContext);
  const { isVisible } = useContext(ModalContext);
  const router = useRouter();

  const getPageOfQuestions = async () => {
    setLoading(true);
    getPageOfQuestionsRequest(page, onlyUnanswered, showFaq)
      .then((response) => {
        setQuestions(response.questions);
        setMaxPage(response.maxPage);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    getPageOfQuestions();
  }, [page, onlyUnanswered, showFaq]);

  useEffect(() => {
    setTimeout(() => {
      if (!userData.isAdmin) router.push("/");
    }, 5);
  }, [userData, userData.isAdmin, router]);
  return (
    <div className="layout">
      <Head>
        <title>Panel de Control - MainLiber</title>
      </Head>
      <main>
        <h2>Panel de administración</h2>
        <h3>Listado de preguntas</h3>
        <Button
          action={() => {
            setOnlyUnanswered((oldValue) => !oldValue);
          }}
          mode={onlyUnanswered ? "secondaryButton" : "mainButton"}
        >
          {onlyUnanswered
            ? "Mostrar preguntas contestadas"
            : "Ocultar preguntas contestadas"}
        </Button>
        <Button
          action={() => {
            setShowFaq((oldValue) => !oldValue);
          }}
          mode={showFaq ? "secondaryButton" : "mainButton"}
        >
          {showFaq ? "Ocultar FAQ" : "Mostrar Faq"}
        </Button>
        <List marginTop={true}>
          <Button
            action={() => {
              setPage((oldValue) => Math.max(0, oldValue - 1));
            }}
            disabled={page === 0}
          >
            {"<"}
          </Button>
          <span>{page}</span>
          <Button
            disabled={page === maxPage}
            action={() => {
              setPage((oldValue) => Math.min(maxPage, oldValue + 1));
            }}
          >
            {">"}
          </Button>
        </List>

        {loading ? (
          <Spinner></Spinner>
        ) : (
          <List marginTop={true} direction="column">
            {questions.map((q: IQuestion) => (
              <Question
                key={q._id}
                question={q}
                updateQuestions={getPageOfQuestions}
              ></Question>
            ))}
          </List>
        )}
      </main>
      <div className="admin-btn">
        <Button mode="secondaryButton" action={() => {}} redirect="/">
          Home
        </Button>
      </div>
      {isVisible && <Modal></Modal>}
    </div>
  );
};

export default Index;
