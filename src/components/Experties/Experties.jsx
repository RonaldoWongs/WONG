import React from 'react';
import { projectExperience, WhatDoIHelp } from '../../utils/data';
import css from './Experties.module.scss';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from '../../utils/motion.js';

const Experties = ({ darkMode }) => {
    const containerClasses = `${css.container} ${darkMode ? css.dark : ''}`;
    const wrapperClasses = `${css.wrapper} ${darkMode ? css.dark : ''}`;

    return (
        <section className={wrapperClasses}>
            <a className="anchor" id="experties"></a>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`paddings yPaddings innerWidth flexCenter ${containerClasses}`}>

                {/* left side */}
                <div className={css.leftSide}>
                    {projectExperience.map((exp, i) => {
                        return (
                            <motion.div
                                variants={fadeIn("right", "tween", (i + 1) * 0.2, 1)}
                                className={css.exp}
                                key={i}
                            >
                                <div style={{ background: exp.bg }} className="flexCenter">
                                    <exp.icon size={25} color="white" />
                                </div>
                                <div>
                                    <span>{exp.name}</span>
                                    <span className='secondaryText'>{exp.projects} Projects</span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* right */}
                <motion.div variants={textVariant(0.5)} className={css.rightSide}>
                    <span className='primaryText'>How can I help you? </span>
                    {WhatDoIHelp.map((paragraph, i) => (
                        <span className='secondaryText' key={i}>
                            {paragraph}
                        </span>
                    ))}

                    <div className={`flexCenter ${css.stats}`}>
                        <div className={`flexCenter ${css.stat}`}></div>
                        <div className={`flexCenter ${css.stat}`}></div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Experties;
