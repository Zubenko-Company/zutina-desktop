import { FC } from "react";
import "../window.css";
import { Responsive, WidthProvider } from "react-grid-layout";
import { File } from "./file/file";
import { trpc } from "../../../../trpc/server";

const ResponsiveGridLayout = WidthProvider(Responsive);

// const images: mediaType = JSON.parse(localStorage.getItem("media") as string);

export const Folder: FC = () => {
  const { data: images, isLoading: isImagesLoading } =
    trpc.images.all.useQuery();

  if (isImagesLoading) {
    return <div>Жди ёпта</div>;
  }

  return (
    <div className="folderContent">
      <ResponsiveGridLayout>
        {images!.map((el, index) => (
          <div
            key={index}
            data-grid={{ x: index, y: 0, w: 1, h: 1, isResizable: false }}
          >
            <File name={el.name} iconSrc={el.base64} type="img"></File>
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
};
