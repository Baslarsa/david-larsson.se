import { motion } from "framer-motion";
import PageTitle from "../components/text/PageTitle";
import Paragraph from "../components/text/Paragraph";
import AudioPlayer from "../components/AudioPlayer";
const About = () => {
  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.8 } }}
      exit={{ y: "-100%", opacity: 0, transition: { duration: 0.5 } }}
      className="dark:text-white text-black h-full w-full flex md:flex-row flex-col overflow-y-auto"
    >
      <div className="flex-1 md:px-16 md:py-12 px-8 py-6 flex flex-col">
        <PageTitle title="About" />
        <Paragraph className="mt-6">
          Hello! My name is David Larsson, a creative individual with a passion
          for technology, music, gaming, and hands-on craftsmanship. Born in
          1990 and raised in Fagersta, approximately two hours from Stockholm, I
          began my career as a CNC operator at a local factory and after six
          years, I decided to embark on a new chapter as a songwriter and music
          producer.
          <br />
          <br />I studied in Örnsköldsvik and spent a couple of years
          freelancing in Stockholm, where I had the opportunity to write and
          produce a song for the Swedish international actor and artist Felix
          Sandman. <br />
          Realizing that the music industry wasn't the right fit for me, I
          harnessed my creativity, tech interest, and programming background in
          2019, leading me to frontend development.
          <br /> Since 2021, I have been working full-time in this field, also
          taking on roles as a UX/UI designer and delving into some backend
          development.
          <br />
          <br /> In my free time, I combine my love for music and craftsmanship
          by building acoustic guitars.
          <br /> Any questions? Please don't hesitate to reach out!
        </Paragraph>
      </div>
      <div className="bg-black md:w-1/3 w-full h-full bg-[url('/images/office.jpg')] bg-cover">
        <div className="bg-black/70 h-full w-full flex justify-center items-center py-20">
          <AudioPlayer />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
