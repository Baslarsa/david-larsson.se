const PageTitle = ({ title }: { title: string }) => {
  return (
    <h1 className="text-5xl font-black uppercase dark:text-white text-black">
      {title}
    </h1>
  );
};

export default PageTitle;
