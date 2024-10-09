import { StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";
import { Task, TaskStatus } from "@/interfaces";
import { v4 as uuid } from "uuid";
import { immer } from "zustand/middleware/immer";

interface TaskState {
  tasks: Record<string, Task>;
  getTaskByStatus: (status: TaskStatus) => Task[];
  addTask: (title: string, status: TaskStatus) => void;
  changeTaskStatus: (taskId: string, status: TaskStatus) => void;
}

const storeApi: StateCreator<TaskState, [["zustand/immer", never]]> = (
  set,
  get
) => ({
  tasks: {
    Todo: { id: uuid(), title: "Todo", status: "open" },
  },

  getTaskByStatus: (status: TaskStatus) => {
    const tasks = get().tasks;
    return Object.values(tasks).filter((task) => task.status === status);
  },

  addTask: (title: string, status: TaskStatus) => {
    const newTask = { id: uuid(), title, status };

    set((state) => {
      state.tasks[newTask.id] = newTask;
    });
  },

  changeTaskStatus: (taskId: string, status: TaskStatus) => {
    set((state) => {
      state.tasks[taskId].status = status;
    });
  },
});

export const useTaskStore = create<TaskState>()(
  persist(immer(storeApi), { name: "task-store" })
);
