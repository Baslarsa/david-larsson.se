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
          Started out as a dreamer with a vision of becoming a big hockey star,
          I spent most of my younger years chasing pucks. Things changes when I
          grew older and I realized that I had another passion for music. <br />
          This was what I became to spend both day and night with during my
          young adult life.
          <br /> I started out just for fun to make my own music at my computer
          and learned the basics of a couple of instruments. Soon enough I was
          hooked and became good enough to get accepted to probably one of the
          most famous songwriting and music-producing schools in Sweden and even
          the world - Musikmakarna.
          <br />
          So in 2015 I left my hometown and moved to Örnsköldsvik to study and
          soon after that I ended up in Stockholm where the music business
          lives.
          <br />
          For a couple of years I was making my way forward and even had the
          chance to work with some big Swedish artists such as Felix Sandman,
          Molly Hammar and Myra Granberg. In 2019 though, for me, the music
          became just another job, and to preserve the fun in music I made the
          decision to do something else and go into development. Happily it led
          me to the frontend world. I started out studying frontend development
          at IT-Högskolan in Stockholm. It felt quite creative and still hugely
          demanded on the market which was kind of what I was looking for when
          deciding on what way to go. In frontend development I get the ultimate
          stimuli by taking a great design and turning it into a living thing.
          <br />
          Now I’ve gotten to explore this world for a while by replacing cars
          for electric vehicles on Vässla and taking the public TV-entertainment
          to the next level on Nenda, and to be honest, I haven't regretted it
          even once. Feel free to hit me up on linkedin or use the contact form
          if you’re wondering anything or would like to get to know me even
          better.
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
