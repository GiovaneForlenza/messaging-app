import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import "../style/side.scss";
import "../style/global.scss";

import ProfilePicture from "./ProfilePicture";
import { UserContext } from "../contexts/UserContext";

import { BsSearch } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Conversation from "./Conversation";

function Sidebar() {
  const [doesSearchHaveFocus, setDoesSearchHaveFocus] = useState(false);
  const [users, setUsers] = useState([]);

  const { userId } = useContext(UserContext);

  const setSearchFocus = (hasFocus) => {
    setDoesSearchHaveFocus(hasFocus);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/getUserFromId", { userId })
      .then((response) => {
        console.log(response);
      });
    axios.get("http://localhost:3001/getUsers").then((response) => {
      setUsers(response.data);
    });
  }, []);

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
        {users.map((user) => {
          return <Conversation key={user.user_id} name={user.user_name} />;
        })}
      </div>
    </div>
  );
}

export default Sidebar;
