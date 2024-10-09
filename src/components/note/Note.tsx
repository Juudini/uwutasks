import FloatModule from "@/components/ui/FloatModule";

function Note() {
  return (
    <FloatModule bounds="parent" cancel="h1,h2" allowAnyClick>
      <div className="p-4 flex flex-col gap-3 text-center">
        <h1 className="bg-blue-500 rounded-md p-3 text-white font-bold select-none cursor-default">
          Note
        </h1>
        <p className="bg-green-500  px-4 text-white font-bold select-none cursor-pointer">
          Esto es una note, con allowAnyClick
        </p>
        <h2 className="bg-red-500 rounded-md px-4 text-white font-bold select-none">
          No se puede mover desde H1 y H2
        </h2>
      </div>
    </FloatModule>
  );
}

export default Note;
