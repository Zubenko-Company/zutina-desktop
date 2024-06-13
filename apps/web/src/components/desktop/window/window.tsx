import { FC } from "react";
import "./window.css";
import Draggable from "react-draggable";
import { useDispatch } from "react-redux";
import { activeWindow, closeWindow } from "../../../state/window/windowSlice";
import { AppsType } from "../../../apps";

export type WindowPropsType = {
  children?: ChildPropType;
} & AppsType;

export const Window: FC<WindowPropsType> = (props: WindowPropsType) => {
  const dispatch = useDispatch();

  const closeWindowHandler = () => {
    dispatch(closeWindow({ name: props.name }));
  };

  const activeHandler = () => {
    if (!props.isActive) {
      dispatch(activeWindow({ name: props.name }));
    }
  };

  const defaultClass = props.isActive ? "activeWindow" : "";

  return (
    <Draggable
      handle=".windowTitle"
      bounds="body"
      onMouseDown={activeHandler}
      defaultClassName={defaultClass}
    >
      <div className="window">
        <strong>
          <div className="windowHead">
            <h3 className="windowTitle">{props.name}</h3>
            <button onClick={closeWindowHandler} className="closeWindowBtn">
              X
            </button>
          </div>
        </strong>
        <div className="windowContent">{props.children}</div>
      </div>
    </Draggable>
  );
};
