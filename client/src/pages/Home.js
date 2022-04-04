import React, { useContext } from "react";
import "../style/pages/home.scss";
import Sidebar from "../components/sidebar/Sidebar";
import Chat from "../components/chat/Chat";
import { ChatContextProvider } from "../contexts/ChatContext";
import OptionsModal from "../components/actions/ActionsModal";
import { ActionsModalContext } from "../contexts/ActionsModalContext";
function Home() {
  const { showModal, setShowModal } = useContext(ActionsModalContext);

  function handleClick(e) {
    showModal && setShowModal(false);
  }
  return (
    <div className="home-container" onClick={(e) => handleClick(e)}>
      <ChatContextProvider>
        {showModal && <OptionsModal />}
        <Sidebar />
        <Chat />
      </ChatContextProvider>
    </div>
  );
}

export default Home;
