import React, { useContext, useEffect, useState } from "react";
import ProfilePicture from "./ProfilePicture";
import "../../style/sidebar/conversation.scss";
import { ChatContext } from "../../contexts/ChatContext";
import { serverURL } from "../../variables";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";
import { getUpdatedMessages } from "../../helper";
import { ActionsModalContext } from "../../contexts/ActionsModalContext";
import ConversationAction from "../actions/ConversationAction";

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
  // const { setShowModal } = useContext(ActionsModalContext);

  const { setShowModal, setModalX, setModalY, setModalType } =
    useContext(ActionsModalContext);

  let hasActionCalled = false;
  const handleClick = (caller, e = null) => {
    if (caller === "action") hasActionCalled = true;
    console.log(caller);
    if (caller == "conversation" && !hasActionCalled) {
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
    } else if (caller === "action" && hasActionCalled) {
      setModalX(e.clientX);
      setModalY(e.clientY);
      setModalType("conversation");
      setShowModal(true);
    }
    console.log(hasActionCalled);
    hasActionCalled = false;
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
      onClick={() => handleClick("conversation")}
    >
      <ProfilePicture />
      <div className="content">
        <div className="line">
          <div className="name">{name}</div>
          <div className="date-time">Friday</div>
        </div>
        <div className="line">
          <div className="last-message">{lastMessageSent}</div>
          <ConversationAction handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default Conversation;
