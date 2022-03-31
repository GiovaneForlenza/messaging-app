import React, { useContext, useEffect, useState } from "react";
import { ActionsModalContext } from "../contexts/ActionsModalContext";
import "../style/options-modal.scss";

function ActionsModal() {
  const { modalX, modalY, modalType, messageModalOptions, optionModalOptions } =
    useContext(ActionsModalContext);
  const left =
    modalX > window.innerWidth / 2 + 300 ? modalX - 180 + "px" : modalX + "px";
  const top =
    modalY > window.innerHeight - 300 ? modalY - 220 + "px" : modalY + "px";

  const [optionsToShow, setOptionsToShow] = useState([]);

  useEffect(() => {
    modalType === "message"
      ? setOptionsToShow(messageModalOptions)
      : setOptionsToShow(optionModalOptions);
  }, []);
  return (
    <div className="options-modal-container" style={{ top: top, left: left }}>
      {console.log(optionsToShow)}
      {optionsToShow.map((option) => {
        return <div className="option-container">{option}</div>;
      })}
    </div>
  );
}

export default ActionsModal;
