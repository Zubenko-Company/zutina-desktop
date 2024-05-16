import { FC, MouseEventHandler, useRef, useState } from "react";
import "./window.css";
import Draggable from "react-draggable";

export const Window: FC = () => {
  return (
    <Draggable handle="strong" bounds="body">
      <div className="window">
        <strong>
          <div className="windowHead"></div>
        </strong>
        <div className="windowContent"></div>
      </div>
    </Draggable>
  );
};
