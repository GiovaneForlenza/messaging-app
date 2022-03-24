import React, { useState, createContext } from "react";

export const ChatContext = createContext();

export const ChatContextProvider = (props) => {
  const [activeChat, setActiveChat] = useState(0);
  const [chatName, setChatName] = useState("");
  const [messages, setMessages] = useState([]);
  const [writingMessage, setWritingMessage] = useState("");

  function submitMessage(message, from, to, dateTime) {
    alert(`${message}, ${from}, ${to}, ${dateTime}`);
  }
  return (
    <ChatContext.Provider
      value={{
        activeChat,
        setActiveChat,
        chatName,
        setChatName,
        messages,
        setMessages,
        writingMessage,
        setWritingMessage,
        submitMessage,
      }}
    >
      {props.children}
    </ChatContext.Provider>
  );
};
