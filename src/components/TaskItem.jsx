import React, { useState } from "react";
import TaskDeletePopup from "./TaskDeletePopup";

const TaskItem = ({ task, changeTaskStatus, onDeleteTask }) => {
  const { name, description, status } = task;
  const [isDeletePopupOpen, setDeletePopupOpen] = useState(false);

  const openDeletePopup = () => {
    setDeletePopupOpen(true);
  };

  const closeDeletePopup = () => {
    setDeletePopupOpen(false);
  };

  return (
    <li>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Status: {status === "completed" ? "completed" : "incomplete"}</p>
      <button>Edit</button>
      <button onClick={changeTaskStatus}>
        {status ? "Mark as Incomplete" : "Mark as Completed"}
      </button>
      <button onClick={openDeletePopup}>Delete</button>
      {isDeletePopupOpen && (
        <TaskDeletePopup
          isOpen={isDeletePopupOpen}
          onClose={closeDeletePopup}
          onDeleteTask={onDeleteTask}
          task={task}
        />
      )}
    </li>
  );
};

export default TaskItem;
