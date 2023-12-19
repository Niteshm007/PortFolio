import React from "react";
import "./Home.css";
import Profile from "../../assets/N.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },

  scrollBtn: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Home = () => {
  return (
    <div className="hone section">
      <div className="container">
        <motion.div
          className="row"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div className="col-md-6">
            <img src={Profile} alt="" className="home_img" />
          </motion.div>
          <div className="col-md-6">
            <div className="home_content">
              <div className="home_data">
                <div className="home_title">
                  <motion.h1 variants={textVariants}>
                    <motion.span variants={textVariants}>
                      I'm Nitesh Malviya
                    </motion.span>{" "}
                    Web Developer{" "}
                  </motion.h1>
                  <motion.p className="home_description" variants={textVariants}>
                    I'm a Frontend Developer with a high level of knowledge in
                    web development, producing quality work.
                  </motion.p>

                  <Link to="/About" className="button" variants={textVariants}>
                    More About Me{" "}
                    <span className="button_icon">
                      <FaArrowRight />
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="color_block"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
// import React from "react";
// import './Home.css'
// import Profile from "../../assets/home.jpg";
// import { Link } from "react-router-dom";
// import { FaArrowRight } from "react-icons/fa";

// const Home = () => {
//   return (
//     <section className="home section grid">
//       <img src={Profile} alt="" className="home_img" />

// <div className="home_content">
//   <div className="home_data">
//     <div className="home_title">
//       <h1>
//         <span>I'm Nitesh Malviya</span> Web Developer{" "}
//       </h1>
//       <p className="home_description">
//         I'm a Frontend Developer with a high level of knowledge in web
//         development, producing quality work.
//       </p>

//       <Link to="/About" className="button">
//         More About Me{" "}
//         <span className="button_icon">
//           <FaArrowRight />
//         </span>
//       </Link>
//     </div>
//   </div>
// </div>

// <div className="color_block">

// </div>
//     </section>
//   );
// };

// export default Home;
