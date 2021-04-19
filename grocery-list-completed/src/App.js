import React, { useEffect, useState } from "react";
import { UserInputContext, GroceryListItemContext } from "./context";
import { v4 as uuidv4 } from "uuid";

import "./App.css";

import UserInput from "./UserInput";
import GroceryListItem from "./GroceryListItem";

function App() {
  const initialItems = window.localStorage.getItem("items")
    ? JSON.parse(window.localStorage.getItem("items"))
    : [];

  const [groceryItem, setGroceryItem] = useState(initialItems);

  function addItem(item) {
    let newAddedItem = [
      ...groceryItem,
      {
        id: uuidv4(),
        item,
        isCompleted: false,
      },
    ];

    setGroceryItem(newAddedItem);
  }

  function deleteItem(id) {
    let nonDeletedItems = groceryItem.filter((item) => {
      if (item.id !== id) {
        return item;
      }
    });
    setGroceryItem(nonDeletedItems);
  }

  function lineThrough(id) {
    let newArray = groceryItem.map((item) => {
      if (item.id === id) {
        item.isCompleted = !item.isCompleted;
      }
      return item;
    });
    setGroceryItem(newArray);
  }

  function showUserInput() {
    return (
      <UserInputContext.Provider value={{ addItem }}>
        <UserInput />
      </UserInputContext.Provider>
    );
  }

  function showGroceries() {
    return groceryItem.map((item) => {
      return (
        <GroceryListItemContext.Provider
          key={item.id}
          value={{
            groceryItem: item,
            deleteItem,
            lineThrough,
          }}
        >
          <GroceryListItem />
        </GroceryListItemContext.Provider>
      );
    });
  }

  useEffect(() => {
    window.localStorage.setItem("items", JSON.stringify(groceryItem));
  }, [groceryItem]);

  return (
    <div className='App'>
      {showUserInput()}
      {showGroceries()}
    </div>
  );
}

export default App;
