import React from "react";
import ProfilePicture from "./ProfilePicture";
import "../style/conversation.scss";

function Conversation({ active, name }) {
  return (
    <div className={`conversation-container ${active ? "active" : ""}`}>
      <ProfilePicture />
      <div className="content">
        <div className="line">
          <div className="title">{name}</div>
          <div className="date-time">Friday</div>
        </div>
        <div className="line">
          <div className="last-message">This is the last message</div>
        </div>
      </div>
    </div>
  );
}

export default Conversation;