import { IconProps } from "@/types";

const MediaIcon = ({
  width = "24px",
  height = "24px",
  fill = "var(--icon-media)",
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
      <path d="M400-120q-66 0-113-47t-47-113q0-66 47-113t113-47q23 0 42.5 5.5T480-418v-422h240v160H560v400q0 66-47 113t-113 47Z" />
    </svg>
  );
};

export default MediaIcon;
