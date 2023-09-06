import React from "react";

const TaskDeletePopup = ({ isOpen, onClose, onDeleteTask, task }) => {
  const handleDelete = () => {
    onDeleteTask(task.id);
    onClose();
  };

  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } fixed inset-0 flex items-center justify-center z-50`}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white w-96 p-6 rounded-lg shadow-lg z-10">
        <h2 className="text-xl font-semibold mb-4">Delete Task</h2>
        <p className="text-gray-700 mb-4">Are you sure you want to delete this task?</p>
        <div className="flex justify-end">
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white hover:bg-red-600 px-4 py-2 rounded mr-2"
          >
            Delete
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 hover:bg-gray-400 px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDeletePopup;
