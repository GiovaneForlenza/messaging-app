import React from "react";
import { BsCheck2All } from "react-icons/bs";
import "../style/messages.scss";
function Message({ sent, seen }) {
  return (
    <div className={`line  ${sent && "sent"}`}>
      <div className="message-container">
        <div className="message">This is the content of the message</div>
        <div className="lower">
          <div className="time">9:45pm</div>
          {sent && (
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
        </div>
      </div>
    </div>
  );
}

export default Message;
