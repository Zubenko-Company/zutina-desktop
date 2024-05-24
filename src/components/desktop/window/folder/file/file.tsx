import { FC } from "react";

type FileProps = {
  name: string;
  iconSrc: string;
  type: string;
};

export const File: FC<FileProps> = ({ name, iconSrc, type }) => {
  return (
    <>
      <img src={iconSrc} className="imageFile" alt="file preview"></img>
      <p className="fileName">
        {name}.{type}
      </p>
    </>
  );
};
