import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, openFormPopup, changeTaskStatus, onDeleteTask }) => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Task List</h2>
        <button
          onClick={openFormPopup}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add Task
        </button>
      </div>
      <ul>
        {tasks?.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            changeTaskStatus={() => changeTaskStatus(task.id, task)}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
