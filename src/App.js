import { useEffect, useState } from "react";
import "./App.css";
import TaskFormPopup from "./components/TaskFormPopup";
import TaskList from "./components/TaskList";
import TaskLoading from "./components/TaskLoading";
import TaskErrorMessage from "./components/TaskErrorMessage";
import {
  allTasks,
  createTask,
  deleteTaskById,
  getAllTasks,
  updateTaskById,
} from "./features/tasks/taskSlice";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const [isFormPopupOpen, setFormPopupOpen] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const dataLoading = useSelector((state) => state.task.isLoading);

  useEffect(() => {
    dispatch(getAllTasks());
  }, []);

  const userTasks = useSelector(allTasks);

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
    dispatch(deleteTaskById(taskId));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 text-white py-4 text-center">
        <h1 className="text-2xl font-semibold">Task Management App</h1>
      </header>
      <div className="container mx-auto py-8 px-4">
        {dataLoading && <TaskLoading />}
        {error && <TaskErrorMessage error={error} />}
        <div className="flex justify-end mb-4"></div>
        <TaskList
          tasks={userTasks}
          changeTaskStatus={changeTaskStatus}
          onDeleteTask={handleDeleteTask}
          openFormPopup={openFormPopup}
        />
        {isFormPopupOpen && (
          <TaskFormPopup
            isOpen={isFormPopupOpen}
            onClose={closeFormPopup}
            onAddTask={handleAddTask}
          />
        )}
      </div>
    </div>
  );
}

export default App;
