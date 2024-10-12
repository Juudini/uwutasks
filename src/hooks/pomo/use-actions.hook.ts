import { usePomodoroStore } from "@/stores";

export function usePomodoroActions() {
  const timeLeft = usePomodoroStore(state => state.timeLeft);
  const isRunning = usePomodoroStore(state => state.isRunning);
  const start = usePomodoroStore(state => state.start);
  const increaseTime = usePomodoroStore(state => state.increaseTime);
  const reset = usePomodoroStore(state => state.reset);

  const addTime = () => increaseTime(60);
  const reduceTime = () => increaseTime(-60);

  return {
    timeLeft,
    isRunning,
    start,
    addTime,
    reduceTime,
    reset,
  };
}
