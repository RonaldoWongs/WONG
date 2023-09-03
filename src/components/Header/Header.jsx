import React, { useEffect, useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiPhoneCall, BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import logoImage from '../../assets/letra-w.png'

const Header = () => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();

  // Para manejar clics fuera de la barra lateral en dispositivos móviles
  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  const toggleMenu = () => {
    setMenuOpened((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpened(false);
  };

  const openWhatsApp = () => {
    // Cerrar el menú cuando se abre WhatsApp
    closeMenu();
    window.open("https://wa.me/5215611355341", "_blank");
  };

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className={`bg-primary paddings ${css.wrapper}`}
      viewport={{ once: true, amount: 0.25 }}
      style={{ boxShadow: headerShadow }}
    >
      <div className={`innerWidth ${css.container} flexCenter`}>
        {/* Mostrar el logo en lugar del texto "WONG" */}
        <div className={css.name}>
          <img src={logoImage} alt="Logo" />
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
          {/* Agregar el botón de WhatsApp */}
          <li className={`flexCenter ${css.phone}`} onClick={openWhatsApp}>
            <p>+52 1 5611355341</p>
            <BiPhoneCall size={"40px"} />
          </li>
        </ul>

        {/* Para pantallas medianas y pequeñas */}
        <div className={css.menuIcon} onClick={toggleMenu}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
