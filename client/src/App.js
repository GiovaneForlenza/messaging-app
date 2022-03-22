import "./App.css";

import React, { useContext } from "react";
import Home from "./pages/Home";
import { UserContext } from "./contexts/UserContext";
import LogIn from "./pages/LogIn";

function App() {
  const { isUserLoggedIn } = useContext(UserContext);
  return <div className="App">{isUserLoggedIn ? <Home /> : <LogIn />}</div>;
}

export default App;
