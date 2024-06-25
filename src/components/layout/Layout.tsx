import { Switch } from "@headlessui/react";
import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";
import { NavLink, useMatch } from "react-router-dom";
import { MENU_ITEMS } from "../../routes/menuItems";
import classNames from "../../utils/classNames";
import AnimatedOutlet from "../AnimatedOutlet";
import GithubIcon from "../svg/GithubIcon";
import LinkedinIcon from "../svg/Linkedin";
import SiteLogo from "../svg/SiteLogo";

const Layout = () => {
  return (
    <div className="fixed transition-colors duration-500 flex dark:bg-black bg-white dark:text-white text-black w-full h-full">
      <SideBar />
      <div className="w-full h-full flex flex-col">
        <div className="h-20 w-full flex justify-between md:justify-end pl-0 pr-6 md:pl-6">
          <div className="h-full md:hidden block">
            <SiteLogo className="h-full p-4 stroke-transparent dark:fill-white fill-offBlack" />
          </div>
          <div className="flex gap-2 items-center">
            <LinkedinIcon className="w-6 h-6 fill-black dark:fill-white" />
            <GithubIcon className="w-6 h-6 fill-black dark:fill-white" />
          </div>
        </div>
        <div className="flex h-20 w-full flex-1">
          <div className="flex-1 bg-offWhite dark:bg-offBlack overflow-hidden">
            <AnimatedOutlet />
          </div>
          <div className="w-20 h-full self-end md:block hidden"></div>
        </div>
        <div className="h-20 w-full"></div>
      </div>
      <MobileNav />
    </div>
  );
};

const SideBar = () => {
  return (
    <div className="w-24 h-full md:block hidden">
      <div className="h-full w-full p-2 flex flex-col justify-between">
        <SiteLogo className="w-full p-2 stroke-transparent dark:fill-white fill-offBlack" />
        <NavIconList />
        <DarkModeToggle />
      </div>
    </div>
  );
};

const MobileNav = () => {
  const menuItems = MENU_ITEMS;

  return (
    <div
      className={classNames(
        "md:hidden fixed right-0 left-0 bottom-0 h-24 dark:bg-black bg-white flex items-center gap-4 justify-between"
      )}
    >
      {menuItems.map((item) => (
        <NavItem key={item.name} item={item} />
      ))}
    </div>
  );
};

const NavIconList = () => {
  const menuItems = MENU_ITEMS;

  return (
    <div className="w-full flex flex-col items-center gap-6">
      {menuItems.map((item) => (
        <NavItem key={item.name} item={item} />
      ))}
    </div>
  );
};

const NavItem = ({
  item,
}: {
  item: { name: string; path: string; icon: any };
}) => {
  const match = useMatch(item.path);

  return (
    <NavLink
      to={item.path}
      className={classNames(
        match ? "text-primary" : "text-black/50",
        "w-full h-10 flex items-center justify-center"
      )}
    >
      <div
        key={item.name}
        className={classNames(
          "relative h-10 flex items-center justify-center transition-colors duration-200 ease-in"
        )}
      >
        <item.icon
          width={30}
          className={classNames(
            match
              ? "stroke-black dark:stroke-white"
              : "stroke-black/50 dark:stroke-white/50",
            "transition-colors hover:stroke-black"
          )}
        />
        <span
          className={classNames(
            match ? "w-full" : "w-0",
            "bg-primary absolute bottom-0 h-0.5 transition-width duration-200 ease-in rounded-sm"
          )}
        ></span>
      </div>
    </NavLink>
  );
};

const DarkModeToggle = () => {
  const darkMode = window.localStorage.getItem("darkMode");
  const [enabled, setEnabled] = useState(darkMode === "true" || false);

  const darkModeHandler = () => {
    setEnabled(!enabled);
    window.localStorage.setItem("darkMode", enabled ? "false" : "true");
    document.body.classList.toggle("dark");
  };

  useEffect(() => {
    if (darkMode === "true") {
      document.body.classList.add("dark");
    }
  });
  return (
    <div className="w-full h-6 flex justify-center py-6 items-center">
      <Switch
        checked={enabled}
        onChange={darkModeHandler}
        className={classNames(
          enabled ? "bg-primary" : "bg-gray-200",
          "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        )}
      >
        <span className="sr-only">Darkmode toggle</span>
        <span
          className={classNames(
            enabled ? "translate-x-5" : "translate-x-0",
            "pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
          )}
        >
          <span
            className={classNames(
              enabled
                ? "opacity-0 duration-100 ease-out"
                : "opacity-100 duration-200 ease-in",
              "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
            )}
            aria-hidden="true"
          >
            <SunIcon className="h-3 w-3 text-primary" />
          </span>
          <span
            className={classNames(
              enabled
                ? "opacity-100 duration-200 ease-in"
                : "opacity-0 duration-100 ease-out",
              "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
            )}
            aria-hidden="true"
          >
            <MoonIcon className="h-3 w-3 text-primary" />
          </span>
        </span>
      </Switch>
    </div>
  );
};

export default Layout;
