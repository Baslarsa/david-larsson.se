import classNames from "../../utils/classNames";

const TextInput = ({
  title,
  value,
  type = "text",
  onChange,
  placeHolder,
  inputClassName,
  containerClassName,
  labelClassName,
}: {
  title: string;
  value: string | number;
  type: "text" | "number";
  placeHolder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputClassName?: string;
  containerClassName?: string;
  labelClassName?: string;
}) => {
  return (
    <div className={classNames(containerClassName, "relative")}>
      <label
        htmlFor="name"
        className={classNames(
          "absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900",
          labelClassName
        )}
      >
        {title}
      </label>
      <input
        onChange={onChange}
        id={title}
        name={title}
        value={value}
        type={type}
        placeholder={placeHolder}
        className={classNames(
          inputClassName,
          "block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        )}
      />
    </div>
  );
};

export default TextInput;
