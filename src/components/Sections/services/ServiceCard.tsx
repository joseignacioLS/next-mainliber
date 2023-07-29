import React, { useContext } from "react";
import styles from "./ServiceCard.module.scss";
import { ModalContext } from "@/contexts/modal";

const ServiceCard = ({
  title,
  icon,
  modal,
}: {
  title: string;
  icon: string;
  modal: any;
}) => {
  const { openModal } = useContext(ModalContext);
  return (
    <div id={title} className={styles.serviceWrap}>
      <div
        className={styles.service}
        onClick={() => {
          openModal(modal);
        }}
      >
        <span>{title}</span>
        <img src={icon} />
      </div>
    </div>
  );
};

export default ServiceCard;
