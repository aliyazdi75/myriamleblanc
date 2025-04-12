import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';

const Navigation = ({ language, setLanguage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const translations = {
    en: {
      nav: {
        projects: "Projects",
        about: "About",
        contact: "Contact",
        resume: "Resume"
      }
    },
    fr: {
      nav: {
        projects: "Projets",
        about: "À propos",
        contact: "Contact",
        resume: "CV"
      }
    }
  };

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // resume button
  const handleResumeClick = (e) => {
    e.preventDefault();
    window.open('/ML.cv25.pdf', '_blank');
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-white/95 shadow-sm backdrop-blur-sm dark:bg-gray-900/95' : 'py-5 bg-transparent'}`}>
        <div className="container flex items-center justify-between">
          <a href="#" className="text-2xl font-petrona font-medium text-terracotta">ML.</a>
          
          {/* Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#projects" className="nav-link">{t.nav.projects}</a>
            <a href="#about" className="nav-link">{t.nav.about}</a>
            <a href="#contact" className="nav-link">{t.nav.contact}</a>
            <button 
              onClick={handleResumeClick} 
              className="nav-link"
            >
              {t.nav.resume}
            </button>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <LanguageToggle language={language} setLanguage={setLanguage} />
            <ThemeToggle />
          </div>
          
          {/* Mobile */}
          <button 
            className="md:hidden text-text-primary p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col items-end space-y-1.5">
              <motion.span 
                className={`block h-0.5 bg-terracotta transition-all duration-300 ${isMenuOpen ? 'w-6 -rotate-45 translate-y-2' : 'w-6'}`}
              ></motion.span>
              <motion.span 
                className={`block h-0.5 bg-terracotta transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-4'}`}
              ></motion.span>
              <motion.span 
                className={`block h-0.5 bg-terracotta transition-all duration-300 ${isMenuOpen ? 'w-6 rotate-45 -translate-y-2' : 'w-5'}`}
              ></motion.span>
            </div>
          </button>
        </div>
      </header>
      
      {/* Mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-40 md:hidden dark:bg-gray-900"
          >
            <div className="container h-full flex flex-col pt-24 pb-8">
              <nav className="flex flex-col space-y-6 text-center mb-auto">
                <a 
                  href="#projects" 
                  className="text-2xl font-petrona text-text-primary hover:text-terracotta transition-colors dark:text-white dark:hover:text-terracotta"
                  onClick={closeMenu}
                >
                  {t.nav.projects}
                </a>
                <a 
                  href="#about" 
                  className="text-2xl font-petrona text-text-primary hover:text-terracotta transition-colors dark:text-white dark:hover:text-terracotta"
                  onClick={closeMenu}
                >
                  {t.nav.about}
                </a>
                <a 
                  href="#contact" 
                  className="text-2xl font-petrona text-text-primary hover:text-terracotta transition-colors dark:text-white dark:hover:text-terracotta"
                  onClick={closeMenu}
                >
                  {t.nav.contact}
                </a>
                <button 
                  onClick={(e) => {
                    handleResumeClick(e);
                    closeMenu();
                  }} 
                  className="text-2xl font-petrona text-text-primary hover:text-terracotta transition-colors dark:text-white dark:hover:text-terracotta"
                >
                  {t.nav.resume}
                </button>
              </nav>
              
              <div className="flex justify-center space-x-6 mt-8">
                <LanguageToggle language={language} setLanguage={setLanguage} />
                <ThemeToggle />
              </div>
              
              <div className="mt-auto">
                <div className="w-20 h-1 bg-terracotta mx-auto mb-4"></div>
                <p className="text-center text-sm text-text-secondary dark:text-gray-400">
                  &copy; {new Date().getFullYear()} Myriam Leblanc
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
