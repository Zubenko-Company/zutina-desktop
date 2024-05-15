import { FC } from "react";
import "./desktopIcon.css";
import underfind from "./media/underfind.png";

export const DesktopIcon: FC = () => {
  const dbClickHandler = () => {
    alert("test");
  };

  return (
    <div className="desktopIcon" onDoubleClick={dbClickHandler}>
      <img src={underfind} />
      <p>underfind</p>
    </div>
  );
};
