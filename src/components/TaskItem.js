const TaskItem = ({
  task,
  i,
  toggleDone,
  deleteTask,
  categories,
  category,
}) => {
  return (
    <div className="flex border p-3 rounded-[20px] shadow-sm flex gap-2 items-center hover:shadow-md hover:border-gray-300 transition hover:scale-[1.01] duration-250 justify-between w-full">
      <div className="flex items-center gap-2">
        <button onClick={() => toggleDone(task.id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`size-6 border cursor-pointer rounded-lg transition-all duration-150 p-1 ${
              task.done
                ? "bg-emerald-500 border-emerald-500 text-white"
                : "border-gray-400"
            }`}
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
          className={`text-gray-800 ${task.done ? "line-through opacity-60" : ""} text-wrap `}
        >
          {task.text}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <p
          className={`px-2 py-0.5 rounded-full text-xs transition ${category.color} `}
        >
          {task.category}
        </p>
        <button
          className="text-gray-800 cursor-pointer active:scale-95 transition"
          onClick={() => deleteTask(task.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-7"
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
