import { useEffect, useState } from "react";
import "./App.css";
import TaskFormPopup from "./components/TaskFormPopup";
import TaskList from "./components/TaskList";
import TaskLoading from "./components/TaskLoading";
import TaskErrorMessage from "./components/TaskErrorMessage";
import { allTasks, getAllTasks } from "./features/tasks/taskSlice";
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
    const newTaskWithId = { ...newTask, id: Date.now() };

    // dispatch(addTask(newTaskWithId));
  };

  // const changeTaskStatus = (taskId) => {
  //   const updatedTasks = allTasks.map((task) =>
  //     task.id === taskId && task.completed === false
  //       ? { ...task, completed: true }
  //       : task.id === taskId && task.completed === true
  //       ? { ...task, completed: false }
  //       : task
  //   );

  //   // Determine the current completed status for the task with taskId
  //   const taskToToggle = allTasks.find((task) => task.id === taskId);
  //   if (taskToToggle) {
  //     const completed = !taskToToggle.completed;
  //     dispatch(updateTaskStatus({ id: taskId, completed: !completed }));
  //   }
  // };

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
        changeTaskStatus=""
        // changeTaskStatus={changeTaskStatus}
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
