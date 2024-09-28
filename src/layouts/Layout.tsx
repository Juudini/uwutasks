import React, { ReactNode } from "react";
import Navbar from "@/components/navbar/Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-4 relative" role="main">
        {children}
      </main>
    </div>
  );
};

export default Layout;
