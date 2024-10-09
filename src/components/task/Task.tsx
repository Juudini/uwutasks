import FloatModule from "@/components/ui/FloatModule";
//import { useTaskStore } from "@/stores/task.store";

export default function Task() {
  // const getTaskByStatus = useTaskStore((state) => state.getTaskByStatus);
  // const addTask = useTaskStore((state) => state.addTask);
  // const changeTaskStatus = useTaskStore((state) => state.changeTaskStatus);

  return (
    <FloatModule bounds="parent" cancel="h1,span">
      <div className="p-6 rounded-lg shadow-lg flex flex-col gap-4 text-center cursor-pointer">
        <h1 className="bg-red-400 rounded-lg px-6 py-2 text-white font-semibold text-lg select-none shadow-md cursor-default">
          Tasks
        </h1>
        <p className="text-primary">Todo</p>
      </div>
    </FloatModule>
  );
}
