import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          'Hello, World!': 'Hello, World!',
          // Agrega más traducciones en inglés
        },
      },
      es: {
        translation: {
          'Hello, World!': '¡Hola, Mundo!',
          // Agrega más traducciones en español
        },
      },
      // Agrega más idiomas y traducciones según tus necesidades
    },
    lng: 'en', // Idioma predeterminado
    fallbackLng: 'en', // Idioma de respaldo
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
