import { IconProps } from "@/interfaces";

const AddIcon = ({
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
      <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
    </svg>
  );
};

export default AddIcon;
