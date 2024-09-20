import { Button } from "@headlessui/react";
import classNames from "../../utils/classNames";

export default function PrimaryButton({
  label,
  type,
  onClick,
  className,
}: {
  label: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <Button
      type={type}
      onClick={onClick}
      className={classNames(
        className,
        "group dark:bg-offBlack relative z-20 hover:text-offWhite dark:hover:text-offBlack dark:text-offWhite text-offBlack bg-offWhite border border-offBlack dark:border-offWhite px-4 py-2"
      )}
    >
      <div className="absolute -z-10 left-0 top-0 bottom-0 w-2 bg-offBlack dark:bg-offWhite group-hover:w-[98%] transition-all duration-500 ease-in-out"></div>
      {label}
    </Button>
  );
}
