import React, { useState } from "react";
import "../styles/TaskFormPopup.css";

const TaskFormPopup = ({ isOpen, onClose, onAddTask }) => {
  const [task, setTask] = useState({ name: "", description: "", status: "incomplete" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(task);
    onClose();
    setTask({ name: "", description: "" });
  };

  return (
    <div className={`task-popup ${isOpen ? "open" : ""}`}>
      <div className="task-popup-content">
        <h2>Add New Task</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Task Name:
            <input type="text" name="name" value={task.name} onChange={handleInputChange} />
          </label>
          <label>
            Description:
            <textarea
              name="description"
              value={task.description}
              onChange={handleInputChange}
            ></textarea>
          </label>
          <button type="submit">Add Task</button>
          <button onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default TaskFormPopup;
