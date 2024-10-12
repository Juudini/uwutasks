import { useState } from "react";
import { usePomodoroStore } from "@/stores";

export function usePomodoroSettings() {
  const [isSettingsOpen, setIsSettingOpen] = useState(false);
  const autoStartFocus = usePomodoroStore(
    state => state.settings.autoStartFocus
  );
  const autoStartBreak = usePomodoroStore(
    state => state.settings.autoStartBreak
  );
  const toggleAutoStart = usePomodoroStore(state => state.toggleAutoStart);
  const toggleShowTimerTitle = usePomodoroStore(
    state => state.toggleShowTimerTitle
  );
  const showTimerTitle = usePomodoroStore(state => state.showTimerTitle);
  const toggleSettings = () => setIsSettingOpen(prev => !prev);

  return {
    isSettingsOpen,
    toggleSettings,
    autoStartFocus,
    autoStartBreak,
    toggleAutoStart,
    showTimerTitle,
    toggleShowTimerTitle,
  };
}
