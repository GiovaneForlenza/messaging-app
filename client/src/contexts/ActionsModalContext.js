import React, { useState, createContext } from "react";

export const ActionsModalContext = createContext();

export const ActionsModalContextProvider = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [modalX, setModalX] = useState(0);
  const [modalY, setModalY] = useState(0);

  const messageModalOptions = [
    "Message info",
    "Reply",
    "Forward message",
    "Star message",
    "Delete message",
  ];

  const chatModalOptions = [
    "Contact Info",
    "Block",
    "Select messages",
    "Close chat",
    "Mute notifications",
    "Clear messages",
    "Delete chat",
  ];

  const conversationOptions = [
    "Archive chat",
    "Mute notifications",
    "Delete chat",
    "Pin chat",
    "Mark as read",
  ];
  return (
    <ActionsModalContext.Provider
      value={{
        showModal,
        setShowModal,
        modalX,
        setModalX,
        modalY,
        setModalY,
        modalType,
        setModalType,
        messageModalOptions,
        chatModalOptions,
        conversationOptions,
      }}
    >
      {props.children}
    </ActionsModalContext.Provider>
  );
};
