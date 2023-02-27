import React, { useState } from "react";


function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (inputValue.trim() === "") {
      return;
    }
    setItems((prevItems) => [
      ...prevItems,
      { id: Date.now(), text: inputValue, completed: false },
    ]);
    setInputValue("");
  }

  function handleDelete(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function handleToggleCompleted(id) {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  }

  return (
    <div className="TodoList">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add task"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item.id} className={item.completed ? "completed" : ""}>
            <span>{item.text}</span>
            <div>
              <button onClick={() => handleToggleCompleted(item.id)}>
                {item.completed ? "Undo" : "Done"}
              </button>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
