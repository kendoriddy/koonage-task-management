import React from "react";
import TaskItem from "./TaskItem";
import { useSelector, useDispatch } from "react-redux";

const TaskList = ({ tasks, openFormPopup, changeTaskStatus, onDeleteTask }) => {
  return (
    <div>
      <div>
        <h2>Task List</h2>
        <button onClick={openFormPopup}>Add Task</button>
        {/* <select onChange={(e) => handleFilterChange(e.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select> */}
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
