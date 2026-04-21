import TaskItem from "./TaskItem";

const TaskList = ({ tasks, toggleDone, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task, i) => (
        <TaskItem
          key={i}
          i={i}
          task={task}
          toggleDone={() => toggleDone(i)}
          deleteTask={() => deleteTask(i)}
        ></TaskItem>
      ))}
    </ul>
  );
};

export default TaskList;
