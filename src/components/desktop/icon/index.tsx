import { FC } from "react";
import "./desktopIcon.css";
import gallery from "./media/gallery.png";
import music from "./media/music.png";
import friends from "./media/people.png";
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
  console.log(props.src);

  //TODO

  let icon = "";
  switch (props.name) {
    case "Картинки":
      icon = gallery;
      break;
    case "Друзья":
      icon = friends;
      break;
    case "Музыка":
      icon = music;
      break;
  }

  return (
    <div className="desktopIcon" onDoubleClick={dbClickHandler}>
      <img src={icon} alt="icon" />
      <p>{props.name}</p>
    </div>
  );
};
