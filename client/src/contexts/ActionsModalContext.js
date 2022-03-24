import React, { useState, createContext } from "react";

export const ActionsModalContext = createContext();

export const ActionsModalContextProvider = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [modalX, setModalX] = useState(0);
  const [modalY, setModalY] = useState(0);
  return (
    <ActionsModalContext.Provider
      value={{ showModal, setShowModal, modalX, setModalX, modalY, setModalY }}
    >
      {props.children}
    </ActionsModalContext.Provider>
  );
};
