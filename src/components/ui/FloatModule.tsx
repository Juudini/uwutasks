import { useRef } from "react";
import Draggable, { DraggableProps } from "react-draggable";

interface FloatModuleProps extends Partial<DraggableProps> {
  children: React.ReactNode;
  className?: string;
}

function FloatModule({
  children,
  className,
  ...dragHandlers
}: FloatModuleProps) {
  const nodeRef = useRef(null);
  return (
    <Draggable {...dragHandlers} nodeRef={nodeRef}>
      <div
        ref={nodeRef}
        className={`absolute bg-background shadow-xl rounded-lg ${className}`}
      >
        {children}
      </div>
    </Draggable>
  );
}

export default FloatModule;
