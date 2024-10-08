import React from "react";
import FloatModule from "@/components/ui/FloatModule";
//import { useTaskStore } from "@/stores/task.store";

export default function Task() {
  // const getTaskByStatus = useTaskStore((state) => state.getTaskByStatus);
  // const addTask = useTaskStore((state) => state.addTask);
  // const changeTaskStatus = useTaskStore((state) => state.changeTaskStatus);

  return (
    <FloatModule bounds="parent" cancel="h1,span">
      <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col gap-4 text-center">
        <h1 className="bg-blue-500 rounded-lg px-6 py-2 text-white font-semibold text-lg select-none shadow-md">
          Lista de Tareas
        </h1>
      </div>
    </FloatModule>
  );
}
