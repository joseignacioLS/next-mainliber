import React, { ReactNode, createContext, useState } from "react";

interface IModalProvider {
  isVisible: boolean;
  content: ReactNode;
  closeModal: () => void;
  openModal: (content: ReactNode) => void;
}

interface IModalData {
  isVisible: boolean;
  content: ReactNode;
}

const initialState = {
  isVisible: false,
  content: null,
} as IModalData;

export const ModalContext = createContext({} as IModalProvider);

export const ModalContextProvider = ({ children }: { children: ReactNode }) => {
  const [modalData, setModalData] = useState(initialState);

  const closeModal = (): void => {
    setModalData((oldValue) => {
      return { ...oldValue, isVisible: false, content: null };
    });
  };

  const openModal = (content: ReactNode): void => {
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
