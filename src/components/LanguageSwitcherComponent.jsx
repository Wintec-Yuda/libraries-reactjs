import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

// Initialize i18n configuration
import '../lib/language/i18next.js'; // Import the i18n configuration file (we'll create it below)

// LanguageSwitcherComponent that contains translation setup and language switch functionality
const LanguageSwitcherComponent = () => {
  const { t, i18n } = useTranslation(); // `t` is the translation function

  // Function to switch languages
  const switchLanguage = (lng) => {
    i18n.changeLanguage(lng); // Change language dynamically
  };

  useEffect(() => {
    // You can set the default language here if needed
    i18n.changeLanguage('en');
  }, []);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">{t('welcome')}</h1>
      <p>{t('description')}</p>

      <div>
        <button
          onClick={() => switchLanguage('en')}
          className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
        >
          English
        </button>
        <button
          onClick={() => switchLanguage('es')}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Español
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcherComponent;
