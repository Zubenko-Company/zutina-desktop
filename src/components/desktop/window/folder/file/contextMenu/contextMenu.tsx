import { FC } from "react";
import "./contextMenu.css";

const options = [
  {
    name: "Открыть",
    handler: () => {
      console.log("Открыть");
    },
  },
  {
    name: "Удалить",
    handler: () => {
      console.log("Удалить");
    },
  },
];

export type ContextMenuType = { x: number; y: number; isClosed: boolean };

export const ContextMenu: FC<ContextMenuType> = (props: ContextMenuType) => {
  const display = props.isClosed ? "none" : "block";

  return (
    <div
      className="contextMenu"
      style={{ left: props.x, top: props.y, display }}
    >
      <ul>
        {options.map((el) => (
          <li onClick={el.handler}>{el.name}</li>
        ))}
      </ul>
    </div>
  );
};
