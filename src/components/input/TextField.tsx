import { Input } from "@headlessui/react";

export default function TextField({
  title,
  value,
  onChange,
}: {
  title: string;
  value: string;
  onChange: (value: string) => void;
}) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <div>
      <div className="relative mt-2">
        <Input
          type="text"
          name={title}
          value={value}
          id={title}
          onChange={handleChange}
          className="px-4 py-2 peer block w-full border-0 bg-gray-50 dark:bg-offBlack text-gray-900 dark:text-white sm:text-sm sm:leading-6 outline-none"
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
