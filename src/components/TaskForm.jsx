import { useState } from "react";

import "./TaskForm.css";

const TaskForm = ({ addTask }) => {
  const [formdata, setformData] = useState({
    title: "",
    description: "",
    priority: "medium",
    dueDate: "",
    status: "open",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setformData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { title, description, priority, dueDate, status } = formdata;

    if (!title.trim()) {
      setError("title is required");
      return;
    }

    if (!["low", "medium", "high"].includes(priority)) {
      setError("invalid priority is selected");
      return;
    }

    if (!dueDate) {
      setError("duedate is required");
      return;
    }

    const selectedDate = new Date(dueDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      setError("due date should not be in past ");
      return;
    }

    if (!["open", "pending", "fulfilled"].includes(status)) {
      setError("invalid task status");
      return;
    }

    const newTask = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      priority,
      dueDate,
      status,
      createdAt: new Date().toISOString(),
    };

    addTask(newTask);

    setformData({
      title: "",
      description: "",
      priority: "medium",
      dueDate: "",
      status: "open",
    });

    setError("");
  };

  return (
    <>
      <form className="taskform" onSubmit={handleSubmit}>
        <h3>create task</h3>

        {error && <p className="error">{error}</p>}

        <input
          type="text"
          name="title"
          value={formdata.title}
          placeholder="Enter Title"
          onChange={handleChange}
        />

        <textarea
          type="text"
          name="description"
          value={formdata.description}
          placeholder="Enter description"
          onChange={handleChange}
        />

        <select
          value={formdata.priority}
          name="priority"
          onChange={handleChange}
        >
          <option value="low">low</option>
          <option value="medium">medium</option>
          <option value="high">high</option>
        </select>

        <input
          type="date"
          value={formdata.dueDate}
          name="dueDate"
          onChange={handleChange}
        />

        <select value={formdata.status} name="status" onChange={handleChange}>
          <option value="open">open</option>
          <option value="pending">pending</option>
          <option value="fulfilled">fulfilled</option>
        </select>

        <button type="submit">Add Task</button>
      </form>
    </>
  );
};
export default TaskForm;
