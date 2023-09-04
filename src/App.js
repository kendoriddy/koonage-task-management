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
    console.log(taskId);
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
  };

  const openFormPopup = () => {
    setFormPopupOpen(true);
  };
  console.log(tasks);
  const closeFormPopup = () => {
    setFormPopupOpen(false);
  };

  return (
    <div className="App">
      <h1>Task Management App</h1>
      <TaskList
        tasks={dummyData}
        openFormPopup={openFormPopup}
        changeTaskStatus={changeTaskStatus}
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
