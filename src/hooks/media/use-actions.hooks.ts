import { useBoardStore, useMediaStore } from "@/stores";

export function useMediaActions() {
  const toggleVisibility = useMediaStore(state => state.toggleVisibility);
  const selectedMedia = useMediaStore(state => state.visibleModules);
  const currentModule = useMediaStore(state => state.currentModule);

  const closeModule = useBoardStore(state => state.toggleVisibility);

  return {
    closeModule,
    toggleVisibility,
    selectedMedia,
    currentModule,
  };
}
