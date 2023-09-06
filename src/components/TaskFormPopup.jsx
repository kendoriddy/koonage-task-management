import React, { useState } from "react";

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
    <div
      className={`fixed inset-0 flex items-center justify-center ${isOpen ? "block" : "hidden"}`}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white w-96 p-6 rounded-lg shadow-lg z-10">
        <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Task Name:</label>
            <input
              type="text"
              name="name"
              value={task.name}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description:</label>
            <textarea
              name="description"
              value={task.description}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded mr-2"
            >
              Add Task
            </button>
            <button
              onClick={onClose}
              className="bg-gray-300 text-gray-700 hover:bg-gray-400 px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskFormPopup;
