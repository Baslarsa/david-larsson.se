import { motion } from "framer-motion";
const Experience = () => {
  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ ease: "easeIn" }}
      className="dark:text-white text-black h-full w-full md:px-16 md:py-12 px-8 py-6"
    >
      Experience
    </motion.div>
  );
};

export default Experience;
