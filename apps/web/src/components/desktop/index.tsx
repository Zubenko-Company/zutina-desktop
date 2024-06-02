import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import "./desktopScreen.css";
import { Layout, Responsive, WidthProvider } from "react-grid-layout";
import { DesktopIcon, DesktopIconProps } from "./icon";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { WindowContainer } from "./windowContainer";
import { standartImages } from "../../media/standartImages";
import { Icons } from "../../apps";
import { ContextMenu } from "./window/folder/file/contextMenu/contextMenu";

const layout: Layout = {
  i: "a",
  x: 0,
  y: 0,
  w: 1,
  h: 1,
  isResizable: false,
  static: true,
};

type ContextMenuType = { x: number; y: number; isClosed: boolean };
type ReactDispatchType = Dispatch<SetStateAction<ContextMenuType>>;

export const DesktopContext = React.createContext({
  contextMenu: {},
  setContextMenu: {} as ReactDispatchType,
});

export const DesktopScreen: FC = () => {
  const [contextMenu, setContextMenu] = useState({
    x: 0,
    y: 0,
    isClosed: true,
  });

  const value = { contextMenu, setContextMenu };

  const isAuth = useSelector((state: RootState) => state.user.isAuth);

  const ResponsiveGridLayout = WidthProvider(Responsive);

  useEffect(() => {
    localStorage.setItem("media", JSON.stringify(standartImages));
  }, []);

  return (
    <DesktopContext.Provider value={value}>
      <div id="desktopScreen">
        {isAuth && (
          <>
            <ResponsiveGridLayout className="layout" rowHeight={116}>
              {Icons.map((el, index) => {
                layout.i = String(index);
                return (
                  <div key={index} data-grid={layout}>
                    <DesktopIcon {...(el as DesktopIconProps)} />
                  </div>
                );
              })}
            </ResponsiveGridLayout>
            <WindowContainer />
            {/* <ContextMenu {...contextMenu} /> */}
          </>
        )}
      </div>
    </DesktopContext.Provider>
  );
};
