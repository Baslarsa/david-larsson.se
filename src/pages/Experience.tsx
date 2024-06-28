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
        title: "Frontend/Fullstack/UI Developer",
        organization: "Nenda TV",
        description:
          "Frontend Developer and UI Designer owning the design process, and frontend development in a team of three. Nenda creates streaming and digital signage solutions for businesses like bars, restaurants, hotels and other public facing TV-screens. Tech at Nenda: React/Typescript, Material UI, Node.js, MongoDB, Mongoose, Redux Toolkit, Azure etc.",
        dates: "Feb 2023 - current",
      },
      {
        title: "Frontend Developer",
        organization: "Vässla Micromobility",
        description:
          "Worked cross-functionally at the start in a team of three and ended up in a team of 9. Built and maintained a e-commerce website for medium sized business and also created our own ERP system to manage the operations of e-bike subscriptions. Tech: Next.js/Typescript, TailwindCSS, DatoCMS, GraphQL, Node.js, Postgres, Azure",
        dates: " Aug 2021 - Feb 2023",
      },
      {
        title: "Fullstack Internship",
        organization: "Epidemic Sound",
        description:
          "React-based development in a full-stack team called Distribution. Was part of building their main application for packaging and maintaining music distribution. Tech: React, Proptypes, GCP, Styled Components, @emotion.",
        dates: "Feb 2021 - Jul 2021",
      },
    ],
  },
  {
    name: "Education",
    href: "#",
    items: [
      {
        title: "Frontend Development",
        organization: "IT-Högskolan, Stockholm",
        description:
          "2 years of frontend development, including Javascript, HTML, CSS, React, Typescript, UX/UI design, SQL, Node.js, Git, CMS and more.",
        dates: "2019-2021",
      },
      {
        title: "Applied Internet of Things",
        organization: "Linnéuniversitetet, Växjö",
        description:
          "Summer course in IoT working practically with a microcontroller (LoPy 4 & MicroPython) and sensors to learn the basics and how to utilize it with the cloud.",
        dates: "2020-2020",
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
      animate={{ y: 0, opacity: 1, transition: { duration: 0.8 } }}
      exit={{ y: "-100%", opacity: 0, transition: { duration: 0.5 } }}
      className="dark:text-white text-black h-full w-full flex md:flex-row flex-col overflow-y-auto"
    >
      <div
        className={classNames(
          "relative md:w-2/5 w-full min-h-48 dark:bg-black bg-white bg-[url('/images/maps.jpg')] bg-cover bg-center"
        )}
      >
        <div className="absolute inset-0 bg-white/50 dark:bg-black/50 md:px-16 md:py-12 px-8 py-6">
          <PageTitle title="What" />
          <PageTitle title="I've" />
          <PageTitle title="done" />
        </div>
      </div>
      <div
        className={classNames(
          "md:w-3/5 w-full h-full md:px-6 md:py-6 py-2 px-2 flex flex-col"
        )}
      >
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
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.2, delay: 0.3 } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            key={currentTab.name}
          >
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
          </motion.div>
        </AnimatePresence>
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
        "cursor-pointer hover:bg-offWhite dark:hover:bg-offBlack py-2 px-4 relative",
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
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="p-4">{item.description}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Experience;
