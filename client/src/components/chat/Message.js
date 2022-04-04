import React, { useContext } from "react";
import { BsCheck2All } from "react-icons/bs";
import { ChatContext } from "../../contexts/ChatContext";
import { UserContext } from "../../contexts/UserContext";
import { getMessageTime } from "../../helper";
import "../../style/chat/messages.scss";
import MessageAction from "../actions/MessageAction";
function Message({ sent, seen, message }) {
  const { activeChat } = useContext(ChatContext);
  const { userId } = useContext(UserContext);

  return (
    <div
      className={`line  ${message.message_from === parseInt(userId) && "sent"}`}
    >
      <div className="message-container">
        <div className="message">{message.message_text}</div>
        <div className="lower">
          <div className="time">
            {message.time_sent ? (
              getMessageTime(message.time_sent)
            ) : (
              <span> 9:45pm</span>
            )}
          </div>
          {message.message_from === parseInt(userId) && (
            <div className="status-container">
              <BsCheck2All
                style={{
                  width: "20px",
                  height: "20px",
                  ...(seen && { color: "#53bdeb" }),
                }}
              />
            </div>
          )}
          <MessageAction />
        </div>
      </div>
    </div>
  );
}

export default Message;
