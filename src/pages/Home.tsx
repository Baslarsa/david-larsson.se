import classNames from "../utils/classNames";
import { motion } from "framer-motion";
import HeroOverlay from "../components/svg/HeroOverlay.tsx";

const Home = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 1, easings: [0.17, 0.67, 0.83, 0.67] },
        }}
        exit={{ y: "-100%", opacity: 0, transition: { duration: 0.5 } }}
        className={classNames(
          `bg-[url('/images/david-hero-color.jpg')]`,
          "bg-cover bg-center h-full w-full",
          "relative overflow-hidden flex items-center justify-start text-white"
        )}
      >
        <motion.div
          className="md:w-1/3 w-1/2 h-full left-0"
          initial={{ x: "-300%" }}
          animate={{
            x: 0,
            transition: {
              duration: 1.5,
              delay: 0.2,
              easings: [0.17, 0.67, 0.83, 0.67],
            },
          }}
          exit={{ x: "-50%", transition: { duration: 0.5 } }}
        >
          <div className="w-full h-full flex">
            <div className="absolute bottom-5 left-5 md:w-2/3 w-screen z-[999] dark:text-white text-black">
              <p className="font-semibold">[d-aa-v-EE-d LARH-suhn]</p>
              <p className="font-light">
                <i>
                  a creative frontend developer and general "know a little about
                  alot" that fancies design. It also enjoy music, sports and
                  food.
                </i>
              </p>
            </div>
            <div
              className={classNames(
                "md:w-1/2 w-1/6 bg-white dark:bg-black h-full md:flex flex-col p-12 hidden transform scale-105 justify-end"
              )}
            ></div>
            <div className="w-1/2 h-full transform scale-105">
              <HeroOverlay className="h-full dark:fill-black fill-white" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Home;
