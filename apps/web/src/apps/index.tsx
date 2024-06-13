import gallery from "./media/gallery.png";
import music from "./media/music.png";
import people from "./media/people.png";

export type WindowType = "Folder" | "App";

export type AppsType = {
  name: string;
  type: WindowType;
  isActive?: boolean;
  src?: string;
};

export const Icons: AppsType[] = [
  {
    name: "Картинки",
    type: "Folder",
    src: gallery,
  },
  {
    name: "Друзья",
    type: "Folder",
    src: people,
  },
  {
    name: "Музыка",
    type: "App",
    src: music,
  },
];
