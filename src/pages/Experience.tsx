import { AnimatePresence, motion } from "framer-motion";
import PageTitle from "../components/text/PageTitle";
import classNames from "../utils/classNames";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Paragraph from "../components/text/Paragraph";

type TabItem = {
  title: string;
  organization: string;
  description: string;
  dates: string;
};

type Tab = {
  name: string;
  href: string;
  items: TabItem[];
};
const tabs: Tab[] = [
  {
    name: "Work",
    href: "#",
    items: [
      {
        title: "Frontend Developer",
        organization: "Vässla Micromobility",
        description:
          "Highschool education on the technical program. Alot of construction engineering, CAD, auto-CAD and other technical stuff. Also got basic learnings about industrial machinery and CNC programming. This education got me into the CNC-Operator profession. ",
        dates: "2020-2021",
      },
      {
        title: "Frontend/Fullstack/UI Developer",
        organization: "Nenda TV",
        description:
          "Highschool education on the technical program. Alot of construction engineering, CAD, auto-CAD and other technical stuff. Also got basic learnings about industrial machinery and CNC programming. This education got me into the CNC-Operator profession. ",
        dates: "2020-2021",
      },
    ],
  },
  {
    name: "Education",
    href: "#",
    items: [
      {
        title: "Education 1",
        organization: "Organization 1",
        description: "Education 1 description",
        dates: "2020-2021",
      },
      {
        title: "Education 2",
        organization: "Organization 2",
        description: "Education 2 description",
        dates: "2020-2021",
      },
    ],
  },
];
const Experience = () => {
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const [selectedRow, setSelectedRow] = useState<string | null>(null);
  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ ease: "easeIn" }}
      className="dark:text-white text-black h-full w-full flex"
    >
      <div
        className={classNames(
          "relative w-2/5 dark:bg-black bg-white bg-[url('/images/maps.jpg')] bg-cover bg-center"
        )}
      >
        <div className="absolute inset-0 bg-white/50 dark:bg-black/50 md:px-16 md:py-12 px-8 py-6">
          <PageTitle title="What" />
          <PageTitle title="I've" />
          <PageTitle title="done" />
        </div>
      </div>
      <div className={classNames("w-3/5 h-full px-6 py-6 flex flex-col")}>
        <div className={classNames("w-full py-4 px-4 flex items-center gap-4")}>
          {tabs.map((tab) => {
            const isActive = tab.name === currentTab.name;
            return (
              <div
                key={tab.name}
                className={classNames(
                  "h-full py-2 px-2 transition-colors relative cursor-pointer"
                )}
                onClick={() => setCurrentTab(tab)}
              >
                <div>{tab.name}</div>
                <div
                  className={classNames(
                    isActive ? "w-full" : "w-0",
                    "bg-primary h-[2px] transition-all rounded-sm"
                  )}
                ></div>
              </div>
            );
          })}
        </div>
        <div
          className={classNames(
            "flex-1 py-4 px-4 bg-white dark:bg-black flex flex-col gap-4"
          )}
        >
          {currentTab.items.map((item) => {
            return (
              <ExpandableRow
                key={item.title}
                item={item}
                onSelect={setSelectedRow}
                selectedTitle={selectedRow}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

const ExpandableRow = ({
  item,
  onSelect,
  selectedTitle,
}: {
  item: TabItem;
  onSelect: (title: string | null) => void;
  selectedTitle: string | null;
}) => {
  const handleSelectRow = () => {
    if (selectedTitle === item.title) {
      onSelect(null);
      return;
    }
    onSelect(item.title);
  };
  const isOpen = selectedTitle === item.title;
  return (
    <div
      onClick={handleSelectRow}
      className={classNames(
        "cursor-pointer hover:bg-offWhite dark:hover:bg-offBlack py-2 px-4",
        isOpen && "bg-offWhite dark:bg-offBlack"
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div>
            <ChevronDownIcon
              className={classNames(
                "dark:text-white text-black w-6 h-6",
                isOpen ? "transform rotate-180" : "rotate-0"
              )}
            />
          </div>
          <div className="flex flex-col">
            <Paragraph className="font-bold">{item.title}</Paragraph>
            <Paragraph className="text-black/50 dark:text-white/50">
              {item.organization}
            </Paragraph>
          </div>
        </div>
        <div>
          <Paragraph className="text-black/50 dark:text-white/50">
            {item.dates}
          </Paragraph>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={item.title}
            className="p-4"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
          >
            {item.description}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Experience;
