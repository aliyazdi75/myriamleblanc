import { motion } from 'framer-motion';

const LanguageToggle = ({ language, onLanguageChange }) => {
  return (
    <div className="inline-flex items-center bg-gray-100 dark:bg-gray-800 rounded-full p-1">
      <motion.button
        onClick={() => onLanguageChange('en')}
        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
          language === 'en'
            ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
        }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        EN
      </motion.button>
      <motion.button
        onClick={() => onLanguageChange('fr')}
        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
          language === 'fr'
            ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
        }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        FR
      </motion.button>
    </div>
  );
};

export default LanguageToggle; 