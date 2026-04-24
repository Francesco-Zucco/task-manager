import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
const TaskInput = ({
  input,
  setInput,
  addTask,
  category,
  setCategory,
  categories,
}) => {
  return (
    <Drawer>
      <DrawerTrigger className="absolute z-2 bottom-3 right-3 bg-[#cfff56] text-xl px-5 py-5 rounded-xl shadow-lg  transition ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </DrawerTrigger>
      <DrawerContent aria-describedby={undefined}>
        <div className="max-w-md mx-auto w-full px-10 pb-10 flex flex-col gap-6">
          {/* TITLE */}
          <div>
            <DrawerTitle className="text-lg font-semibold text-gray-800">
              Add new task
            </DrawerTitle>
            <p className="text-sm text-gray-600">
              Create a task and add a category.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <input
              autoFocus
              placeholder="Task title..."
              value={input}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addTask();
                }
              }}
              onChange={(e) => setInput(e.target.value)}
              className=" w-full text-base bg-transparent outline-none text-gray-900 placeholder-gray-400 border-b border-gray-300 py-2 focus:border-gray-500 transition-all duration-300"
            />
          </div>
          <div className="flex gap-2 ">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setCategory(cat.name)}
                className={`px-3 py-1 rounded-full text-sm transition ${cat.color} ${category === cat.name ? "ring-2 ring-gray-400" : "opacity-70"}`}
              >
                <p>{cat.name}</p>
              </button>
            ))}
          </div>
          {/* BUTTON */}
          <DrawerClose asChild>
            <Button
              onClick={addTask}
              className=" w-full bg-[#cfff56] text-black rounded-xl py-7 hover:brightness-95 transition"
            >
              Add Task
            </Button>
          </DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default TaskInput;
