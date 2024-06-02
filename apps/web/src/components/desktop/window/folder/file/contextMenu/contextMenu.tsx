import { FC, useContext, useEffect, useRef } from "react";
import "./contextMenu.css";
import { DesktopContext } from "../../../..";

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
  const contextMenu = useRef<HTMLDivElement>(null);
  const { setContextMenu } = useContext(DesktopContext);

  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (
        contextMenu.current &&
        !contextMenu.current.contains(event.target as Node)
      ) {
        setContextMenu({
          x: 0,
          y: 0,
          isClosed: true,
        });
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [contextMenu]);

  return (
    <div
      ref={contextMenu}
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
