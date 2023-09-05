import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, openFormPopup, changeTaskStatus, onDeleteTask }) => {
  return (
    <div>
      <div>
        <h2>Task List</h2>
        <button onClick={openFormPopup}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            changeTaskStatus={() => changeTaskStatus(task.id)}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
