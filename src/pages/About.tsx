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
          Started out as a dreamer with a vision of becoming a hockey star. I
          spent most of my younger years chasing pucks. When I grew older I
          found that my suit contained something else - creativity. <br />
          This was what I became to spend both day and night with. I started to
          find ambition in music and the creative process behind it. <br />
          <br />
          In 2015 after a few years as a working class hero at the local
          rock-drilling factory, I got accepted to one of the most renowned
          songwriting and music-production schools in Sweden. Maybe the world.
          Musikmakarna. From this day I left my hometown permanently. I got
          quite good at making music and spent a couple of years freelancing the
          music biz, writing songs for quite big artists such as Felix Sandman
          and Molly Hammar. Yea, that’s why that song is in the player on this
          page, gotta get them royalties hehe. Jokes aside, as is the music.{" "}
          <br />
          In 2019 I made the decision to put the music on the shelf – I didn’t
          find it as amusing and fun as I used to. Happily it pointed me to the
          development area since it always has been an area I’ve been wanting to
          get to know. I started out studying front-end development at
          IT-Högskolan in Stockholm. It felt quite creative and still hugely
          demanded on the market which was kind of what I was looking for when
          deciding on what way to go. In frontend development I find pleasure in
          getting the pixles just perfect, the animations to feel like butter
          and to package an idea into the perfect gift-wrap. <br />
          <br />
          Now I’ve gotten to explore this world for a while, and to be honest, I
          haven't regretted it even once. Feel free to hit me up with a message
          or call if you’re wondering anything or would like to know me even
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
