import TaskItem from "./TaskItem";
import "./TaskItem.css";

const TaskList = ({ tasks, onStatusChange }) => {
  if (tasks.length === 0) {
    return <p>no tasks to list.</p>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onStatusChange={onStatusChange} />
      ))}
    </div>
  );
};

export default TaskList;
