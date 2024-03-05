import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function NewTask({ newTask, setNewTask, addNewTask }) {
  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  return (
    <div className="new-task">
      <div className="new-task-container">
        <input
          id="new-task-textbox"
          value={newTask}
          onChange={handleChange}
          placeholder="Add task..."
          type="text"
        ></input>
        <div className="new-task-button button" onClick={addNewTask}>
          <FontAwesomeIcon icon={faAdd} className="button-icon" />
        </div>
      </div>
    </div>
  );
}
