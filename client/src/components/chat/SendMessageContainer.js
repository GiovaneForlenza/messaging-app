import React, { useContext } from "react";
import "../../style/global.scss";
import "../../style/chat/chat.scss";
import { BsEmojiSmile, BsFillMicFill } from "react-icons/bs";
import { BiSend } from "react-icons/bi";
import { AiOutlinePaperClip } from "react-icons/ai";
import { ChatContext } from "../../contexts/ChatContext";

function SendMessageContainer({ sendMessage }) {
  const { writingMessage, setWritingMessage } = useContext(ChatContext);

  const style = { width: "25px", height: "25px" };

  function handleSubmit(e) {
    e.preventDefault();
    sendMessage(writingMessage);
  }

  return (
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
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Type a message"
            onChange={(e) => {
              setWritingMessage(e.target.value);
            }}
            value={writingMessage}
          />
        </form>
      </div>
      <div className="controls">
        <div className="control">
          {/* {writingMessage.trim().length < 0 ? (
            <BsFillMicFill style={style} />
          ) : (
            )} */}
          <BiSend style={style} />
        </div>
      </div>
    </div>
  );
}

export default SendMessageContainer;
