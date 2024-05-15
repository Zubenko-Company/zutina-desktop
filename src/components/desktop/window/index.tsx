import { FC, MouseEventHandler, useRef, useState } from "react";
import "./window.css";

export const Window: FC = () => {
  const windowRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  let isDragging = false;

  const handleMouseDown = (event: React.MouseEvent) => {
    isDragging = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (isDragging && windowRef.current) {
      const offsetX = windowRef.current?.offsetLeft - event.pageX;
      const offsetY = windowRef.current?.offsetTop - event.pageY;

      const newX = event.pageX - offsetX;
      const newY = event.pageY - offsetY;
      setPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    isDragging = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      ref={windowRef}
      className="window"
      style={{
        left: position.x,
        top: position.y,
      }}
    >
      <div className="windowHead" onMouseDown={handleMouseDown}></div>
      <div className="windowContent"></div>
    </div>
  );
};
