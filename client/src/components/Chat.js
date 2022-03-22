import React from "react";
import "../style/global.scss";
import "../style/chat.scss";
import "../style/messages.scss";

import {
  BsSearch,
  BsThreeDotsVertical,
  BsEmojiSmile,
  BsFillMicFill,
} from "react-icons/bs";
import { AiOutlinePaperClip } from "react-icons/ai";
import ProfilePicture from "./ProfilePicture";
import Message from "./Message";

function Chat() {
  const style = { width: "25px", height: "25px" };
  return (
    <div className="chat-container">
      <div className="header-container">
        <div className="info-container">
          <ProfilePicture />
          <div className="name">Talking to</div>
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
          <Message />
          <Message sent seen />
          <Message sent seen />
          <Message />
          <Message sent seen />
          <Message sent seen />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message sent seen />
          <Message />
          <Message />
          <Message sent seen />
          <Message sent seen />
          <Message sent seen />
          <Message sent seen />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message sent seen />
          <Message />
          <Message />
          <Message sent />
          <Message sent />
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
    </div>
  );
}

export default Chat;
