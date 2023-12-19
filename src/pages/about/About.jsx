import React from "react";
import "./About.css";
import Info from "../../components/info/Info";
import { FaDownload } from "react-icons/fa";
import CV from "../../Resume/Nitesh (Resume) .pdf";
import { motion } from "framer-motion";
import { resume } from "../../data";
import ResumeItem from "../../components/resumeItem/ResumeItem";

const textVariants = {
  initial: {
    x: -500,
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


const About = () => {
  return (
    <motion.div
      className="about"
      variants={textVariants}
      initial="initial"
      animate="animate"
    >
      <div className="container">
        <motion.h3 className="section_title" variants={textVariants}>
          About <span>Me</span>
        </motion.h3>
        <div className="row">
          <motion.h4
            className="section_subtitle text-center"
            variants={textVariants}
          >
            Personal Info
          </motion.h4>
          <motion.div className="col-md-6 about_info" variants={textVariants}>
            <h3>
              Name: <span> Nitesh Malviya</span>
            </h3>
            <h3>
              Age: <span> 23 Years</span>
            </h3>
            <h3>
              Gender: <span> Male</span>
            </h3>
            <h3>
              Address: <span> 🏡Nikol, Ahmedabad, Gujarat</span>
            </h3>
          </motion.div>
          <motion.div className="col-md-6 about_info" variants={textVariants}>
            <h3>
              Nationality:<span> Indian</span>
            </h3>
            <h3>
              Contact:<span> 📞+91 7374866730</span>
            </h3>
            <h3>
              Email:<span> 📫 Niteshmalvi74@gmail.com</span>
            </h3>
            <h3>
              Language:<span> English, Hindi, Gujarati</span>
            </h3>
          </motion.div>
        </div>
        <motion.div className="CV text-center mt-4" variants={textVariants}>
          <a href={CV} download="" className="button">
            Download CV
            <span className="button_icon">
              <FaDownload />
            </span>
          </a>
        </motion.div>

        <div className="separator"></div>

        <motion.div
          className="row resume"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <h4 className="section_subtitle text-center">Education</h4>
          <div className="col-md-6" variants={textVariants}>
            <div className="resume_head">
              <h3 className="text-center">Education</h3>
            </div>
            <div className="resume_data">
              {resume.map((val) => {
                if (val.category === "education") {
                  return <ResumeItem key={val.id} {...val} />;
                }
              })}
            </div>
          </div>
          <div className="col-md-6" variants={textVariants}>
            <div className="resume_head">
              <h3 className="text-center">Internship</h3>
            </div>
            <div className="resume_data">
              {resume.map((val) => {
                if (val.category === "experience") {
                  return <ResumeItem key={val.id} {...val} />;
                }
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
// import React from "react";
// import "./About.css";
// import Info from "../../components/info/Info";
// import { FaDownload } from "react-icons/fa";
// import CV from "../../Resume/Nitesh (Resume) .pdf";
// import Stats from "../../components/stats/Stats";
// import { resume } from "../../data";
// import ResumeItem from "../../components/resumeItem/ResumeItem";

// const About = () => {
//   return (
//     <main className="section container">
//       <section className="about">
//         <h2 className="section_title">
//           About <span>Me</span>
//         </h2>
//         <div className="about_container ">
//           <div className="about_info ">
//             <h3 className="section_subtitle text-center">Personal Infos</h3>

//             <ul className="info_list grid">
//               <Info />
//             </ul>

// <div className="CV text-center">
//   <a href={CV} download="" className="button">
//     Download CV
//     <span className="button_icon">
//       <FaDownload />
//     </span>
//   </a>
// </div>
//           </div>

//           <div className="stats grid">{/* <Stats/> */}</div>
//         </div>
//       </section>

//       <div className="separator"></div>

//       <section className="resume">
//         <h3 className="section_subtitle subtitle_center">Education</h3>

//         <div className="resume_container grid">

//         </div>
//       </section>
//     </main>
//   );
// };

// export default About;
