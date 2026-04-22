const TaskItem = ({
  task,
  i,
  toggleDone,
  deleteTask,
  categories,
  category,
}) => {
  return (
    <div className="flex border p-3 rounded-xl flex gap-2 items-center justify-between w-full">
      <div className="flex items-center gap-2">
        <button onClick={() => toggleDone(i)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`size-6 border rounded-md p-1 ${task.done ? "bg-green-500 border-green-300 text-green-900" : "border-gray-400"}`}
          >
            {task.done ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            ) : (
              ""
            )}
          </svg>
        </button>
        <p
          style={{
            textDecoration: task.done ? "line-through" : "none",
          }}
        >
          {task.text}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <p
          className={`px-3 py-1 rounded-full text-sm transition ${category.color} `}
        >
          {task.category}
        </p>
        <button className="text-black" onClick={() => deleteTask(i)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
