import { useState } from "react";
import PageTitle from "../components/text/PageTitle";
import Paragraph from "../components/text/Paragraph";
import InchConverter from "../components/tools/InchConverter";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import FretCalculator from "../components/tools/FretCalculator";

type Tool = {
  id: number;
  title: string;
  description: string;
  component: JSX.Element;
};

const TOOLS = [
  {
    id: 1,
    title: "Inch Converter",
    description: "Convert inches to millimeters",
    component: <InchConverter />,
  },
  {
    id: 2,
    title: "Guitar Fret Calculator",
    description: "Calculates the fret spacing for guitars",
    component: <FretCalculator />,
  },
];
export default function ToolBox() {
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);

  return (
    <div className="md:px-16 md:py-12 px-8 py-6">
      <div className="h-10">
        {selectedTool && (
          <div
            className="flex items-center gap-2 w-full cursor-pointer"
            onClick={() => setSelectedTool(null)}
          >
            <div className="h-6 w-6">
              <ArrowLeftIcon />
            </div>
            <Paragraph className="">Tools</Paragraph>
          </div>
        )}
      </div>
      <div className="pb-4">
        <PageTitle title={`Tools`} />
        <Paragraph className="mt-6">
          This is a place where I keep tools, calculators and utilities that I
          use in my daily life and while building acoustic guitars. Mostly while
          building guitars :)
        </Paragraph>
      </div>

      {selectedTool ? (
        selectedTool.component
      ) : (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-2">
          {TOOLS.map((tool) => (
            <ToolCard key={tool.title} tool={tool} onClick={setSelectedTool} />
          ))}
        </div>
      )}
    </div>
  );
}

const ToolCard = ({
  tool,
  onClick,
}: {
  tool: Tool;
  onClick: (tool: Tool) => void;
}) => {
  const handleClick = () => {
    onClick(tool);
  };
  return (
    <div
      className="p-4 shadow-lg min-h-10 h-full cursor-pointer transform hover:-translate-y-1 transition-transform"
      onClick={handleClick}
    >
      <Paragraph className="font-bold">{tool.title}</Paragraph>
      <Paragraph>{tool.description}</Paragraph>
    </div>
  );
};
