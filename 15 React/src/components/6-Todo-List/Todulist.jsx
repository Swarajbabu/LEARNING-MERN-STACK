import React from "react";
import { useState } from "react";
import "./Todulist.css";

function Todulist() {
  let [arr, setArr] = useState(["Learn React", "Build a Project"]);
  let [newtodo, setNewtodo] = useState("");

  function AddVal() {
    if (newtodo.trim() !== "") {
      setArr([...arr, newtodo]);
      setNewtodo(""); // Clears the textbox after adding
    }
  }

  function update_value(event) {
    setNewtodo(event.target.value);
  }

  return (
    <div className="todo-container">
      <h3>Todo List</h3>

      <div className="todo-input-box">
        <input
          type="text"
          className="todo-input"
          placeholder="Add a new task..."
          value={newtodo}
          onChange={update_value}
        />
        <button className="todo-add-btn" onClick={AddVal}>
          Add
        </button>
      </div>

      <h4 className="todo-list-title">Your Tasks:</h4>
      <ul className="todo-list">
        {arr.map((val, index) => (
          <li className="todo-item" key={index}>
            <span>{val}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todulist;
