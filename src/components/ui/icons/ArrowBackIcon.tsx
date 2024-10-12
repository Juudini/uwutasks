import { IconProps } from "@/types";

const ArrowBackIcon = ({
  width = "24px",
  height = "24px",
  fill = "var(--icon-primary)",
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
      <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
    </svg>
  );
};

export default ArrowBackIcon;
