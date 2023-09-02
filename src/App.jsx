import React, { useState, useEffect } from 'react';
import Loader from './components/Loader'
import Experties from './components/Experties/Experties';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Portfolio from './components/Portfolio/Portfolio';
import Tecnologies from './components/Tecnologies/Tecnologies';
import Work from './components/Work/Work';
import css from './styles/App.module.scss';
import './App.css'

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula un tiempo de carga, por ejemplo, 2 segundos
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className={`bg-primary ${css.container}`}>
      {loading ? (
        // Muestra el loader mientras loading sea true
        <Loader />
      ) : (
        // Muestra el contenido cuando loading sea false
        <>
          <Header />
          <Hero />
          <Experties />
          <Work />
          <Portfolio />
          <Tecnologies />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
