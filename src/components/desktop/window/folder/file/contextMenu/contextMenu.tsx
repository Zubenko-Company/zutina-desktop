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

export const ContextMenu: FC = () => {
  return (
    <div className="contextMenu" style={{ left: "0px", top: "0px" }}>
      <ul>
        {options.map((el) => (
          <li onClick={el.handler}>{el.name}</li>
        ))}
      </ul>
    </div>
  );
};
