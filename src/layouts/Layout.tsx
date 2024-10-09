import { ReactNode } from "react";
import Navbar, { NavbarItem } from "@/components/navbar/Navbar";

const Layout = ({
  children,
  navbarItems,
}: {
  children: ReactNode;
  navbarItems: NavbarItem[];
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar items={navbarItems} />
      <main className="flex-grow relative bg-background" role="main">
        {children}
      </main>
    </div>
  );
};

export default Layout;
