import React, { useContext } from "react";

import { IoIosArrowDown } from "react-icons/io";

import "../../style/actions/conversation-action.scss";
function ConversationAction({ handleClick }) {
  const style = { width: "25px", height: "25px" };

  return (
    <div
      className="conversation-action-container"
      onClick={(e) => handleClick("action", e)}
    >
      <IoIosArrowDown style={{ style }} />
    </div>
  );
}

export default ConversationAction;
