"use client";
import TaskInput from "@/components/TaskInput";
import TaskList from "@/components/TaskList";
import { useEffect, useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [category, setCategory] = useState("work");
  const [filterCategory, setFilterCategory] = useState("all");

  const categories = [
    { name: "work", color: "bg-[#dad9fb] text-[#464596]" },
    { name: "personal", color: "bg-[#cfff56] text-[#587709]" },
    { name: "urgent", color: "bg-red-100 text-red-700" },
  ];

  const filterOptions = [
    { name: "all" },
    { name: "work" },
    { name: "personal" },
    { name: "urgent" },
  ];

  const addTask = () => {
    if (!input) return;

    const taskList = [
      ...tasks,
      { text: input, done: false, category: category || "general" },
    ];

    setTasks(taskList);
    setInput("");
    setCategory("work");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleDone = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, done: !task.done } : task,
      ),
    );
  };

  const filteredTasks =
    filterCategory === "all"
      ? tasks
      : tasks.filter((t) => t.category === filterCategory);

  const deleteAllTasks = () => {
    setTasks([]);
  };

  const remainingTasks = tasks.filter((t) => !t.done).length;

  let message = "";
  if (tasks.length === 0) {
    message = "Life with no goals is boring";
  } else if (remainingTasks === 0) {
    message = "all goals completed!";
  } else {
    message = `remaining goals: ${remainingTasks}`;
  }

  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="w-full h-screen flex justify-center  overflow-hidden">
      <div className="relative max-w-[600px] w-full h-full">
        <div className="w-full h-full flex flex-col  items-center">
          <div className="flex justify-between items-center w-full px-2">
            <h1 className="text-gray-700 text-2xl py-4 font-extrabold">
              Task Manager
            </h1>
          </div>

          <div className="w-full flex justify-between items-center px-2 pb-2">
            <p className="text-sm text-gray-500 font-medium pl-2">
              Filter by category:
            </p>{" "}
            <p className="text-gray-500 pr-2">{message}</p>
          </div>

          <div className="w-full flex justify-between px-2 pb-2">
            <div className="flex w-full justify-between bg-gray-100 rounded-[20px] p-2 shadow-sm">
              <div className="flex gap-1">
                {filterOptions.map((f) => (
                  <button
                    key={f.name}
                    className={`px-3 py-1.5 text-sm font-medium shadow-xs rounded-lg transition-all duration-150 cursor-pointer ${
                      filterCategory === f.name
                        ? "bg-[#cfff56] text-[#1f2937] border border-[#cfff56] hover:bg-[#b8e84d] active:scale-95 active:shadow-inner"
                        : "text-gray-500 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 active:scale-95 active:bg-gray-100"
                    }`}
                    onClick={() => setFilterCategory(f.name)}
                  >
                    {f.name}
                  </button>
                ))}
              </div>
              <button
                className="px-3 shadow-sm hover:shadow-md rounded-lg cursor-pointer text-sm font-medium text-red-500 border border-red-200 rounded-[20px] hover:bg-red-50 hover:border-red-300 active:scale-95 active:bg-red-100 transition-all duration-150"
                onClick={deleteAllTasks}
              >
                Delete all
              </button>
            </div>
          </div>

          <TaskInput
            input={input}
            setInput={setInput}
            addTask={addTask}
            category={category}
            setCategory={setCategory}
            categories={categories}
          />

          <div className="w-full flex-1 min-h-0">
            {tasks.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-2xl text-gray-700 font-semibold">
                <h2 className="text-lg font-semibold text-gray-700">
                  No tasks yet
                </h2>
                <p className=" text-sm text-gray-400">
                  Add your first task to get started
                </p>
              </div>
            ) : (
              <TaskList
                tasks={filteredTasks}
                toggleDone={toggleDone}
                deleteTask={deleteTask}
                categories={categories}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
