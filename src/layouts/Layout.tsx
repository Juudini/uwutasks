import { ReactNode } from "react";
import Navbar, { NavbarItem } from "@/components/navbar/Navbar";

type LayoutProps = { children: ReactNode; navbarItems: NavbarItem[] };

const Layout = ({ children, navbarItems }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar items={navbarItems} />
      <main className="flex-grow relative bg-primary" role="main">
        {children}
      </main>
    </div>
  );
};

export default Layout;
