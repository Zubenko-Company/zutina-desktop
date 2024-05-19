import { FC } from "react";
import "./desktopScreen.css";
import { Layout, Layouts, Responsive, WidthProvider } from "react-grid-layout";
import { DesktopIcon } from "./icon";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { Window } from "./window";
import { WindowContainer } from "./windowContainer";

const layout: Layout[] = [
  { i: "a", x: 0, y: 0, w: 1, h: 1, isResizable: false, static: true },
  { i: "b", x: 0, y: 0, w: 1, h: 1, isResizable: false, static: true },
  { i: "c", x: 0, y: 1, w: 1, h: 1, isResizable: false, static: true },
];

export const DesktopScreen: FC = () => {
  const isAuth = useSelector((state: RootState) => state.user.isAuth);

  const ResponsiveGridLayout = WidthProvider(Responsive);
  const layouts: Layouts = {
    lg: layout,
  };

  return (
    <div id="desktopScreen">
      {isAuth && (
        <>
          <ResponsiveGridLayout
            layouts={layouts}
            className="layout"
            rowHeight={116}
          >
            <div key="a">
              <DesktopIcon title="Картинки" />
            </div>
            <div key="b">
              <DesktopIcon title="Друзья" />
            </div>
            <div key="c">
              <DesktopIcon title="Музыка" />
            </div>
          </ResponsiveGridLayout>
          <WindowContainer />
        </>
      )}
    </div>
  );
};
