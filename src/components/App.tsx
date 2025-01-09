import React, { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import ListItem from "./ListItem";

export interface TodoItem {
  id: string;
  name: string;
}

function App() {
  const [items, setItems] = useState<TodoItem[]>([]);
  const [userInput, setUserInput] = useState<string>("");

  const addItem = (userInput: string) => {
    const newItem = { id: uuidv4(), name: userInput };
    setItems((prevItems) => {
      return [...prevItems, newItem];
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userInput.trim() !== "") {
      addItem(userInput);
      setUserInput("");
    } else {
      setUserInput("");
      return;
    }
  };

  const deleteItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="main-container">
      <div className="main-header">React To-Do List</div>
      <div className="notepad-container">
        <div className="notepad-header">
          <h2>Notepad</h2>
        </div>
        <div className="list-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={userInput}
              onChange={handleChange}
              placeholder="New Task..."
            />
            <button type="submit">Add</button>
          </form>
        </div>
        <ListItem items={items} deleteItem={deleteItem} />
      </div>
    </div>
  );
}

export default App;
