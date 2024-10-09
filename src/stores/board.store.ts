import { StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type ModuleId = "pomo" | "note" | "theme" | "media" | "task" | "fullScreen";

interface BoardState {
  visibleModules: Record<string, boolean>;
  toggleVisibility: (moduleId: ModuleId) => void;
}

const storeApi: StateCreator<BoardState, [["zustand/immer", never]]> = (
  set
) => ({
  visibleModules: {
    pomo: false,
    note: false,
    theme: false,
    media: false,
    task: false,
    fullScreen: false,
  },
  toggleVisibility: (moduleId: string) => {
    set((state) => ({
      visibleModules: {
        ...state.visibleModules,
        [moduleId]: !state.visibleModules[moduleId],
      },
    }));
  },
});

export const useBoardStore = create<BoardState>()(
  persist(immer(storeApi), { name: "board-store" })
);
