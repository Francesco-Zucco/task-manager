"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([{ text: "", done: false }]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input) return;
    setTasks([...tasks, { text: input, done: false }]);
    setInput("");
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
    <div className="w-full flex items-center justify-center p-4">
      <div className="max-w-[1024px] w-full">
        <div className="w-full">
          <nav className="w-full flex justify-between">
            <h1>Task Manager</h1>
            <div className="flex flex-row gap-2">
              <input
                className=" px-4 py-3 rounded-full border border-gray-300 focus:outline-none  focus:shadow-md transition shadow-sm
  "
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                className="bg-[#cfff56] px-4 py-2 rounded-full"
                onClick={addTask}
              >
                Add Task
              </button>
            </div>
          </nav>

          <ul>
            {tasks.map((task, i) => (
              <li
                style={{
                  color: task.done ? "green" : "black",
                  textDecoration: task.done ? "line-through" : "none",
                }}
                key={i}
              >
                {task.text} <button onClick={() => toggleDone(i)}>✅</button>
                <button onClick={() => deleteTask(i)}>x</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
