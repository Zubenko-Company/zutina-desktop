import { FC, useEffect } from "react";
import "./desktopScreen.css";
import { Layout, Layouts, Responsive, WidthProvider } from "react-grid-layout";
import { DesktopIcon } from "./icon";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { WindowContainer } from "./windowContainer";
import { standartImages } from "../../media/standartImages";
import { Icons } from "../../apps";

const layout: Layout = {
  i: "a",
  x: 0,
  y: 0,
  w: 1,
  h: 1,
  isResizable: false,
  static: true,
};

export const DesktopScreen: FC = () => {
  const isAuth = useSelector((state: RootState) => state.user.isAuth);

  const ResponsiveGridLayout = WidthProvider(Responsive);

  useEffect(() => {
    localStorage.setItem("media", JSON.stringify(standartImages));
  }, []);

  return (
    <div id="desktopScreen">
      {isAuth && (
        <>
          <ResponsiveGridLayout className="layout" rowHeight={116}>
            {Icons.map((el, index) => {
              layout.i = String(index);
              return (
                <div key={index} data-grid={layout}>
                  <DesktopIcon
                    name={el.name}
                    type={el.type}
                    src={el.src as string}
                  />
                </div>
              );
            })}
          </ResponsiveGridLayout>
          <WindowContainer />
        </>
      )}
    </div>
  );
};
