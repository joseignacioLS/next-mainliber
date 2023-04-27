import Button from "@/components/Shared/Button";
import List from "@/components/Shared/List";
import Question from "@/components/Shared/Question";
import Header from "@/components/core/Header/Header";
import { UserContext } from "@/contexts/user";
import { IQuestion, getPageOfQuestionsRequest } from "@/services/api";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";

const index = () => {
  const [page, setPage] = useState(0);
  const [maxPage, setMaxPage] = useState(0);
  const [questions, setQuestions] = useState([] as any);

  const { userData, hasAuth } = useContext(UserContext);
  const router = useRouter();

  const getPageOfQuestions = async () => {
    const response = await getPageOfQuestionsRequest(page);
    setQuestions(response.questions);
    setMaxPage(response.maxPage);
  };
  useEffect(() => {
    getPageOfQuestions();
  }, [page]);

  useEffect(() => {
    setTimeout(() => {
      if (!hasAuth()) router.push("/");
    }, 5);
  }, [userData]);
  return (
    <div className="layout">
      <main>
        <h2>Panel de administración</h2>
        <h3>Listado de preguntas (paginado)</h3>
        <List
          direction="column"
          content={questions.map((q: IQuestion) => (
            <Question
              key={q._id}
              question={q.question}
              answer={q.answer}
              user={q.user}
            ></Question>
          ))}
        ></List>
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
      </main>
      
        <Link href="/" className="admin-btn">
          <Button isMain={false} text="Home" action={() => {}}></Button>
        </Link>
    </div>
  );
};

export default index;
