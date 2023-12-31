import React, { useEffect, useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiPhoneCall, BiMenuAltRight, BiShareAlt } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import logoImage from '../../assets/letra-w.png'
import { FaSun, FaMoon } from "react-icons/fa";


const Header = ({ darkMode, toggleDarkMode }) => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const [socialMenuOpened, setSocialMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();

  // Para manejar clics fuera de la barra lateral en dispositivos móviles
  useOutsideAlerter({
    menuRef,
    setMenuOpened,
    setSocialMenuOpened, // Agregamos el estado para el menú de redes sociales
  });

  const toggleMenu = () => {
    setMenuOpened((prev) => !prev);
  };

  const toggleSocialMenu = () => {
    setSocialMenuOpened((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpened(false);
    setSocialMenuOpened(false); // Cerrar el menú de redes sociales cuando se cierra el menú principal
  };

  const openWhatsApp = () => {
    // Cerrar el menú cuando se abre WhatsApp
    closeMenu();
    window.open("https://wa.me/5215611355341", "_blank");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Puedes ajustar la velocidad de desplazamiento aquí
    });
  };

  return (
    <motion.div
    variants={headerVariants}
    initial="hidden"
    whileInView="show"
    className={`bg-${darkMode ? "dark" : "primary"} paddings ${css.wrapper
      } ${darkMode ? css.dark : ""}`}
    viewport={{ once: true, amount: 0.25 }}
    style={{ boxShadow: headerShadow }}
    >
      <div className={`innerWidth ${css.container} flexCenter`}>
        {/* Mostrar el logo en lugar del texto "WONG" */}
        <div className={css.name}>
          <img src={logoImage} alt="Logo" id="logo" onClick={scrollToTop} />
        </div>

       

        <ul
          className={`flexCenter ${css.menu}`}
          ref={menuRef}
          style={getMenuStyles(menuOpened)}
        >
          <li onClick={closeMenu}>
            <a href="#work">Experience</a>
          </li>
          <li onClick={closeMenu}>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li onClick={closeMenu}>
            <a href="#tecnologies">Technologies</a>
          </li>
          <li onClick={closeMenu}>
            <a href="https://drive.google.com/drive/folders/14nI49j1n5rkEMRHUXcmRarVvziEgpYwT">Currículum</a>
          </li>
          <li onClick={closeMenu}>
            <a href="https://wongrm.netlify.app/">Contact</a>
          </li>
          {/* Agregar el botón de WhatsApp */}
          <li className={`flexCenter ${css.phone}`} onClick={openWhatsApp}>
            
            <BiPhoneCall size={"40px"} />
          </li>

          <li onClick={toggleDarkMode} className={`flexCenter ${css.darkModeButton}`}>
            {darkMode ? (
              <FaSun size={33} />
            ) : (
              <FaMoon size={33} />
            )}
          </li>
        </ul>

       
        

        {/* Para pantallas medianas y pequeñas */}
        <div className={css.menuIcon} onClick={toggleMenu}>
          <BiMenuAltRight size={35} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;