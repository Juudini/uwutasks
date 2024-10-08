import React, { ReactNode } from "react";

const Board = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="relative w-full h-screen flex-grow p-4"
      style={{ height: "calc(100vh - 5rem)" }}
    >
      {children}
    </div>
  );
};

export default Board;
