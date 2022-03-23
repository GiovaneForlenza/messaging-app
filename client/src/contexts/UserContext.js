import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState("");

  return (
    <UserContext.Provider
      value={{
        isUserLoggedIn,
        setIsUserLoggedIn,
        userId,
        setUserId,
        userName,
        setUserName,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
