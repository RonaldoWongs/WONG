import React from "react";
import { motion } from "framer-motion";
import css from "./Tecnologies.module.scss";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";

const Tecnologies = ({ darkMode }) => {
  const containerClasses = `${css.container} ${darkMode ? css.dark : ''}`;
  const wrapperClasses = `${css.wrapper} ${darkMode ? css.dark : ''}`;

  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${wrapperClasses}`}
    >
      <a className="anchor" id="tecnologies"></a>
      <div className={`innerWidth flexCenter ${containerClasses}`}>
        <motion.div variants={textVariant(0.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">Technologies to be used</span>
            <p style={{ marginTop: "10px" }}>These are the technologies that have been used so far.</p>
          </div>
        </motion.div>
        <div className={`flexCenter ${css.showCase}`}>
          <motion.img variants={fadeIn("up", "tween", 0.5, 0.6)} src="https://cms.rootstack.com/sites/default/files/inline-images/javascript%20logo.png" alt="project" />
          <motion.img variants={fadeIn("up", "tween", 0.7, 0.6)} src="https://logonoid.com/images/react-logo.png" alt="project" />
          <motion.img variants={fadeIn("up", "tween", 0.9, 0.6)} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="project" />
          <motion.img variants={fadeIn("up", "tween", 0.9, 0.6)} src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png" alt="project" />
          <motion.img variants={fadeIn("up", "tween", 0.9, 0.6)} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" alt="project" />
          <motion.img variants={fadeIn("up", "tween", 0.9, 0.6)} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png" alt="project" />
        </div>
      </div>
    </motion.section>
  );
};

export default Tecnologies;
