import Forum from "@/components/Sections/consultas/Forum";
import Decesos from "@/components/Sections/services/Individual/Decesos";
import React, { createContext, useState } from "react";

interface IModalProvider {
  isVisible: boolean;
  content: any;
  closeModal: () => void;
  openModal: (content: any) => void;
}

interface IModalData {
  isVisible: boolean;
  content: any;
}

const initialState = {
  isVisible: false,
  content: <Decesos />,
} as IModalData;

export const ModalContext = createContext({} as IModalProvider);

export const ModalContextProvider = ({ children }: { children: any }) => {
  const [modalData, setModalData] = useState(initialState);

  const closeModal = () => {
    setModalData((oldValue) => {
      return { ...oldValue, isVisible: false, content: null };
    });
  };

  const openModal = (content: any) => {
    setModalData((oldValue) => {
      return { ...oldValue, isVisible: true, content };
    });
  };

  return (
    <ModalContext.Provider value={{ ...modalData, closeModal, openModal }}>
      {children}
    </ModalContext.Provider>
  );
};
