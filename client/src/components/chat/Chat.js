import React, { useEffect, useContext } from "react";
import "../../style/global.scss";
import "../../style/chat/chat.scss";
import "../../style/chat/messages.scss";
import ProfilePicture from "../sidebar/ProfilePicture";
import Message from "./Message";
import ChatAction from "../actions/ChatAction";

import { ChatContext } from "../../contexts/ChatContext";

import { serverURL } from "../../variables";

import { BsSearch } from "react-icons/bs";
import SendMessageContainer from "./SendMessageContainer";
import { UserContext } from "../../contexts/UserContext";

import axios from "axios";

function Chat() {
  const style = { width: "25px", height: "25px" };

  const { activeChat, chatName, messages, setMessages, setWritingMessage } =
    useContext(ChatContext);

  const { userId } = useContext(UserContext);

  function sendMessage(message) {
    var today = new Date();
    var date = `${today.getFullYear()}-${
      today.getMonth() + 1
    }-${today.getDate()}`;
    var today = new Date();
    var time = `${today.getHours()}:${today.getMinutes()}:${
      today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds()
    }`;
    let dateTime = `${date} ${time}`;
    let trimmedMessage = message.trim();
    if (message.length > 0) {
      axios.post(serverURL + "/sendMessage", {
        trimmedMessage,
        userId,
        activeChat,
        dateTime,
      });
      axios
        .post(serverURL + "/getMessages", {
          userId,
          conversationUserId: activeChat,
        })
        .then((response) => {
          setMessages(response.data);
        });
      setWritingMessage("");
    }
  }

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
                <ChatAction />
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
              <div className="anchor" id="messages-anchor"></div>
            </div>
            <SendMessageContainer sendMessage={sendMessage} />
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
