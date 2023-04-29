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
  }, [userData]);
  return (
    <div className="layout">
      <main>
        <h2>Panel de administración</h2>
        <h3>Listado de preguntas</h3>
        <Button
          key="button"
          text={onlyUnanswered ? "Solo sin contestar" : "Todas las preguntas"}
          action={() => {
            setOnlyUnanswered((oldValue) => !oldValue);
          }}
          isMain={!onlyUnanswered}
        ></Button>
        <Button
          key="button"
          text={showFaq ? "Mostrando Faq" : "No mostrando Faq"}
          action={() => {
            setShowFaq((oldValue) => !oldValue);
          }}
          isMain={!showFaq}
        ></Button>
        <List
          marginTop={true}
          content={[
            <Button
              key="prev"
              text="<"
              action={() => {
                setPage((oldValue) => Math.max(0, oldValue - 1));
              }}
              disabled={page === 0}
            ></Button>,
            <span key="page">{page}</span>,
            <Button
              key="next"
              text=">"
              disabled={page === maxPage}
              action={() => {
                setPage((oldValue) => Math.min(maxPage, oldValue + 1));
              }}
            ></Button>,
          ]}
        ></List>

        {loading ? (
          <Spinner></Spinner>
        ) : (
          <List
            direction="column"
            content={questions.map((q: IQuestion) => (
              <Question
                key={q._id}
                question={q}
                updateQuestions={getPageOfQuestions}
              ></Question>
            ))}
          ></List>
        )}
      </main>
      <Link href="/" className="admin-btn">
        <Button isMain={false} text="Home" action={() => {}}></Button>
      </Link>
      {isVisible && <Modal></Modal>}
    </div>
  );
};

export default Index;
