import React, { useContext } from "react";
import { ActionsModalContext } from "../contexts/ActionsModalContext";
import "../style/options-modal.scss";

function ActionsModal() {
  const { modalX, modalY } = useContext(ActionsModalContext);
  const left =
    modalX > (window.innerWidth / 3) * 4 ? modalX - 160 + "px" : modalX + "px";
  console.log(modalX < window.innerWidth / 2);
  const top = modalY + 10 + "px";
  return (
    <div className="options-modal-container" style={{ top: top, left: left }}>
      ActionsModal
    </div>
  );
}

export default ActionsModal;
