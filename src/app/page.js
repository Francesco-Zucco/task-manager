"use client";
import TaskInput from "@/components/TaskInput";
import TaskItem from "@/components/TaskItem";
import TaskList from "@/components/TaskList";
import { useEffect, useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [category, setCategory] = useState("work");

  const categories = [
    { name: "work", color: "bg-[#dad9fb] text-[#464596]" },
    { name: "personal", color: "bg-[#cfff56] text-[#587709]" },
    { name: "urgent", color: "bg-red-100 text-red-700" },
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
    console.log(taskList);
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
    <div className="w-full h-[100vh] flex justify-center p-5 ">
      <div className="relative max-w-[600px] w-full h-full">
        <div className="w-full flex flex-col gap-4 items-center ">
          <div className="flex justify-between w-full">
            <h1 className="text-gray-700 text-2xl font-bold">Task Manager</h1>
            <div>
              Your remaining tasks: {tasks.filter((t) => !t.done).length}
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

          <TaskList
            tasks={tasks}
            toggleDone={toggleDone}
            deleteTask={deleteTask}
          />
        </div>
      </div>
    </div>
  );
}
