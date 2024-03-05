import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";

export default function Task({
  task,
  index,
  myTasks,
  setMyTasks,
  taskCompleted,
  setTaskCompleted,
}) {
  const [thisTaskCompleted, setThisTaskCompleted] = useState(false);

  useEffect(() => {
    setThisTaskCompleted(taskCompleted[index]);
  }, [taskCompleted]);

  const deleteTask = () => {
    const taskList = [...myTasks];
    taskList.splice(index, 1);
    setMyTasks(taskList);

    const taskCompleteList = [...taskCompleted];
    taskCompleteList.splice(index, 1);
    setTaskCompleted(taskCompleteList);
  };

  const completeTask = () => {
    const taskList = [...myTasks];
    const thisTask = taskList[index];
    taskList.splice(index, 1);
    taskList.push(thisTask);
    setMyTasks(taskList);

    const taskCompleteList = [...taskCompleted];
    taskCompleteList.splice(index, 1);
    taskCompleteList.push(true);
    setTaskCompleted(taskCompleteList);
  };

  return (
    <div className={thisTaskCompleted ? "task task-completed" : "task"}>
      <div className="task-container">
        <span className="task-text">{task}</span>
        <div className="task-buttons">
          <div className="button task-button-delete" onClick={deleteTask}>
            <FontAwesomeIcon icon={faTrash} className="button-icon" />
          </div>
          <div
            className={
              thisTaskCompleted ? "display-none" : "button task-button-complete"
            }
            onClick={completeTask}
          >
            <FontAwesomeIcon
              icon={faCheck}
              className={thisTaskCompleted ? "display-none" : "button-icon"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
