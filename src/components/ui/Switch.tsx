import React from "react";

interface SwitchProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  checked: boolean;
  onToggle: () => void;
}

const Switch = React.forwardRef<HTMLDivElement, SwitchProps>(
  ({ className = "", checked, onToggle, ...props }, ref) => (
    <div
      id="switch"
      className={`inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors duration-300 ease-in-out ${
        checked ? "bg-custom-primary" : "bg-primary"
      } ${className}`}
      onClick={onToggle}
      ref={ref}
      {...props}
    >
      <span
        className={`block h-4 w-4 rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out ${
          checked ? "translate-x-4" : "translate-x-0"
        }`}
      />
    </div>
  )
);

Switch.displayName = "Switch";

export { Switch };
