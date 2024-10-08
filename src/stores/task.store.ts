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
    "Task-1": { id: "ABC-1", title: "Task 1", status: "open" },
    "Task-2": { id: "Task-2", title: "Task 2", status: "done" },
    "Task-3": { id: "Task-3", title: "Task 3", status: "open" },
    "Task-4": { id: "Task-4", title: "Task 4", status: "remove" },
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
