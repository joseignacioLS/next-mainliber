import {
  IQuestion,
  answerQuestionRequest,
  deleteQuestionRequest,
} from "@/services/api";
import React, { useContext, useState } from "react";

import styles from "./question.module.scss";
import Button from "@/components/Shared/Button";
import { ModalContext } from "@/contexts/modal";
import List from "@/components/Shared/List";

const Question = ({
  question = { _id: "", question: "", answer: "", user: "", date: new Date() },
  updateQuestions,
}: {
  question: IQuestion;
  updateQuestions: any;
}) => {
  const questionDate = new Date(question.date);
  const daysPast = Math.floor(
    (new Date().getTime() - questionDate.getTime()) / (1000 * 60 * 60 * 24)
  );
  const { openModal, closeModal } = useContext(ModalContext);

  const [newAnswer, setNewAnswer] = useState(question.answer);

  const handleInput = (e: any) => {
    setNewAnswer(e.currentTarget.value);
  };

  return (
    <article className={styles.question}>
      <div className={styles.metadata}>
        <b>Usuario:</b>
        <span className="user">{question.user}</span>
        <b>Fecha</b>
        <span className="date">
          {new Date(question.date).toLocaleDateString("es-ES")} (Hace {daysPast}{" "}
          días)
        </span>
      </div>
      <div className={styles.body}>
        <b>Pregunta:</b>
        <span className="question">{question.question}</span>
        <b>Respuesta:</b>
        <textarea
          id={"ID" + question._id}
          className="answer"
          defaultValue={newAnswer}
          onChange={(e) => {
            handleInput(e);
          }}
        ></textarea>
      </div>
      <div className={styles.btns}>
        <Button
          action={() => {
            answerQuestionRequest(question._id, newAnswer || "")
              .then((res) => {
                openModal(<p>Respuesta actualizada correctamente</p>);
                question.answer = newAnswer || "";
                updateQuestions();
              })
              .catch((err) => {
                openModal(<p>Error actualizando la respuesta</p>);
              });
          }}
          disabled={newAnswer === question.answer}
        >
          Actualizar respuesta
        </Button>
        <Button
          action={() => {
            const fieldBox = document.querySelector(
              `#ID${question._id}`
            ) as any;
            if (fieldBox) fieldBox.value = question.answer;
          }}
          disabled={newAnswer === question.answer}
        >
          Eliminar cambios
        </Button>
        <Button
          action={() => {
            openModal(
              <div>
                <p>Alerta, va a borrar la pregunta seleccionada</p>
                <List space={32}>
                  <Button
                    action={() => {
                      deleteQuestionRequest(question._id)
                        .then((res) => {
                          openModal(<p>Pregunta eliminada</p>);
                        })
                        .catch((err) => {
                          openModal(<p>Error eliminando la pregunta</p>);
                        });
                      updateQuestions();
                    }}
                  >
                    confirmar
                  </Button>
                  <Button
                    action={() => {
                      closeModal();
                    }}
                  >
                    cancelar
                  </Button>
                </List>
              </div>
            );
          }}
        >
          Eliminar pregunta
        </Button>
      </div>
    </article>
  );
};

export default Question;
