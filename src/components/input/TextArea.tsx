import { Textarea } from "@headlessui/react";

export default function TextArea({
  title,
  value,
  onChange,
  id,
  name,
  error,
}: {
  title: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  id: string;
  name: string;
  error?: string;
}) {
  return (
    <div>
      <div className="relative mt-2">
        <Textarea
          name={name}
          value={value}
          id={id}
          onChange={onChange}
          className="outline-none min-h-40 px-4 py-2 peer block w-full border-0 bg-gray-50 dark:bg-offBlack text-gray-900 dark:text-white focus:ring-0 sm:text-sm sm:leading-6"
          placeholder={title}
        />
        <div
          className="absolute inset-x-0 bottom-0 border-t border-black dark:border-white"
          aria-hidden="true"
        />
        <div className="py-2 px-4 absolute right-0 top-0 z-10 text-sm">
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
    </div>
  );
}
