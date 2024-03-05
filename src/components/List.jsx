import React, { useState, useEffect } from "react";
import Task from "./Task";
import NewTask from "./NewTask";
import { render } from "react-dom";

export default function List() {
  const [myTasks, setMyTasks] = useState([]);
  const [taskCompleted, setTaskCompleted] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    console.log(myTasks);
  }, [myTasks]);

  useEffect(() => {
    console.log(taskCompleted);
  }, [taskCompleted]);

  const addNewTask = () => {
    const tempTasks = [...myTasks];
    tempTasks.unshift(newTask);
    setMyTasks(tempTasks);

    const tempTasksCompleted = [...taskCompleted];
    tempTasksCompleted.unshift(false);
    setTaskCompleted(tempTasksCompleted);

    setNewTask("");
  };

  const renderTasks = myTasks.map((task, index) => {
    return (
      <Task
        key={index}
        task={task}
        index={index}
        myTasks={myTasks}
        setMyTasks={setMyTasks}
        taskCompleted={taskCompleted}
        setTaskCompleted={setTaskCompleted}
      />
    );
  });

  const countCompletedTasks = () => {
    var total = myTasks.length;
    var completed = 0;
    for (var i = 0; i < total; i++) {
      if (taskCompleted[i]) {
        completed++;
      }
    }
    return `${completed}/${total}`;
  };

  return (
    <div className="list-parent">
      <div className="list">
        <div className="list-container">
          <h1 className="list-header">My Tasks</h1>
          <div className="list-tasks-container">{renderTasks}</div>
          <NewTask
            newTask={newTask}
            setNewTask={setNewTask}
            addNewTask={addNewTask}
          />
        </div>
      </div>
      <div className="counter">Tasks Completed: {countCompletedTasks()}</div>
    </div>
  );
}
