import React, { useState } from "react";

import "../style/side.scss";
import "../style/global.scss";

import ProfilePicture from "./ProfilePicture";

import { BsSearch } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Conversation from "./Conversation";

function Sidebar() {
  const [doesSearchHaveFocus, setDoesSearchHaveFocus] = useState(false);

  const setSearchFocus = (hasFocus) => {
    setDoesSearchHaveFocus(hasFocus);
  };

  return (
    <div className="sidebar-container">
      <div className="profile-container">
        <ProfilePicture />
        <div className="name">Giovane Forlenza</div>
      </div>
      <div className="search-container">
        <div className="search-box-container">
          <div className="icon">
            {doesSearchHaveFocus ? (
              <AiOutlineArrowLeft
                style={{
                  width: "20px",
                  height: "20px",
                  color: "#06a482",
                }}
              />
            ) : (
              <BsSearch style={{ width: "20px", height: "20px" }} />
            )}
          </div>
          <div
            className="search"
            onFocus={() => {
              setSearchFocus(true);
            }}
            onBlur={() => {
              setSearchFocus(false);
            }}
          >
            <input type="text" />
          </div>
        </div>
      </div>
      <div className="conversations-container">
        <Conversation />
        <Conversation />
        <Conversation active />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
      </div>
    </div>
  );
}

export default Sidebar;
