import React, { useContext } from "react";
import { GroceryListItemContext } from "./context";

function GroceryListItem() {
  const {
    groceryItem: { id, item, isCompleted },
    deleteItem,
    lineThrough,
  } = useContext(GroceryListItemContext);

  return (
    <div>
      <span style={{ textDecoration: isCompleted ? "line-through" : "" }}>
        {item}
      </span>{" "}
      <button onClick={() => lineThrough(id)}>Done</button>
      <button onClick={() => deleteItem(id)}>Delete</button>
    </div>
  );
}

export default GroceryListItem;
