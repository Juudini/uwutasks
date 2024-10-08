import React, { ReactNode } from "react";
import Navbar from "@/components/navbar/Navbar";
import { useBoardStore } from "@/stores";

const Layout = ({ children }: { children: ReactNode }) => {
  const toggleVisibility = useBoardStore((state) => state.toggleVisibility);
  const navbarItems = [
    {
      icon: "text-blue-400",
      label: "Pomo",
      action: () => toggleVisibility("pomo"),
    },
    {
      icon: "fas fa-check-square text-pink-400",
      label: "To do",
      action: () => toggleVisibility("task"),
    },
    {
      icon: "text-purple-400",
      label: "Notes",
      action: () => toggleVisibility("note"),
    },
    {
      icon: "text-purple-400",
      label: "Theme",
      action: () => toggleVisibility("theme"),
    },
    {
      icon: "text-blue-400",
      label: "Media",
      action: () => toggleVisibility("media"),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar items={navbarItems} />
      <main className="flex-grow relative bg-red-100" role="main">
        {children}
      </main>
    </div>
  );
};

export default Layout;
