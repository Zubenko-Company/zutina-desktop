import { FC } from "react";

type FileProps = {
  name: string;
  iconSrc: string;
  type: string;
};

const contextMenuHandler = (e: any) => {
  e.preventDefault();
  console.log("Right Click");
};

export const File: FC<FileProps> = ({ name, iconSrc, type }) => {
  return (
    <div onContextMenu={contextMenuHandler}>
      <img src={iconSrc} className="imageFile" alt="file preview"></img>
      <p className="fileName">
        {name}.{type}
      </p>
    </div>
  );
};
