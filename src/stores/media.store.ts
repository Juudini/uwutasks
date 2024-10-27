import { MediaId } from "@/types/media";
import { StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface MediaState {
  visibleModules: Record<MediaId, boolean>;
  currentModule: MediaId;
  toggleVisibility: (moduleId: MediaId) => void;
}

const storeApi: StateCreator<MediaState, [["zustand/immer", never]]> = set => ({
  visibleModules: {
    Media: true,
    Spotify: false,
    YouTube: false,
  },
  currentModule: "Media",

  toggleVisibility: (moduleId: MediaId) => {
    set(state => {
      state.visibleModules[state.currentModule] = false;

      state.visibleModules[moduleId] = true;
      state.currentModule = moduleId;
    });
  },
});

export const useMediaStore = create<MediaState>()(
  persist(immer(storeApi), {
    name: "media-store",
    partialize: state => ({
      currentModule: state.currentModule,
      visibleModules: {
        Media: state.visibleModules.Media,
        Spotify: state.visibleModules.Spotify,
        YouTube: state.visibleModules.YouTube,
      },
    }),
  })
);
