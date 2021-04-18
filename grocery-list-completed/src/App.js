import { useState, useEffect } from "react";
import { GroceryInput } from "./GroceryInput.js";
import { GroceryItems } from "./GroceryItems.js";

import "./App.css";

function App() {
  const hardCodedData = [
    {
      id: u4(),
      groceryItem: "bananas",
    },
    {
      id: u4(),
      groceryItem: "oranges",
    },
  ];

  const [groceryItems, setGroceryItems] = useState(hardCodedData);

  return <div className='App'></div>;
}

export default App;
