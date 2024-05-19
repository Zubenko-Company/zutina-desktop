import { FC } from "react";
import "./window.css";
import Draggable from "react-draggable";
import { useDispatch } from "react-redux";
import { activeWindow, closeWindow } from "../../../state/window/windowSlice";

export type WindowPropsType = {
  title: string;
  isActive?: boolean;
};

export const Window: FC<WindowPropsType> = (props: WindowPropsType) => {
  const dispatch = useDispatch();

  const closeWindowHandler = () => {
    dispatch(closeWindow({ title: props.title }));
  };

  const activeHandler = () => {
    if (!props.isActive) {
      dispatch(activeWindow({ title: props.title }));
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
            <h3 className="windowTitle">{props.title}</h3>
            <button onClick={closeWindowHandler} className="closeWindowBtn">
              X
            </button>
          </div>
        </strong>
        <div className="windowContent"></div>
      </div>
    </Draggable>
  );
};
