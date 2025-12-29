import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const [filter, setFilter] = useState("all");

  const filteredTask = tasks.filter((task) => {
    if (filter === "all") return true;
    return task.status === filter;
  });

  const addTask = (task) => {
    console.log(task);
    setTasks((prev) => [...prev, task]);
  };

  const updateStatusChange = (taskid, newStatus) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskid ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <>
      <div className="app-container">
        <h1 className="app-title">Office Task Tracker</h1>
        <TaskForm addTask={addTask} />
        <FilterBar filter={filter} onFilterChange={setFilter} />
        <TaskList tasks={filteredTask} onStatusChange={updateStatusChange} />
      </div>
    </>
  );
}

export default App;
