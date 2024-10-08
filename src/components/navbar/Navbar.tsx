type NavbarProps = {
  items: { icon: string; label: string; action: () => void }[];
};

const Navbar = ({ items }: NavbarProps) => {
  return (
    <div className="fixed bottom-4 left-0 w-full z-50">
      <div className="w-full max-w-lg mx-auto bg-white rounded-lg shadow-lg p-4">
        <ul className="flex justify-center gap-x-8">
          {items.map((item, index) => (
            <li key={index} className="flex flex-col items-center">
              <button
                className="flex flex-col items-center space-y-1 text-gray-700 hover:text-red-600 transition duration-300 ease-in-out focus:outline-none"
                onClick={item.action}
              >
                <i className={`${item.icon} text-2xl`}></i>
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
