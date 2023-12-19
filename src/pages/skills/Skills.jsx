import React from "react";
import "./Skills.css";
import { skills } from "../../data";
import { motion } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const textVariants = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: -0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Skills = () => {
  return (
    <motion.section
      className="skills container"
      variants={textVariants}
      initial="initial"
      animate="animate"
    >
      <motion.h1 className="section_title" variants={textVariants}>
        My <span>Skills</span>
      </motion.h1>
      <motion.div className="skills_container row" variants={textVariants}>
        <>
          {skills.map(({ title, percentage }, index) => {
            return (
              <div className="col-md-4 progress_box" key={index}>
                <div className="progress_circle">
                  <CircularProgressbar
                    strokeWidth={7.5}
                    text={`${percentage}`}
                    value={percentage}
                  />
                </div>

                <h3 className="skills_title">{title}</h3>
              </div>
            );
          })}
        </>
      </motion.div>
    </motion.section>
  );
};

export default Skills;
