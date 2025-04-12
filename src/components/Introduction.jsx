import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Introduction = ({ language }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const translations = {
    en: {
      name: "I'm Myriam Leblanc",
      identity: "UX designer-in-training with a deep love for simplicity, beauty, and systems that empower people.",
      cta: "View my work"
    },
    fr: {
      name: "Ici, Myriam Leblanc",
      identity: "Designer UX en formation avec une passion pour la simplicité, la beauté et les systèmes qui autonomisent les gens.",
      cta: "Voir mon travail"
    }
  };

  const t = translations[language];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden dark:bg-gray-900">
      <div className="absolute inset-0 subtle-pattern opacity-30 dark:opacity-10"></div>

      {/* simple and beautiful background animated bubbles */}
      <motion.div
        className="absolute top-20 right-20 w-20 h-20 rounded-full bg-soft-peach opacity-50 dark:bg-terracotta dark:opacity-20"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 left-10 w-16 h-16 rounded-full bg-sage-green opacity-30 dark:opacity-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div
        className="absolute top-40 left-20 w-12 h-12 rounded-full bg-dusty-rose opacity-40 dark:opacity-20"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.h1
            className="heading-1 mb-6 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="gradient-text">{t.name}</span>
          </motion.h1>

          <motion.p
            className="body-text mb-10 text-xl dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {t.identity}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a href="#projects" className="btn btn-primary dark:bg-terracotta dark:text-white dark:hover:bg-opacity-80">
              {t.cta}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Introduction;
