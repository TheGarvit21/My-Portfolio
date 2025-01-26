import React from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "../constants";

const Projects = () => {
  const projectAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl text-pink-300">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={projectAnimation}
          >
            {/* Project Image with Hover Animation */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-48 h-48 object-cover rounded-xl mx-auto"
              />
            </motion.div>
            {/* Project Details */}
            <div className="w-full lg:w-3/4">
              <h6 className="mb-2 font-semibold text-center">{project.title}</h6>
              <p className="mb-4 text-neutral-400 text-center">
                {project.description}
              </p>
              {/* Technology Tags with Hover Animation */}
              <div className="flex justify-center">
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    whileHover={{ scale: 1.1, backgroundColor: "#6b46c1" }}
                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
