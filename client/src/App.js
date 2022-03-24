import "./App.css";

import React, { useContext } from "react";
import Home from "./pages/Home";
import { UserContext } from "./contexts/UserContext";
import LogIn from "./pages/LogIn";

import { ActionsModalContextProvider } from "./contexts/ActionsModalContext";

function App() {
  const { isUserLoggedIn } = useContext(UserContext);
  return (
    <div className="App">
      {isUserLoggedIn ? (
        <ActionsModalContextProvider>
          <Home />
        </ActionsModalContextProvider>
      ) : (
        <LogIn />
      )}
    </div>
  );
}

export default App;
