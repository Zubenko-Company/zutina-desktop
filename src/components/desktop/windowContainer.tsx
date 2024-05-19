import { FC } from "react";
import "./desktopScreen.css";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { Window } from "./window";

export const WindowContainer: FC = () => {
  const windows = useSelector((state: RootState) => state.window.openWindows);

  return (
    <>
      {windows.map((win) => (
        <Window title={win.title} isActive={win.isActive} />
      ))}
    </>
  );
};
