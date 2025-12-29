const TaskItem = ({ task, onStatusChange }) => {
  const handleStatusChange = (e) => {
    onStatusChange(task.id, e.target.value);
  };

  return (
    <>
      <div className="task-item">
        <div>
          <h3>{task.title}</h3>
          {task.description && <p>{task.description}</p>}
          <small>Due :{task.dueDate}</small>
        </div>

        <div>
          <span className={`priority ${task.priority}`}>{task.priority}</span>

          <select
            className="status"
            name="status"
            value={task.status}
            onChange={handleStatusChange}
          >
            <option value="open">open</option>
            <option value="pending">pending</option>
            <option value="fulfilled">fulfilled</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default TaskItem;
