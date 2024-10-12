import {
  FloatModule,
  AddIcon,
  ArrowBackIcon,
  Button,
  CloseIcon,
  RemoveIcon,
  RestartIcon,
  SettingIcon,
  Switch,
} from "@/components/ui";
import SwitchControl from "./SwitchControl";
import { formatTime, TimeMode } from "@/types";
import {
  usePomodoroActions,
  usePomodoroNotifications,
  usePomodoroSettings,
  useToggleVisibility,
} from "@/hooks";

function Pomo() {
  const { addTime, isRunning, reduceTime, reset, start, timeLeft } =
    usePomodoroActions();
  const {
    autoStartBreak,
    autoStartFocus,
    isSettingsOpen,
    toggleAutoStart,
    toggleSettings,
    toggleShowTimerTitle,
    showTimerTitle,
  } = usePomodoroSettings();
  const { isNotificationsEnabled, toggleNotifications } =
    usePomodoroNotifications();
  const closeModule = useToggleVisibility();

  const headerTitle = isSettingsOpen ? "Settings" : "Pomodoro";
  const buttonTimerTitle = isRunning ? "Pause" : "Start";

  return (
    <FloatModule bounds="parent" cancel="button,#switch" allowAnyClick>
      <article className="flex flex-col items-center space-y-3 p-4 bg-primary rounded-lg w-[22rem] shadow-md select-none">
        <header className="w-full">
          <ul className="flex justify-between">
            <li className="flex items-center">
              <Button variant={"ghost"} onClick={toggleSettings}>
                {isSettingsOpen ? <ArrowBackIcon /> : <SettingIcon />}
              </Button>
            </li>
            <li className="flex items-center">
              <h2 className="text-lg font-bold text-primary">{headerTitle}</h2>
            </li>
            <li className="flex items-center">
              <Button variant={"ghost"} onClick={() => closeModule("pomo")}>
                <CloseIcon />
              </Button>
            </li>
          </ul>
        </header>
        <div className="flex flex-col items-center justify-center space-y-4 w-full">
          {!isSettingsOpen ? (
            <>
              <SwitchControl />
              <ul className="flex items-center justify-between w-full ">
                <li className="p-2">
                  {!isRunning && (
                    <Button variant={"outline"} onClick={reduceTime}>
                      <RemoveIcon />
                    </Button>
                  )}
                </li>
                <li className="p-2">
                  <span className="text-6xl font-bold text-primary text-center">
                    {formatTime(timeLeft)}
                  </span>
                </li>
                <li className="p-2">
                  {!isRunning && (
                    <Button variant={"outline"} onClick={addTime}>
                      <AddIcon />
                    </Button>
                  )}
                </li>
              </ul>
              <div className="flex items-center justify-center space-x-2 w-full">
                <Button variant={"outline"} onClick={reset}>
                  <RestartIcon />
                </Button>
                <Button className="w-24" size={"lg"} onClick={start}>
                  {buttonTimerTitle}
                </Button>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center space-x-2 px-8 w-full">
              <ul className="flex flex-col space-y-4 w-full text-primary">
                <li className="flex items-center justify-between">
                  <span>Show Timer in Title</span>
                  <Switch
                    checked={showTimerTitle}
                    onToggle={toggleShowTimerTitle}
                  />
                </li>
                <li className="flex items-center justify-between">
                  <span>Desktop Notification</span>
                  <Switch
                    checked={isNotificationsEnabled}
                    onToggle={toggleNotifications}
                  />
                </li>
                <li className="flex items-center justify-between">
                  <span>Auto-Start Break</span>
                  <Switch
                    checked={autoStartBreak}
                    onToggle={() => toggleAutoStart(TimeMode.BREAK)}
                  />
                </li>
                <li className="flex items-center justify-between">
                  <span>Auto-Start Focus</span>
                  <Switch
                    checked={autoStartFocus}
                    onToggle={() => toggleAutoStart(TimeMode.FOCUS)}
                  />
                </li>
              </ul>
            </div>
          )}
        </div>
      </article>
    </FloatModule>
  );
}

export default Pomo;
