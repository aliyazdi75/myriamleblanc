const Footer = ({ language }) => {
  const translations = {
    en: {
      footer: "Curiosity is my compass. Elegance is my practice. Tech is my tool.",
      rights: "All rights reserved"
    },
    fr: {
      footer: "La curiosité est ma boussole. L'élégance est ma pratique. La technologie est mon outil.",
      rights: "Tous droits réservés"
    }
  };

  const t = translations[language];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-warm-cream dark:bg-gray-900">
      <div className="container">
        <div className="text-center mb-8">
          <p className="text-lg font-petrona italic text-text-secondary dark:text-gray-300 mb-6">{t.footer}</p>
          <div className="w-20 h-0.5 bg-terracotta mx-auto"></div>
        </div>
        
        <div className="flex justify-center">
          <div>
            <p className="text-sm text-text-secondary dark:text-gray-400">
              &copy; {currentYear} Myriam Leblanc. {t.rights}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
