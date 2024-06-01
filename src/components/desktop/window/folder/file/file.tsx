import { FC, MouseEvent, useContext } from "react";
import { DesktopContext } from "../../..";

type FileProps = {
  name: string;
  iconSrc: string;
  type: string;
};

export const File: FC<FileProps> = ({ name, iconSrc, type }) => {
  const { setContextMenu } = useContext(DesktopContext);

  return (
    <div
      onContextMenu={(e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setContextMenu({ x: e.pageX, y: e.pageY, isClosed: false });
      }}
    >
      <img src={iconSrc} className="imageFile" alt="file preview"></img>
      <p className="fileName">
        {name}.{type}
      </p>
    </div>
  );
};
