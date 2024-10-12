import { usePomodoroStore } from "@/stores";
import { TimeMode } from "@/types";
const focusMessages = [
  "Nyaa~ 💖 Focus time is up! Time to rest your paws, senpai! 🐾",
  "Sugoi! You've worked hard, senpai! 🌸 Take a little break, okay? 🍵",
  "UwU 💕 Time to relax, senpai! You deserve a nice break! ✨",
  "Nyaa~ 😺 Great job, senpai! Stretch and get ready for some me-time! 🌸",
  "Mofu mofu time, senpai~ 💖 Time to recharge your energy! 🧸",
  "Nyaa~ 💖 You did amazing! Time to rest your mind, senpai! 🐾",
];

const breakMessages = [
  "UwU ✨ Break's over, senpai! Let's get back to work! 💪",
  "Nyaa~ 💖 Break time is up! Let’s focus and do our best, senpai! 🧠",
  "Yatta! 🌸 Time to shine, senpai! Get ready to conquer your tasks! 💫",
  "Mou~ 🐾 Break's over! Time to dive back into work, senpai! 🌟",
  "Kawaii power activated, senpai! 💖 Let's focus and be awesome! 🚀",
  "UwU 💫 Break's over! Let's do our best, senpai! ✨",
];

export const launchNotification = (mode: TimeMode) => {
  if ("Notification" in window && Notification.permission === "granted") {
    const message =
      mode === TimeMode.FOCUS
        ? focusMessages[Math.floor(Math.random() * focusMessages.length)]
        : breakMessages[Math.floor(Math.random() * breakMessages.length)];

    new Notification("Pomodoro Finished, senpai! 💖", {
      body: message,
      icon: "/uwutasks.svg",
      lang: "en-US",
    });
  }
};

export const requestNotificationPermission = () => {
  if ("Notification" in window) {
    if (Notification.permission === "denied") {
      alert(
        "Notifications are blocked, senpai! 😱\nPlease enable them in your browser settings to keep track of your progress!"
      );
      return "denied";
    }
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }
  }
};
export function usePomodoroNotifications() {
  const isNotificationsEnabled = usePomodoroStore(
    state => state.settings.notificationsEnabled
  );
  const toggleNotifications = usePomodoroStore(
    state => state.toggleNotifications
  );

  return {
    isNotificationsEnabled,
    toggleNotifications,
  };
}
