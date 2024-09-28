import React, { ReactNode } from "react";

const Board = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative w-full h-screen flex-grow p-4 bg-red-100">
      {children}
    </div>
  );
};

export default Board;
