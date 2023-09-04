import "./App.css";
import TaskList from "./components/TaskList";
import dummyData from "./dummyData";

function App() {
  return (
    <div className="App">
      <h1>Task Management App</h1>
      <TaskList tasks={dummyData} />
    </div>
  );
}

export default App;
