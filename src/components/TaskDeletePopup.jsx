import React from "react";

const TaskDeletePopup = ({ isOpen, onClose, onDeleteTask, task }) => {
  const handleDelete = () => {
    onDeleteTask(task.id);
    onClose();
  };

  return (
    <div className={`task-popup ${isOpen ? "open" : ""}`}>
      <div className="task-popup-content">
        <h2>Delete Task</h2>
        <p>Are you sure you want to delete this task?</p>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default TaskDeletePopup;
