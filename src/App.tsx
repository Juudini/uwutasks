import Layout from "@/layouts/Layout";
import Board from "@/layouts/Board";
import FloatModule from "@/components/float-module/FloatModule";

function App() {
  return (
    <Layout>
      <Board>
        <FloatModule bounds="parent" cancel="h1,span">
          <div className="p-4 flex flex-col gap-3 text-center">
            <h1 className="bg-red-500 rounded-md px-4 text-white font-bold">
              No se puede mover desde H1 Tag
            </h1>
            <p>Pero si desde cualquier otro elemento</p>
            <span className="bg-red-500 rounded-md px-4 text-white font-bold">
              Acá tampoco
            </span>
            <p className="bg-green-500 rounded-md px-4 text-white font-bold">
              Acá si
            </p>
          </div>
        </FloatModule>
      </Board>
    </Layout>
  );
}

export default App;
