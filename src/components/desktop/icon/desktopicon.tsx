import { FC } from "react";
import "./desktopIcon.css";
import underfind from "./underfind.png";

export const DesktopIcon: FC = () => {
  return (
    <div className="desktopIcon">
      <img src={underfind} />
      <p>underfind</p>
    </div>
  );
};
