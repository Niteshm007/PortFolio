import React from "react";
import { projects } from "../../data";
import ProjectItems from "../../components/projectItems/ProjectItems";
import "./Projects.css";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    y: -500,
    opacity: 0,
  },
  animate: {
    y: -0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Projects = () => {
  return (
    <motion.section
      className="project"
      variants={textVariants}
      initial="initial"
      animate="animate"
    >
      <motion.h2 className="section_title" variants={textVariants}>
        My <span>Projects</span>
      </motion.h2>

      <div className="project_container container">
        <motion.div className="row">
          {projects.map((item) => (
            <div key={item.id} className="col-md-4">
              <ProjectItems {...item} />
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
