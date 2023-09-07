import React, { useEffect } from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
import { redirectToPage1, redirectToPage2, redirectToPage3 } from "../../hooks/redirects"; // Importa las funciones de redirección

const Portfolio = () => {
  useEffect(() => {
    // Agregar eventos de clic a las imágenes aquí
    const image1 = document.getElementById("image1");
    const image2 = document.getElementById("image2");
    const image3 = document.getElementById("image3");

    if (image1) {
      image1.addEventListener("click", redirectToPage1);
    }

    if (image2) {
      image2.addEventListener("click", redirectToPage2);
    }

    if (image3) {
      image3.addEventListener("click", redirectToPage3);
    }

    // Retornar una función para limpiar los eventos al desmontar el componente
    return () => {
      if (image1) {
        image1.removeEventListener("click", redirectToPage1);
      }
      if (image2) {
        image2.removeEventListener("click", redirectToPage2);
      }
      if (image3) {
        image3.removeEventListener("click", redirectToPage3);
      }
    };
  }, []); // El segundo argumento vacío [] asegura que el efecto se ejecute solo una vez después del montaje

  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="portfolio"></a>
      <div className={`innerWidth flexCenter ${css.container}`}>
        <motion.div variants={textVariant(0.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Latest Works</span>
            <p style={{ marginTop: "10px" }}>Perfect solution for digital experience</p>
          </div>
          <a href="https://wong-proyectos.netlify.app/" className="secondaryText">Explore More Works</a>
        </motion.div>
        <div className={`flexCenter ${css.showCase}`}>
          <motion.img id="image1" variants={fadeIn("up", "tween", 0.5, 0.6)} src="./showCase1.png" alt="project" />
          <motion.img id="image2" variants={fadeIn("up", "tween", 0.7, 0.6)} src="./showCase2.png" alt="project" />
          <motion.img id="image3" variants={fadeIn("up", "tween", 0.9, 0.6)} src="./showCase3.png" alt="project" />
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;