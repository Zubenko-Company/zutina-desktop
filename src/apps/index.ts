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
    src: "/media/gallery.png",
  },
  {
    name: "Друзья",
    type: "Folder",
    src: "/media/gallery.png",
  },
  {
    name: "Музыка",
    type: "App",
    src: "/media/gallery.png",
  },
];
