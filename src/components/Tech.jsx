import { RiReactjsLine } from "react-icons/ri";
import { SiNodedotjs, SiExpress, SiMongodb, SiPython } from "react-icons/si";
import { FaJava } from "react-icons/fa"; // Correct Java icon import
import { motion } from "framer-motion";

const slowBounceAnimation = {
  initial: { y: 0 },
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 1.2,
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

const Tech = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      {/* Title */}
      <h1 className="my-20 text-center text-4xl">Technologies</h1>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* React Icon with slow bounce animation */}
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={slowBounceAnimation}
          initial="initial"
          animate="animate"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        {/* Node.js Icon with slow bounce animation */}
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={slowBounceAnimation}
          initial="initial"
          animate="animate"
        >
          <SiNodedotjs className="text-7xl text-green-400" />
        </motion.div>

        {/* Express Icon with slow bounce animation */}
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={slowBounceAnimation}
          initial="initial"
          animate="animate"
        >
          <SiExpress className="text-7xl text-gray-400" />
        </motion.div>

        {/* MongoDB Icon with slow bounce animation */}
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={slowBounceAnimation}
          initial="initial"
          animate="animate"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>

        {/* Python Icon with slow bounce animation */}
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={slowBounceAnimation}
          initial="initial"
          animate="animate"
        >
          <SiPython className="text-7xl text-blue-400" />
        </motion.div>

        {/* Java Icon with slow bounce animation */}
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={slowBounceAnimation}
          initial="initial"
          animate="animate"
        >
          <FaJava className="text-7xl text-red-400" />
        </motion.div>
      </div>
    </div>
  );
};

export default Tech;
