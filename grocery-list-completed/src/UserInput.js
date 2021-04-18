import React from "react";

function UserInput() {
  function handleUserSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleUserSubmit}>
      <input type='text' />
      <button type='submit'>Submit Groceries</button>
    </form>
  );
}

export default UserInput;
