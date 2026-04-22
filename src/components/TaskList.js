import TaskItem from "./TaskItem";

const TaskList = ({ tasks, toggleDone, deleteTask, categories }) => {
  return (
    <ul className="w-full flex flex-col gap-2">
      {tasks.map((task, i) => (
        <TaskItem
          key={i}
          i={i}
          task={task}
          toggleDone={() => toggleDone(i)}
          deleteTask={() => deleteTask(i)}
          categories={categories}
          category={categories.find((c) => c.name === task.category)}
        ></TaskItem>
      ))}
    </ul>
  );
};

export default TaskList;
