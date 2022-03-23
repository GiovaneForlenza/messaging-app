import React, { useState, createContext } from "react";

export const ChatContext = createContext();

export const ChatContextProvider = (props) => {
  const [activeChat, setActiveChat] = useState(0);
  const [chatName, setChatName] = useState("");
  const [messages, setMessages] = useState({});
  return (
    <ChatContext.Provider
      value={{
        activeChat,
        setActiveChat,
        chatName,
        setChatName,
        messages,
        setMessages,
      }}
    >
      {props.children}
    </ChatContext.Provider>
  );
};
