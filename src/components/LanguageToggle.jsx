import { motion } from 'framer-motion';

const LanguageToggle = ({ language, setLanguage: onLanguageChange }) => {
  const handleClick = (newLang) => {
    onLanguageChange(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <motion.div 
      className="inline-flex bg-white/90 dark:bg-gray-800/90 rounded-full p-1 shadow-lg backdrop-blur-sm"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <button
        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
          language === 'en'
            ? 'bg-terracotta text-white'
            : 'text-text-secondary dark:text-gray-300 hover:text-terracotta dark:hover:text-terracotta'
        }`}
        onClick={() => handleClick('en')}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
          language === 'fr'
            ? 'bg-terracotta text-white'
            : 'text-text-secondary dark:text-gray-300 hover:text-terracotta dark:hover:text-terracotta'
        }`}
        onClick={() => handleClick('fr')}
        aria-label="Switch to French"
      >
        FR
      </button>
    </motion.div>
  );
};

export default LanguageToggle;
