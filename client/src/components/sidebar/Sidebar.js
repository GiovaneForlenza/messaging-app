import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import "../../style/sidebar/side.scss";
import "../../style/global.scss";

import ProfilePicture from "./ProfilePicture";
import { UserContext } from "../../contexts/UserContext";

import { BsSearch } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Conversation from "./Conversation";

import { serverURL } from "../../variables";

function Sidebar() {
  const [doesSearchHaveFocus, setDoesSearchHaveFocus] = useState(false);
  const [users, setUsers] = useState([]);

  const { userId, userName, setUserName } = useContext(UserContext);

  const setSearchFocus = (hasFocus) => {
    setDoesSearchHaveFocus(hasFocus);
  };

  useEffect(() => {
    axios.post(serverURL + "/getUserFromId", { userId }).then((response) => {
      setUserName(response.data[0].user_name);
    });
    axios.get(serverURL + "/getUsers").then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div className="sidebar-container">
      <div className="profile-container">
        <ProfilePicture />
        <div className="name">{userName}</div>
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
        {users.map((user) => {
          if (user.user_id !== parseInt(userId))
            return (
              <Conversation
                key={user.user_id}
                name={user.user_name}
                conversationUserId={user.user_id}
              />
            );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
