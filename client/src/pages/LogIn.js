import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import "../style/pages/login.scss";
import { UserContext } from "../contexts/UserContext";
import { serverURL } from "../variables";

function LogIn() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(1);
  const { setIsUserLoggedIn, setUserId } = useContext(UserContext);

  useEffect(() => {
    axios.get(serverURL + "/getUsers").then((response) => {
      setUsers(response.data);
    });
  }, []);

  function handleChange() {
    var selectBox = document.getElementById("users");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    setSelectedUser(selectedValue);
  }

  function handleClick() {
    if (selectedUser !== null) {
      setIsUserLoggedIn(true);
      setUserId(selectedUser);
    }
  }
  return (
    <div className="login-container">
      <div className="line">
        <div className="title">
          Please, select the user you would like to log in with
        </div>
      </div>
      <div className="line">
        <select name="users" id="users" onChange={handleChange}>
          {users.map((user) => {
            return (
              <option key={user.user_id} value={user.user_id}>
                {user.user_name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="line">
        <div className="login-button-container" onClick={handleClick}>
          Login
        </div>
      </div>
    </div>
  );
}

export default LogIn;
