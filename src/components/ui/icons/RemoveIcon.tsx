import { IconProps } from "@/interfaces";

const RemoveIcon = ({
  width = "24px",
  height = "24px",
  fill = "",
  className,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 -960 960 960"
      width={width}
      fill={fill}
      className={className}
    >
      <path d="M200-440v-80h560v80H200Z" />
    </svg>
  );
};

export default RemoveIcon;
