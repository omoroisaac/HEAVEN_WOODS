// context/LanguageContext.js
import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  
  const translations = {
    en: {
      welcome: "Welcome to Heaven Woods",
      bookNow: "Book Now",
      // Add more translations
    },
    sw: {
      welcome: "Karibu Heaven Woods",
      bookNow: "Tuma Omukono",
      // Swahili translations
    },
    ach: {
      welcome: "Apot i Heaven Woods",
      bookNow: "Cwalo Mada",
      // Acholi translations
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);