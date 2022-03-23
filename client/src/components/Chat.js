import React, { useEffect, useContext } from "react";
import "../style/global.scss";
import "../style/chat.scss";
import "../style/messages.scss";
import ProfilePicture from "./ProfilePicture";
import Message from "./Message";
import { ChatContext } from "../contexts/ChatContext";

import {
  BsSearch,
  BsThreeDotsVertical,
  BsEmojiSmile,
  BsFillMicFill,
} from "react-icons/bs";
import { AiOutlinePaperClip } from "react-icons/ai";
import { UserContext } from "../contexts/UserContext";

function Chat() {
  const style = { width: "25px", height: "25px" };

  const { activeChat, chatName, messages } = useContext(ChatContext);

  useEffect(() => {
    if (activeChat) {
      document.getElementById("messages-anchor").scrollIntoView();
    }
  }, [messages]);
  return (
    <div className="chat-container">
      {activeChat ? (
        <>
          <div className="header-container">
            <div className="info-container">
              <ProfilePicture />
              <div className="name">{chatName}</div>
            </div>
            <div className="controls-container">
              <div className="control">
                <BsSearch style={style} />
              </div>
              <div className="control">
                <BsThreeDotsVertical style={style} />
              </div>
            </div>
          </div>
          <div className="messages-container">
            <div className="messages">
              {messages.length > 0 ? (
                messages.map((message) => {
                  return <Message key={message.message_id} message={message} />;
                })
              ) : (
                <h1>No messages</h1>
              )}
              {/* <Message />
              <Message sent seen />
              <Message sent seen />
              <Message />
              <Message sent seen />
              <Message sent seen /> */}
              <div className="anchor" id="messages-anchor"></div>
            </div>
            <div className="send-message-container">
              <div className="controls">
                <div className="control">
                  <BsEmojiSmile style={style} />
                </div>
                <div className="control">
                  <AiOutlinePaperClip style={style} />
                </div>
              </div>
              <div className="message-box">
                <input type="text" placeholder="Type a message" />
              </div>
              <div className="controls">
                <div className="control">
                  <BsFillMicFill style={style} />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="no-chat-selected">
          Please select a chat to view the messages
        </div>
      )}
    </div>
  );
}

export default Chat;
