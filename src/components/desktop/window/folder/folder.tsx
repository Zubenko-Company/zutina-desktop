import { FC } from "react";
import "../window.css";
import { Responsive, WidthProvider } from "react-grid-layout";
import { mediaType } from "../../../../media/standartImages";
import { File } from "./file/file";

const ResponsiveGridLayout = WidthProvider(Responsive);

const images: mediaType = JSON.parse(localStorage.getItem("media") as string);

export const Folder: FC = () => {
  return (
    <div className="folderContent">
      <ResponsiveGridLayout>
        {images.map((el, index) => (
          <div
            key={index}
            data-grid={{ x: index, y: 0, w: 1, h: 1, isResizable: false }}
          >
            <File name={el.name} iconSrc={el.src} type={el.type}></File>
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
};
