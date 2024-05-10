import { FC } from "react";
import "./desktopScreen.css";
import { Layouts, Responsive, WidthProvider } from "react-grid-layout";
import { DesktopIcon } from "./icon/desktopicon";

export const DesktopScreen: FC = () => {
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 1, isResizable: false },
    { i: "b", x: 0, y: 0, w: 1, h: 1, isResizable: false },
    { i: "c", x: 0, y: 1, w: 1, h: 1, isResizable: false },
  ];
  const ResponsiveGridLayout = WidthProvider(Responsive);
  const layouts: Layouts = {
    lg: layout,
  };
  return (
    <div id="desktopScreen">
      <ResponsiveGridLayout
        layouts={layouts}
        className="layout"
        rowHeight={116}
      >
        <div key="a">
          <DesktopIcon />
        </div>
        <div key="b">
          <DesktopIcon />
        </div>
        <div key="c">
          <DesktopIcon />
        </div>
      </ResponsiveGridLayout>
    </div>
  );
};
