const TaskItem = ({ task, i, toggleDone, deleteTask }) => {
  return (
    <div
      style={{
        color: task.done ? "green" : "black",
        textDecoration: task.done ? "line-through" : "none",
      }}
    >
      {task.text} <button onClick={() => toggleDone(i)}>✅</button>
      <button onClick={() => deleteTask(i)}>x</button>
    </div>
  );
};

export default TaskItem;
