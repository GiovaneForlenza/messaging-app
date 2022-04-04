import React, { useContext } from "react";

import { BsThreeDotsVertical } from "react-icons/bs";
import { ActionsModalContext } from "../../contexts/ActionsModalContext";
function ChatAction() {
  const { setShowModal, setModalX, setModalY, setModalType } =
    useContext(ActionsModalContext);
  const style = { width: "25px", height: "25px" };

  function handleCLick(e) {
    setModalX(e.clientX);
    setModalY(e.clientY);
    setModalType("alert");
    setShowModal(true);
  }
  return (
    <div onClick={(e) => handleCLick(e)}>
      <BsThreeDotsVertical style={style} />
    </div>
  );
}

export default ChatAction;
