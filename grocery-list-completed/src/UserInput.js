import React, { useState, useContext } from "react";
import { UserInputContext } from "./context";

function UserInput() {
  const { addItem } = useContext(UserInputContext);

  const [item, setItem] = useState("");

  function handleUserSubmit(event) {
    event.preventDefault();
    addItem(item);
  }

  return (
    <form onSubmit={handleUserSubmit}>
      <input
        type='text'
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button type='submit'>Submit Groceries</button>
    </form>
  );
}

export default UserInput;
