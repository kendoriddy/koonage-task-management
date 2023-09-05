import { useState } from "react";
import "./App.css";
import TaskFormPopup from "./components/TaskFormPopup";
import TaskList from "./components/TaskList";
import dummyData from "./dummyData";

function App() {
  const [isFormPopupOpen, setFormPopupOpen] = useState(false);
  const [tasks, setTasks] = useState(dummyData);

  // Function to add a new task.
  const handleAddTask = (newTask) => {
    // Implement logic to add the new task to the tasks state.
    // You can use setTasks([...tasks, newTask]);
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

  return (
    <div className="App">
      <h1>Task Management App</h1>
      <TaskList tasks={tasks} openFormPopup={openFormPopup} changeTaskStatus={changeTaskStatus} />
      {isFormPopupOpen && (
        <TaskFormPopup
          isOpen={isFormPopupOpen}
          onClose={closeFormPopup}
          onAddTask={handleAddTask}
          onDeleteTask={handleDeleteTask}
        />
      )}
    </div>
  );
}

export default App;
