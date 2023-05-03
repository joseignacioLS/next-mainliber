import React, { useContext, useEffect, useState } from "react";

import Button from "@/components/Shared/Button";
import List from "@/components/Shared/List";
import Question from "@/pages/administracion/_question";
import { UserContext } from "@/contexts/user";
import { IQuestion, getPageOfQuestionsRequest } from "@/services/api";
import Link from "next/link";
import { useRouter } from "next/router";
import Modal from "@/components/core/Modal/Modal";
import { ModalContext } from "@/contexts/modal";
import Spinner from "@/components/Shared/Spinner";

const Index = () => {
  const [page, setPage] = useState(0);
  const [maxPage, setMaxPage] = useState(0);
  const [questions, setQuestions] = useState([] as IQuestion[]);
  const [loading, setLoading] = useState(true);

  const [onlyUnanswered, setOnlyUnanswered] = useState(false);
  const [showFaq, setShowFaq] = useState(false);

  const { userData, hasAuth } = useContext(UserContext);
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
      if (!hasAuth()) router.push("/");
    }, 5);
  }, [userData, hasAuth, router]);
  return (
    <div className="layout">
      <main>
        <h2>Panel de administración</h2>
        <h3>Listado de preguntas</h3>
        <Button
          action={() => {
            setOnlyUnanswered((oldValue) => !oldValue);
          }}
          mode={onlyUnanswered ? "secondaryButton" : "mainButton"}
        >
          {onlyUnanswered ? "Solo sin contestar" : "Todas las preguntas"}
        </Button>
        <Button
          action={() => {
            setShowFaq((oldValue) => !oldValue);
          }}
          mode={showFaq ? "secondaryButton" : "mainButton"}
        >
          {showFaq ? "Mostrando Faq" : "No mostrando Faq"}
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
      <Link href="/" className="admin-btn">
        <Button mode="secondaryButton" action={() => {}}>
          Home
        </Button>
      </Link>
      {isVisible && <Modal></Modal>}
    </div>
  );
};

export default Index;
