import React from "react";
import "../style/home.scss";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import { ChatContextProvider } from "../contexts/ChatContext";
function Home() {
  return (
    <div className="home-container">
      <ChatContextProvider>
        <Sidebar />
        <Chat />
      </ChatContextProvider>
    </div>
  );
}

export default Home;
