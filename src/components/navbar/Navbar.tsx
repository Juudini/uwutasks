import { ReactElement } from "react";

export type NavbarItem = {
  icon: ReactElement;
  label: string;
  action: () => void;
};

type NavbarProps = {
  items: NavbarItem[];
};

const Navbar = ({ items }: NavbarProps) => {
  return (
    <div className="fixed bottom-4 left-0 w-full z-50">
      <div className="w-full max-w-lg mx-auto bg-background rounded-lg shadow-2xl py-2">
        <ul className="flex justify-center gap-x-8">
          {items.map((item, index) => (
            <li key={index} className="flex flex-col items-center">
              <button
                className="flex flex-col items-center space-y-1 text-primary focus:outline-none"
                onClick={item.action}
              >
                {item.icon}
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
