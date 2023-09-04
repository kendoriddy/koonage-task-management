import React from "react";

const TaskItem = ({ task }) => {
  const { name, description, completed } = task;

  return (
    <li>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Status: {completed ? "Completed" : "Incomplete"}</p>
      <button>Edit</button>
      <button>Update</button>
      <button>Delete</button>
    </li>
  );
};

export default TaskItem;
