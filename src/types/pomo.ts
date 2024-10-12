export enum TimeMode {
  FOCUS = "FOCUS",
  BREAK = "BREAK",
}

export interface TimerState {
  timeLeft: number;
  timeMode: TimeMode;
  isRunning: boolean;
  showTimerTitle: boolean;
  settings: {
    autoStartFocus: boolean;
    autoStartBreak: boolean;
    notificationsEnabled: boolean;
  };
  start: () => void;
  stop: () => void;
  reset: () => void;
  tick: () => void;
  increaseTime: (by: number) => void;
  changeMode: (to: TimeMode) => void;
  handleAutoStart: () => void;
  toggleAutoStart: (mode: TimeMode) => void;
  toggleNotifications: () => void;
  toggleShowTimerTitle: () => void;
  updateTitle: () => void;
}

export const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
};
