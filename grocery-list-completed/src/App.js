import React, { useEffect, useState } from "react";
import "./App.css";

import userInput from "./userInput";

function App() {
  function showUserInput() {
    return <UserInput />;
  }

  return <div className='App'>{showUserInput()}</div>;
}

export default App;
