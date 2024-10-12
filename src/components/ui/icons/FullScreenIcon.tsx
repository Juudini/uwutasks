import { IconProps } from "@/types";

type FSIconProps = IconProps & {
  isFullScreen?: "true" | "false";
};

const FullScreenIcon = ({
  width = "24px",
  height = "24px",
  fill = "var(--icon-full-screen)",
  className,
  isFullScreen = "false",
}: FSIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 -960 960 960"
      width={width}
      fill={fill}
      className={className}
    >
      {isFullScreen === "true" ? (
        <path d="M240-120v-120H120v-80h200v200h-80Zm400 0v-200h200v80H720v120h-80ZM120-640v-80h120v-120h80v200H120Zm520 0v-200h80v120h120v80H640Z" />
      ) : (
        <path d="M120-120v-200h80v120h120v80H120Zm520 0v-80h120v-120h80v200H640ZM120-640v-200h200v80H200v120h-80Zm640 0v-120H640v-80h200v200h-80Z" />
      )}
    </svg>
  );
};

export default FullScreenIcon;
