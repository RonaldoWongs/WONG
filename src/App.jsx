// App.js

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'; // Importa el hook de traducción
import Loader from './components/Loader';
import Experties from './components/Experties/Experties';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Portfolio from './components/Portfolio/Portfolio';
import Tecnologies from './components/Tecnologies/Tecnologies';
import Work from './components/Work/Work';
import css from './styles/App.module.scss';
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false); // Estado del modo oscuro
  const { t, i18n } = useTranslation(); // Hook de traducción

  useEffect(() => {
    // Simula un tiempo de carga, por ejemplo, 2 segundos
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  // Función para cambiar el idioma
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={`bg-${darkMode ? 'dark' : 'primary'} ${css.container}`}>
      {loading ? (
        // Muestra el loader mientras loading sea true
        <Loader />
      ) : (
        // Muestra el contenido cuando loading sea false
        <>
          <Header
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            changeLanguage={changeLanguage} // Agrega la función de cambio de idioma
          />
          <Hero darkMode={darkMode} />
          <Experties darkMode={darkMode} />
          <Work darkMode={darkMode} />
          <Portfolio darkMode={darkMode} />
          <Tecnologies darkMode={darkMode} />
          <Footer darkMode={darkMode} />
        </>
      )}
    </div>
  );
};

export default App;
