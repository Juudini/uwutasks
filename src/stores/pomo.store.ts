import { StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { formatTime, TimeMode, TimerState } from "@/types";
import { launchNotification, requestNotificationPermission } from "@/hooks";

const MODE_TIMERS: Record<TimeMode, { time: number }> = {
  [TimeMode.FOCUS]: { time: 25 * 60 },
  [TimeMode.BREAK]: { time: 5 * 60 },
};

let interval: NodeJS.Timeout | null = null;

const originalTitle = document.title;

const storeApi: StateCreator<TimerState, [["zustand/immer", never]]> = (
  set,
  get
) => ({
  timeLeft: MODE_TIMERS.FOCUS.time,
  timeMode: TimeMode.FOCUS,
  isRunning: false,
  showTimerTitle: true,
  settings: {
    autoStartFocus: false,
    autoStartBreak: false,
    notificationsEnabled: false,
  },

  start: () => {
    const isRunning = get().isRunning;
    if (isRunning) {
      get().stop();
      get().updateTitle();
    } else {
      if (!interval) {
        interval = setInterval(() => {
          get().tick();
        }, 1000);

        set(state => {
          state.isRunning = true;
        });
      }
    }
  },

  tick: () => {
    const timeLeft = get().timeLeft;
    const timeMode = get().timeMode;
    const isNotificationsEnabled = get().settings.notificationsEnabled;

    if (timeLeft > 0) {
      set(state => {
        state.timeLeft -= 1;
      });
      get().updateTitle();
    } else {
      get().stop();

      set(state => {
        state.timeLeft = MODE_TIMERS[timeMode].time;
      });

      if (isNotificationsEnabled) {
        launchNotification(timeMode);
      }

      get().handleAutoStart();
      get().updateTitle();
    }
  },

  stop: () => {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
    set(state => {
      state.isRunning = false;
    });
  },

  reset: () => {
    get().stop();
    get().updateTitle();

    const timeMode = get().timeMode;
    set(state => {
      state.timeLeft = MODE_TIMERS[timeMode].time;
      state.isRunning = false;
    });
  },

  increaseTime: (by: number) => {
    set(state => {
      state.timeLeft = Math.max(0, state.timeLeft + by);
    });
  },

  changeMode: (to: TimeMode) => {
    get().stop();
    set(state => {
      state.timeMode = to;
      state.timeLeft = MODE_TIMERS[to].time;
      state.isRunning = false;
    });
  },

  updateTitle: () => {
    const showTimerTitle = get().showTimerTitle;
    const isRunning = get().isRunning;
    const timeLeft = get().timeLeft;

    if (showTimerTitle && isRunning) {
      const formattedTime = formatTime(timeLeft);
      document.title = `Time left: ${formattedTime} | UwuTasks`;
    } else {
      document.title = originalTitle;
    }
  },

  handleAutoStart: () => {
    const currentTimeMode = get().timeMode;
    const autoStartFocus = get().settings.autoStartFocus;
    const autoStartBreak = get().settings.autoStartBreak;

    const autoStartMap = {
      [TimeMode.FOCUS]: {
        switchToOtherMode: autoStartBreak,
      },
      [TimeMode.BREAK]: {
        switchToOtherMode: autoStartFocus,
      },
    };

    const currentModeSettings = autoStartMap[currentTimeMode];

    if (currentModeSettings.switchToOtherMode) {
      const nextMode =
        currentTimeMode === TimeMode.FOCUS ? TimeMode.BREAK : TimeMode.FOCUS;

      set(state => {
        state.timeMode = nextMode;
        state.timeLeft = MODE_TIMERS[nextMode].time;
      });

      get().start();
    }
  },

  toggleAutoStart: (mode: TimeMode) => {
    if (mode === TimeMode.FOCUS) {
      set(state => {
        state.settings.autoStartFocus = !get().settings.autoStartFocus;
      });
    } else if (mode === TimeMode.BREAK) {
      set(state => {
        state.settings.autoStartBreak = !get().settings.autoStartBreak;
      });
    }
  },

  toggleNotifications: () => {
    if (requestNotificationPermission() === "denied") {
      set(state => {
        state.settings.notificationsEnabled = false;
      });
      return;
    }
    const isNotificationsEnabled = get().settings.notificationsEnabled;
    set(state => {
      state.settings.notificationsEnabled = !isNotificationsEnabled;
    });
  },

  toggleShowTimerTitle: () => {
    const currentShowTimerTitle = get().showTimerTitle;
    set(state => {
      state.showTimerTitle = !currentShowTimerTitle;
    });
  },
});
export const usePomodoroStore = create<TimerState>()(
  persist(immer(storeApi), {
    name: "pomodoro-store",
    partialize: state => ({
      timeLeft: state.timeLeft,
      timeMode: state.timeMode,
      showTimerTitle: state.showTimerTitle,
      settings: {
        autoStartFocus: state.settings.autoStartFocus,
        autoStartBreak: state.settings.autoStartBreak,
        notificationsEnabled: state.settings.notificationsEnabled,
      },
    }),
  })
);
