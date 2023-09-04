import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, openFormPopup }) => {
  return (
    <div>
      <div>
        <h2>Task List</h2>
        <button onClick={openFormPopup}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
