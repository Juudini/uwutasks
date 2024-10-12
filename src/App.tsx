import { Layout, Board } from "@/layouts";
import { useBoardStore } from "@/stores";
import {
  Note,
  Pomo,
  Task,
  FullScreenIcon,
  MediaIcon,
  NoteIcon,
  PomoIcon,
  TaskIcon,
  ThemeIcon,
} from "@/components";
import { NavbarItem } from "@/components/navbar/Navbar";
import { useToggleVisibility } from "./hooks/board/toggle-visibility.hook";

function App() {
  const toggleVisibility = useToggleVisibility();
  const visibleModule = useBoardStore(state => state.visibleModules);

  const navbarItems: NavbarItem[] = [
    {
      icon: <PomoIcon />,
      label: "Pomo",
      action: () => toggleVisibility("pomo"),
    },
    {
      icon: <TaskIcon />,
      label: "Task",
      action: () => toggleVisibility("task"),
    },
    {
      icon: <NoteIcon />,
      label: "Note",
      action: () => toggleVisibility("note"),
    },
    {
      icon: <ThemeIcon />,
      label: "Theme",
      action: () => toggleVisibility("theme"),
    },
    {
      icon: <MediaIcon />,
      label: "Media",
      action: () => toggleVisibility("media"),
    },
    {
      icon: <FullScreenIcon />,
      label: "FS",
      action: () => toggleVisibility("fullScreen"),
    },
  ];

  return (
    <Layout navbarItems={navbarItems}>
      <Board>
        {visibleModule.pomo && <Pomo />}
        {visibleModule.task && <Task />}
        {visibleModule.note && <Note />}
      </Board>
    </Layout>
  );
}

export default App;
