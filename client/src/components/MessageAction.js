import React, { useContext } from "react";

import "../style/message-action.scss";

import { IoIosArrowDown } from "react-icons/io";
import OptionsModal from "./ActionsModal";
import { ActionsModalContext } from "../contexts/ActionsModalContext";

function MessageAction() {
  const { setShowModal, setModalX, setModalY, setModalType } =
    useContext(ActionsModalContext);

  function handleClick(e) {
    setModalX(e.clientX);
    setModalY(e.clientY);
    setModalType("message");
    setShowModal(true);
  }

  return (
    <div className="message-action-container" onClick={(e) => handleClick(e)}>
      <IoIosArrowDown
        className="action-modal-activator"
        style={{
          width: "20px",
          height: "20px",
        }}
      />
    </div>
  );
}

export default MessageAction;
