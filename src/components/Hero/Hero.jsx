import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";

const Hero = ({ darkMode }) => {
  const containerClasses = `${css.container} ${darkMode ? css.dark : ""}`;
  const wrapperClasses = `paddings ${css.wrapper} ${darkMode ? css.dark : ""}`;

  return (
    <section className={wrapperClasses}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${containerClasses}`}
      >
        <div className={css.upperElements}>
          <motion.span className="primaryText" variants={fadeIn("right", "tween", 0.2, 1)}>
            Hey There,
            <br />
            I'm Ronaldo.
          </motion.span>
          <motion.span className="secondaryText" variants={fadeIn("left", "tween", 0.4, 1)}>
            I design beautiful simple
            <br />
            passionate about programming <br />
            and love what I do.
          </motion.span>
        </div>

        <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className={css.img}>
          <motion.img variants={slideIn("up", "tween", 0.5, 1.3)} src="./person.png" alt="" />
        </motion.div>

        <a className={css.email} href="mailto:wongsdeveloper@gmail.com">
          wongsdeveloper@gmail.com
        </a>

        <div className={css.lowerElements}>
          <motion.div className={`experience ${css.experience}`} variants={fadeIn("right", "tween", 0.3, 1)}>
            <div className="primaryText">2</div>
            <div className="secondaryText">
              <div>Years of</div>
              <div>Experience on personal
                 proyecs</div>
            </div>
          </motion.div>

          <motion.div className={`certificate ${css.certificate}`} variants={fadeIn("left", "tween", 0.6, 1)}>
            <a href="https://wong-certificate.netlify.app/">
              <img src="https://yt3.googleusercontent.com/q94w3Q5SfG88JmDCk7_kthffYAObrS5QweQXp_KBNkVfUHDUOIwtLpcEaS8MP89aBgJFfWXxdw=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-r" alt="" />
            </a>
            <span>CERTIFIED WITH ACADEMLO</span>
            <span>FULL STACK DEVELOPER</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
