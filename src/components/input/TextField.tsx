import { Input } from "@headlessui/react";

export default function TextField({
  title,
  value,
  onChange,
  id,
  name,
  error,
}: {
  title: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  name: string;
  error?: string;
}) {
  return (
    <div>
      <div className="relative mt-2">
        <Input
          type="text"
          name={name}
          value={value}
          id={id}
          onChange={onChange}
          className="px-4 py-2 peer block w-full border-0 bg-gray-50 dark:bg-offBlack text-gray-900 dark:text-white sm:text-sm sm:leading-6 outline-none"
          placeholder={title}
        />
        <div
          className="absolute inset-x-0 bottom-0 border-t border-black dark:border-white"
          aria-hidden="true"
        />
        <div className="py-2 px-4 absolute right-0 z-10 top-0 text-sm">
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
    </div>
  );
}
