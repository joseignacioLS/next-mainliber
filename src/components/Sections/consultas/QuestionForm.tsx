import Button from "@/components/Shared/Button";
import List from "@/components/Shared/List";
import { ModalContext } from "@/contexts/modal";
import { UserContext } from "@/contexts/user";
import React, { useContext, useState } from "react";
import {
  createNewQuestion,
  getQuestionsFilter,
  getUserQuestions,
} from "@/services/api";

import styles from "./QuestionForm.module.scss";
import Spinner from "@/components/Shared/Spinner";

const QuestionForm = ({ setUserQuestions }: any) => {
  const { userData }: any = useContext(UserContext);
  const { openModal, closeModal } = useContext(ModalContext);

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
    openModal(
      <div>
        <p>Confirme que desea enviar la siguiente pregunta:</p>
        <p>{formData.question}</p>
        <List
          distribution="center"
          content={[
            <Button
              key="accept"
              text={"Confirmar"}
              action={async () => {
                openModal(<Spinner></Spinner>);
                await createNewQuestion(
                  userData.email,
                  formData.question,
                  formData.subscribe
                );
                setFormData({
                  question: "",
                  subscribe: true,
                });
                setUserQuestions(await getUserQuestions(userData?.email));
                closeModal();
              }}
            ></Button>,
            <Button
              key="reject"
              text={"Cancelar"}
              action={(e: any) => {
                e.preventDefault();
                closeModal();
              }}
            ></Button>,
          ]}
        ></List>
      </div>
    );
  };
  return (
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
          Deseo recibir un aviso por email cuando mi pregunta sea contestada
        </span>
      </label>
      <List
        content={[
          <Button
            key="accept"
            text={"Enviar pregunta"}
            action={() => {}}
            disabled={formData.question === ""}
          ></Button>,
          <Button key="reject" text={"Cancelar"} action={closeModal}></Button>,
        ]}
      ></List>
    </form>
  );
};

export default QuestionForm;
