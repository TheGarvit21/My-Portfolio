import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Garvit.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        {/* Text Content */}
        <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2">
          {/* Animated Name */}
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="pb-16 text-6xl ml-10 font-thin tracking-tight lg:mt-16 lg:text-8xl text-transparent bg-gradient-to-r from-pink-400 via-slate-500 to-purple-600 bg-clip-text"
          >
            Garvit Rawal
          </motion.h1>

          {/* Animated Role */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="bg-gradient-to-r m-1 ml-10 from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent ml-4"
          >
            MERN Stack Developer
          </motion.span>

          {/* Description with staggered fade-in */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
            className="my-2 m-1 ml-10 max-w-xl py-6 font-light tracking-tighter"
          >
            {HERO_CONTENT}
          </motion.p>
        </div>

        {/* Profile Picture */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center lg:sticky lg:top-20">
            <motion.img
              src={profilePic}
              alt="Garvit Rawal"
              className="rounded-full shadow-xl w-96 h-96 object-cover object-bottom" // Increased size and focused on the bottom part of the image
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
