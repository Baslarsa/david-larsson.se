import { Textarea } from "@headlessui/react";

export default function TextArea({
  title,
  value,
  onChange,
}: {
  title: string;
  value: string;
  onChange: (value: string) => void;
}) {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };
  return (
    <div>
      <div className="relative mt-2">
        <Textarea
          name={title}
          value={value}
          id={title}
          onChange={handleChange}
          className="outline-none min-h-40 px-4 py-2 peer block w-full border-0 bg-gray-50 dark:bg-offBlack text-gray-900 dark:text-white focus:ring-0 sm:text-sm sm:leading-6"
          placeholder={title}
        />
        <div
          className="absolute inset-x-0 bottom-0 border-t border-black dark:border-white"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
