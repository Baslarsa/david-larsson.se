import { Button } from "@headlessui/react";
import classNames from "../../utils/classNames";

export default function PrimaryButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <Button
      onClick={onClick}
      className={classNames(
        "group dark:bg-offBlack relative z-20 hover:text-white dark:hover:text-black dark:text-white text-black bg-white border border-black dark:border-white px-4 py-2"
      )}
    >
      <div className="absolute -z-10 left-0 top-0 bottom-0 w-2 bg-offBlack dark:bg-offWhite group-hover:w-[98%] transition-all duration-500 ease-in-out"></div>
      {label}
    </Button>
  );
}
