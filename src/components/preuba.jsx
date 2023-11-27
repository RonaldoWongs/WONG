import React, { useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiPhoneCall, BiMenuAltRight } from "react-icons/bi";
import { FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";
import { headerVariants } from "../../utils/motion";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import logoImage from "../../assets/letra-w.png";

const Header = ({ darkMode, toggleDarkMode }) => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const [socialMenuOpened, setSocialMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();

  useOutsideAlerter({
    menuRef,
    setMenuOpened,
    setSocialMenuOpened,
  });

  const toggleMenu = () => {
    setMenuOpened((prev) => !prev);
  };

  const toggleSocialMenu = () => {
    setSocialMenuOpened((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpened(false);
    setSocialMenuOpened(false);
  };

  const openWhatsApp = () => {
    closeMenu();
    window.open("https://wa.me/5215611355341", "_blank");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
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
        <div className={css.name}>
          <img
            src={logoImage}
            alt="Logo"
            id="logo"
            onClick={scrollToTop}
          />
        </div>

        

        <ul
          className={`flexCenter ${css.menu}`}
          ref={menuRef}
          
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
            <a href="https://drive.google.com/drive/folders/14nI49j1n5rkEMRHUXcmRarVvziEgpYwT">
              Currículum
            </a>
          </li>
          <li onClick={closeMenu}>
            <a href="https://wongrm.netlify.app/">Contact</a>
          </li>
          <li className={`flexCenter ${css.phone}`} onClick={openWhatsApp}>
            <BiPhoneCall size={"40px"} />
          </li>
          <li onClick={toggleDarkMode} className={`flexCenter ${css.darkModeButton}`}>
            {darkMode ? (
              <FaSun size={30} />
            ) : (
              <FaMoon size={30} />
            )}
          </li>
        </ul>

        

        <div className={css.menuIcon} onClick={toggleMenu}>
          <BiMenuAltRight size={35} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
