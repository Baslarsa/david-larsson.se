import classNames from "../../utils/classNames";

const Paragraph = (props: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={classNames("dark:text-white text-black", props.className)}>
      {props.children}
    </p>
  );
};

export default Paragraph;
