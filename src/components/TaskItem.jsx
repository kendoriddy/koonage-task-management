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
    <li className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-gray-700 mb-2">{description}</p>
      <p className={`text-${status === "completed" ? "green" : "red"}-600 mb-2`}>
        Status: {status === "completed" ? "Completed" : "Incomplete"}
      </p>
      <div className="flex space-x-2">
        <button
          onClick={changeTaskStatus}
          className={`bg-${status === "completed" ? "red" : "green"}-500 text-white hover:bg-${
            status === "completed" ? "red" : "green"
          }-600 px-3 py-1 rounded`}
        >
          {status === "completed" ? "Mark as Incomplete" : "Mark as Completed"}
        </button>
        <button
          onClick={openDeletePopup}
          className="bg-red-500 text-white hover:bg-red-600 px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
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
