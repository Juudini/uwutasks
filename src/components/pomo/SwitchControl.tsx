import { usePomodoroStore } from "@/stores";
import { TimeMode } from "@/types";
import { Switch } from "../ui";

function SwitchControl() {
  const timeMode = usePomodoroStore(state => state.timeMode);
  const changeMode = usePomodoroStore(state => state.changeMode);

  const toggleSwitch = () => {
    const newMode =
      timeMode === TimeMode.FOCUS ? TimeMode.BREAK : TimeMode.FOCUS;
    changeMode(newMode);
  };

  return (
    <div className="flex justify-center gap-4 items-center">
      <label className="flex items-center gap-1 text-primary">Focus</label>
      <Switch checked={timeMode == TimeMode.BREAK} onToggle={toggleSwitch} />
      <label className="flex items-center gap-1 text-primary">Break</label>
    </div>
  );
}

export default SwitchControl;
