import React, { useContext, useEffect, useState } from "react";
import { ActionsModalContext } from "../../contexts/ActionsModalContext";
import "../../style/actions/options-modal.scss";

function ActionsModal() {
  const {
    modalX,
    modalY,
    modalType,
    messageModalOptions,
    chatModalOptions,
    conversationOptions,
  } = useContext(ActionsModalContext);
  const left =
    modalX > window.innerWidth / 2 + 300 ? modalX - 180 + "px" : modalX + "px";
  const top =
    modalY > window.innerHeight - 300 ? modalY - 220 + "px" : modalY + "px";

  const [optionsToShow, setOptionsToShow] = useState([]);

  useEffect(() => {
    switch (modalType) {
      case "message":
        setOptionsToShow(messageModalOptions);
        break;
      case "chat":
        setOptionsToShow(chatModalOptions);
        break;
      case "conversation":
        setOptionsToShow(conversationOptions);
        break;
    }
  }, []);
  return (
    <div className="options-modal-container" style={{ top: top, left: left }}>
      {optionsToShow.map((option, id) => {
        return (
          <div key={id} className="option-container">
            {option}
          </div>
        );
      })}
    </div>
  );
}

export default ActionsModal;
