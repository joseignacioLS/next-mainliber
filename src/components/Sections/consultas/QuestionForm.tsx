import Button from "@/components/Shared/Button";
import List from "@/components/Shared/List";
import { ModalContext } from "@/contexts/modal";
import { UserContext } from "@/contexts/user";
import React, { useContext, useState } from "react";
import {
  IQuestion,
  createNewQuestionRequest,
  getUserQuestionsRequest,
} from "@/services/api";

import styles from "./QuestionForm.module.scss";
import Spinner from "@/components/Shared/Spinner";

const QuestionForm = ({
  setUserQuestions,
}: {
  setUserQuestions: (userQuestions: IQuestion[]) => void;
}) => {
  const { userData } = useContext(UserContext);
  const { openModal, closeModal } = useContext(ModalContext);

  const [formData, setFormData] = useState({
    question: "",
    subscribe: true,
  } as {
    question: string;
    subscribe: boolean;
  });

  const handleFormData = (value: number | string | boolean, field: string) => {
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
        <List distribution="center">
          <Button
            action={async () => {
              openModal(<Spinner></Spinner>);
              await createNewQuestionRequest(
                userData.email,
                formData.question,
                formData.subscribe
              );
              setFormData({
                question: "",
                subscribe: true,
              });
              setUserQuestions(await getUserQuestionsRequest(userData?.email));
              closeModal();
            }}
          >
            Confirmar
          </Button>
          <Button
            action={() => {
              closeModal();
            }}
          >
            Cancelar
          </Button>
        </List>
      </div>
    );
  };
  return (
    <form
      className={styles.questionForm}
    >
      <h3>Nueva consulta</h3>
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
      <List>
        <Button
          action={(e) => handleSubmitForm(e)}
          disabled={formData.question === ""}
        >
          Enviar pregunta
        </Button>
        <Button action={closeModal}>Cancelar</Button>
      </List>
    </form>
  );
};

export default QuestionForm;
