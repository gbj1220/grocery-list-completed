import React, { useEffect, useState } from "react";
import "./App.css";

import UserInput from "./UserInput";
import GroceryListItem from "./GroceryListItem";

const dummyData = [
  {
    id: 1,
    item: "bananas",
  },
  {
    id: 2,
    item: "apples",
  },
];

function App() {
  const [groceryItem, setGroceryItem] = useState(dummyData);

  function showUserInput() {
    return <UserInput />;
  }

  function showGroceries() {
    return <GroceryListItem />;
  }
  console.log(groceryItem);

  return (
    <div className='App'>
      {showUserInput()}
      {showGroceries()}
    </div>
  );
}

export default App;
