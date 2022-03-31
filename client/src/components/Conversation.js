import React, { useContext, useEffect, useState } from "react";
import ProfilePicture from "./ProfilePicture";
import "../style/conversation.scss";
import { ChatContext } from "../contexts/ChatContext";
import { serverURL } from "../variables";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";
import { getUpdatedMessages } from "../helper";
import { ActionsModalContext } from "../contexts/ActionsModalContext";

function Conversation({ name, conversationUserId }) {
  const {
    activeChat,
    setActiveChat,
    setChatName,
    setMessages,
    setWritingMessage,
  } = useContext(ChatContext);
  const { userId } = useContext(UserContext);
  const [lastMessageSent, setLastMessageSent] = useState("");
  const { setShowModal } = useContext(ActionsModalContext);

  const handleClick = () => {
    setActiveChat(conversationUserId);
    setChatName(name);
    axios
      .post(serverURL + "/getMessages", {
        userId,
        conversationUserId,
      })
      .then((response) => {
        setMessages(response.data);
      });
    setWritingMessage("");
    setShowModal(false);
  };

  useEffect(() => {
    const parsedId = parseInt(conversationUserId);
    axios
      .post(serverURL + "/getLastMessage", { userId, parsedId })
      .then((response) => {
        setLastMessageSent(response.data[0].message_text);
      });
  }, []);

  return (
    <div
      className={`conversation-container ${
        activeChat === conversationUserId && "active"
      }`}
      onClick={handleClick}
    >
      <ProfilePicture />
      <div className="content">
        <div className="line">
          <div className="name">{name}</div>
          <div className="date-time">Friday</div>
        </div>
        <div className="line">
          <div className="last-message">{lastMessageSent}</div>
        </div>
      </div>
    </div>
  );
}

export default Conversation;
