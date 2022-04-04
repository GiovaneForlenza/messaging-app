import React, { useContext } from "react";

import { ActionsModalContext } from "../../contexts/ActionsModalContext";
import { IoIosArrowDown } from "react-icons/io";

import "../../style/actions/conversation-action.scss";
function ConversationAction() {
  const { setShowModal, setModalX, setModalY, setModalType } =
    useContext(ActionsModalContext);
  const style = { width: "25px", height: "25px" };

  function handleCLick(e) {
    setModalX(e.clientX);
    setModalY(e.clientY);
    setModalType("conversation");
    setShowModal(true);
  }
  return (
    <div
      className="conversation-action-container"
      onClick={(e) => handleCLick(e)}
    >
      <IoIosArrowDown style={{ style }} />
    </div>
  );
}

export default ConversationAction;
