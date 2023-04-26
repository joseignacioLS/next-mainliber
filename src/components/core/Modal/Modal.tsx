import React, { useContext } from "react";

import styles from "@/styles/Modal/Modal.module.scss";
import { ModalContext } from "@/contexts/modal";
import Button from "@/components/Shared/Button";

const Modal = () => {
  const { content, closeModal } = useContext(ModalContext);
  return (
    <div className={styles.modalBackground} onClick={() => closeModal()}>
      <div className={styles.modal}>
        {content}
      </div>
      ;
    </div>
  );
};

export default Modal;
