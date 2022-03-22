import React from "react";
import "../style/home.scss";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
function Home() {
  return (
    <div className="home-container">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default Home;
