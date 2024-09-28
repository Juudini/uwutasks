import Draggable, { DraggableProps } from "react-draggable";

interface FloatModuleProps extends Partial<DraggableProps> {
  children: React.ReactNode;
  className?: string;
}

function FloatModule({
  children,
  className = "",
  ...dragHandlers
}: FloatModuleProps) {
  return (
    <Draggable {...dragHandlers}>
      <div className={`absolute bg-white shadow-lg rounded-lg ${className}`}>
        {children}
      </div>
    </Draggable>
  );
}

export default FloatModule;
