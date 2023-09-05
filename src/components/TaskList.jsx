import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({
  tasks,
  openFormPopup,
  changeTaskStatus,
  onDeleteTask,
  filter,
  handleFilterChange,
}) => {
  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") {
      return tasks;
    } else if (filter === "completed") {
      return task.completed;
    } else {
      return !task.completed;
    }
  });
  return (
    <div>
      <div>
        <h2>Task List</h2>
        <button onClick={openFormPopup}>Add Task</button>
        <select onChange={(e) => handleFilterChange(e.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
      <ul>
        {filteredTasks.map((task) => (
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
