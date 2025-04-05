import { motion } from 'framer-motion';

const LanguageToggle = ({ language, onLanguageChange }) => {
  const handleClick = (e, newLang) => {
    e.preventDefault();
    e.stopPropagation();
    onLanguageChange(newLang);
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
            ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200'
            : 'text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-300'
        }`}
        onClick={(e) => handleClick(e, 'en')}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
          language === 'fr'
            ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200'
            : 'text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-300'
        }`}
        onClick={(e) => handleClick(e, 'fr')}
        aria-label="Switch to French"
      >
        FR
      </button>
    </motion.div>
  );
};

export default LanguageToggle; 