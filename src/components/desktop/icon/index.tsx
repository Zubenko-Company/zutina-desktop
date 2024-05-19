import { FC } from "react";
import "./desktopIcon.css";
import underfind from "./media/underfind.png";
import { useDispatch } from "react-redux";
import { openWindow } from "../../../state/window/windowSlice";

export type DesktopIconProps = {
  title: string;
};

export const DesktopIcon: FC<DesktopIconProps> = ({ title }) => {
  const dispatch = useDispatch();

  const dbClickHandler = () => {
    dispatch(openWindow({ title }));
  };

  return (
    <div className="desktopIcon" onDoubleClick={dbClickHandler}>
      <img src={underfind} />
      <p>{title}</p>
    </div>
  );
};
