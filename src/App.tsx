import { Layout, Board } from "@/layouts";
import { useBoardStore } from "@/stores";
import { Note, Task } from "@/components";

function App() {
  const visibleModule = useBoardStore((state) => state.visibleModules);
  return (
    <Layout>
      <Board>
        {visibleModule.task && <Task />}
        {visibleModule.note && <Note />}
      </Board>
    </Layout>
  );
}

export default App;
