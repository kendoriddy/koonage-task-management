import { useState } from "react";
import "./App.css";
import TaskFormPopup from "./components/TaskFormPopup";
import TaskList from "./components/TaskList";
import dummyData from "./dummyData";

function App() {
  const [isFormPopupOpen, setFormPopupOpen] = useState(false);
  const [tasks, setTasks] = useState(dummyData);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("all"); //

  const handleAddTask = (newTask) => {
    const newTaskWithId = { ...newTask, id: Date.now() };

    setTasks([...tasks, newTaskWithId]);
  };

  const changeTaskStatus = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId && task.completed === false
        ? { ...task, completed: true }
        : task.id === taskId && task.completed === true
        ? { ...task, completed: false }
        : task
    );
    setTasks(updatedTasks);
  };

  const openFormPopup = () => {
    setFormPopupOpen(true);
  };

  const closeFormPopup = () => {
    setFormPopupOpen(false);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };
  console.log(tasks);
  return (
    <div className="App">
      <h1>Task Management App</h1>
      <TaskList
        tasks={tasks}
        openFormPopup={openFormPopup}
        changeTaskStatus={changeTaskStatus}
        onDeleteTask={handleDeleteTask}
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
