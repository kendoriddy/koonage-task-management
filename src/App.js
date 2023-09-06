import { useEffect, useState } from "react";
import "./App.css";
import TaskFormPopup from "./components/TaskFormPopup";
import TaskList from "./components/TaskList";
import TaskLoading from "./components/TaskLoading";
import TaskErrorMessage from "./components/TaskErrorMessage";
import { allTasks, createTask, getAllTasks, updateTaskById } from "./features/tasks/taskSlice";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const [isFormPopupOpen, setFormPopupOpen] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("all");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTasks());
  }, []);

  const userTasks = useSelector(allTasks);
  console.log(userTasks);

  const handleAddTask = (newTask) => {
    dispatch(createTask(newTask));
  };

  const changeTaskStatus = (taskId, task) => {
    const updatedData = {
      ...task,
      status: task.status === "completed" ? "incompleted" : "completed",
    };

    dispatch(updateTaskById({ taskId, updatedData }));
  };

  const openFormPopup = () => {
    setFormPopupOpen(true);
  };

  const closeFormPopup = () => {
    setFormPopupOpen(false);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = allTasks.filter((task) => task.id !== taskId);
    // dispatch(deleteTask(taskId));
  };

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
    // dispatch(setFilter(selectedFilter));
  };

  return (
    <div className="App">
      <h1>Task Management App</h1>
      {loading && <TaskLoading />}
      {error && <TaskErrorMessage error={error} />}
      <TaskList
        tasks={userTasks}
        openFormPopup={openFormPopup}
        changeTaskStatus={changeTaskStatus}
        onDeleteTask={handleDeleteTask}
        filter={filter}
        handleFilterChange={handleFilterChange}
      />
      {isFormPopupOpen && (
        <TaskFormPopup
          isOpen={isFormPopupOpen}
          onClose={closeFormPopup}
          onAddTask={handleAddTask}
        />
      )}
    </div>
  );
}

export default App;
