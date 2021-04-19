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
    item: "apple",
  },
];

function App() {
  const [groceryItem, setGroceryItem] = useState(dummyData);

  function showUserInput() {
    return <UserInput />;
  }

  function showGroceries() {
    return groceryItem.map((x) => {
      return <GroceryListItem key={x.id} />;
    });
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
