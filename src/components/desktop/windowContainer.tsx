import { FC } from "react";
import "./desktopScreen.css";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { Window } from "./window/window";
import { Folder } from "./window/folder";
import { App } from "./window/app";

export const WindowContainer: FC = () => {
  const windows = useSelector((state: RootState) => state.window.openWindows);

  return (
    <>
      {windows.map((win) => {
        let child = <></>;
        switch (win.type) {
          case "App":
            child = <App></App>;
            break;

          case "Folder":
            child = <Folder></Folder>;
            break;
        }
        return (
          <Window name={win.name} isActive={win.isActive} type={win.type}>
            {child}
          </Window>
        );
      })}
    </>
  );
};
