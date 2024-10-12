import { ModuleId, useBoardStore } from "@/stores";

/**
 * Custom hook to toggle the visibility of a specific module in the board.
 *
 * This hook encapsulates the logic to toggle the visibility of modules using the `useBoardStore` state.
 *
 * @returns {(moduleId: ModuleId) => void} - A function that takes the module ID (ModuleId) and toggles its visibility.
 */
export const useToggleVisibility = () => {
  const toggleVisibility = useBoardStore(state => state.toggleVisibility);

  // Returns the function to toggle the visibility of a module
  return (moduleId: ModuleId) => toggleVisibility(moduleId);
};
