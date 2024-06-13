import { FC } from "react";
import "./desktopIcon.css";
import { useDispatch } from "react-redux";
import { openWindow } from "../../../state/window/windowSlice";
import { WindowType } from "../../../apps";

export type DesktopIconProps = {
  name: string;
  type: WindowType;
  src: string;
};

export const DesktopIcon: FC<DesktopIconProps> = (props) => {
  const dispatch = useDispatch();

  const dbClickHandler = () => {
    dispatch(openWindow(props));
  };

  return (
    <div className="desktopIcon" onDoubleClick={dbClickHandler}>
      <img src={props.src} alt="icon" />
      <p>{props.name}</p>
    </div>
  );
};
