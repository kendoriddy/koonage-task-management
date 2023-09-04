import React from "react";

const TaskItem = ({ task, changeTaskStatus }) => {
  const { name, description, completed } = task;

  return (
    <li>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Status: {completed ? "Completed" : "Incomplete"}</p>
      <button>Edit</button>
      <button onClick={changeTaskStatus}>
        {completed ? "Mark as Incomplete" : "Mark as Completed"}
      </button>
      <button>Delete</button>
    </li>
  );
};

export default TaskItem;
