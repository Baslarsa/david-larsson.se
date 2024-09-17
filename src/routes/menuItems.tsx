import {
  ChatBubbleLeftEllipsisIcon,
  HomeIcon,
  InformationCircleIcon,
  UserIcon,
  WrenchIcon,
} from "@heroicons/react/24/outline";

export const MENU_ITEMS = [
  {
    name: "Home",
    icon: HomeIcon,
    path: "/",
  },
  {
    name: "About",
    icon: UserIcon,
    path: "/about",
  },
  {
    name: "Experience",
    icon: InformationCircleIcon,
    path: "/experience",
  },
  {
    name: "Contact",
    icon: ChatBubbleLeftEllipsisIcon,
    path: "/contact",
  },
  {
    name: "Toolbox",
    icon: WrenchIcon,
    path: "/tools",
  },
];
