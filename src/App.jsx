import CaseStudy from './components/CaseStudy'
import TagEmAllPage from './pages/TagEmAllPage'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './components/ThemeToggle'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import LanguageToggle from './components/LanguageToggle'
import ScrollIndicator from './components/ScrollIndicator'

function App() {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const [visitorType, setVisitorType] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const translations = {
    en: {
      name: "I'm Myriam Leblanc",
      identity: "UX designer-in-training with a deep love for simplicity, beauty, and systems that empower people.",
      visitorType: {
        title: "What brings you here?",
        recruiter: "Recruiter",
        designer: "Designer",
        explorer: "Explorer",
        recruiterResponse: "Here's a glimpse of what I value and create.",
        designerResponse: "Always open to meaningful builds and curious conversations.",
        explorerResponse: "Glad you're here. I hope something sparks your mind or heart."
      },
      question: "What brings you here?",
      buttons: {
        recruiter: "Recruiter",
        designer: "Designer",
        explorer: "Explorer"
      },
      responses: {
        recruiter: "Here's a glimpse of what I value and create.",
        designer: "Always open to meaningful builds and curious conversations.",
        explorer: "Glad you're here. I hope something sparks your mind or heart."
      },
      nav: {
        projects: "Projects",
        about: "About",
        contact: "Contact",
        resume: "Resume"
      },
      projects: {
        title: "Projects",
        tagEmAll: "→ Tag 'Em All · 48h Game Jam Sherbrooke 2025",
        tagEmAllDesc: "Crafted the UI/UX for Tag 'Em All, a fast-paced multiplayer game with a focus on intuitive navigation.",
        igniteHerMind: "→ ignite.HER.MIND · Empowering women through digital curation",
        igniteHerMindDesc: "A digital platform designed to amplify women's voices and stories through thoughtful content curation and community building.",
        uxTriathlon: "→ UX + Triathlon · Tracking calm & chaos in motion",
        uxTriathlonDesc: "An app that helps athletes balance training intensity with recovery, using data visualization to make complex training patterns clear and actionable.",
        cta: "Excited to create meaningful experiences together"
      },
      about: {
        title: "About",
        intro: "I'm Myriam, a first-generation CS student from the Magdalen Islands. I design for clarity, emotion, and human connection — using code, visuals, and rhythm.",
        mission: "UX is where my love for people, design, and problem-solving meet. As someone who comes from a small island, I believe technology should feel welcoming, intuitive, and deeply human."
      },
      contact: {
        title: "Contact",
        message: "I'm always open to meaningful conversations, creative collaborations, or simply connecting with curious minds.",
        button: "Send me an email"
      },
      footer: "Curiosity is my compass. Elegance is my practice. Tech is my tool.",
      resume: {
        title: "Resume",
        role: "UX Designer & Developer",
        email: "myriamleblanc230@gmail.com",
        education: {
          title: "Education",
          degree: "B.Sc. Computer Science – Bishop's University",
          description: "Second-year student crafting intuitive digital experiences. Focus on UX design, web development, and human-centered computing.",
          courses: {
            webDesign: "Interactive Web Design",
            dataStructures: "Data Structures",
            python: "Python",
            ethics: "Computer Ethics",
            marketing: "Digital Marketing"
          }
        },
        skills: {
          title: "Skills",
          figma: {
            name: "Figma",
            description: "– core design tool"
          },
          htmlCss: {
            name: "HTML/CSS",
            description: "– foundational for front-end and understanding structure/layout"
          },
          javascript: {
            name: "JavaScript",
            description: "– essential for interaction and UX logic"
          },
          react: {
            name: "React",
            description: "– great if you've built any interactive projects or plan to"
          },
          tailwind: {
            name: "Tailwind CSS",
            description: "– modern styling, useful if you've used it in projects"
          }
        },
        projects: {
          title: "Projects",
          tagEmAll: {
            title: "Tag 'Em All",
            description: "48h Game Jam Sherbrooke 2025 - Crafted the UI/UX for Tag 'Em All, a fast-paced multiplayer game with a focus on intuitive navigation"
          }
        },
        certifications: {
          title: "Certifications",
          dataViz: {
            title: "Data Visualization",
            provider: "Calcul Quebec",
            description: "Advanced data visualization techniques and best practices"
          },
          uxCert: {
            title: "UX Design Certificate",
            provider: "Google & Coursera",
            description: "Comprehensive UX design principles and methodologies"
          }
        },
        downloadButton: "Download Resume"
      }
    },
    fr: {
      name: "Ici, Myriam Leblanc",
      identity: "Designer UX en formation avec une passion pour la simplicité, la beauté et les systèmes qui autonomisent les gens.",
      visitorType: {
        title: "Qu'est-ce qui vous amène ici?",
        recruiter: "Recruteur",
        designer: "Designer",
        explorer: "Explorateur",
        recruiterResponse: "Voici un aperçu de ce que je valorise et crée.",
        designerResponse: "Toujours ouvert aux collaborations significatives et aux conversations enrichissantes.",
        explorerResponse: "Ravi que vous soyez ici. J'espère que quelque chose captivera votre esprit ou votre cœur."
      },
      question: "Qu'est-ce qui vous amène ici?",
      buttons: {
        recruiter: "Recruteur",
        designer: "Designer",
        explorer: "Explorateur"
      },
      responses: {
        recruiter: "Voici un aperçu de ce que je valorise et crée.",
        designer: "Toujours ouvert aux collaborations significatives et aux conversations enrichissantes.",
        explorer: "Ravi que vous soyez ici. J'espère que quelque chose captivera votre esprit ou votre cœur."
      },
      nav: {
        projects: "Projets",
        about: "À propos",
        contact: "Contact",
        resume: "CV"
      },
      projects: {
        title: "Projets",
        tagEmAll: "→ Tag 'Em All · 48h Game Jam Sherbrooke 2025",
        tagEmAllDesc: "Conception de l'interface UI/UX pour Tag 'Em All, un jeu multijoueur dynamique axé sur une navigation intuitive.",
        igniteHerMind: "→ ignite.HER.MIND · Autonomisation des femmes par la curation numérique",
        igniteHerMindDesc: "Une plateforme numérique conçue pour amplifier les voix et les histoires des femmes à travers une curation de contenu réfléchie et la construction de communauté.",
        uxTriathlon: "→ UX + Triathlon · Suivi du calme & du chaos en mouvement",
        uxTriathlonDesc: "Une application qui aide les athlètes à équilibrer l'intensité de l'entraînement avec la récupération, utilisant la visualisation de données pour rendre les schémas d'entraînement complexes clairs et actionnables.",
        cta: "Enthousiaste à l'idée de créer ensemble des expériences significatives"
      },
      about: {
        title: "À propos",
        intro: "Je suis Myriam, une étudiante en informatique de première génération des Îles-de-la-Madeleine. Je conçois pour la clarté, l'émotion et la connexion humaine — en utilisant le code, les visuels et le rythme.",
        mission: "L'UX est là où se rencontrent mon amour pour les gens, le design et la résolution de problèmes. En tant que personne venant d'une petite île, je crois que la technologie devrait être accueillante, intuitive et profondément humaine."
      },
      contact: {
        title: "Contact",
        message: "Je suis toujours ouverte aux conversations significatives, aux collaborations créatives ou simplement à la connexion avec des esprits curieux.",
        button: "M'envoyer un email"
      },
      footer: "La curiosité est ma boussole. L'élégance est ma pratique. La technologie est mon outil.",
      resume: {
        title: "CV",
        role: "Designer UX & Développeuse",
        email: "myriamleblanc230@gmail.com",
        education: {
          title: "Formation",
          degree: "B.Sc. Informatique – Université Bishop's",
          description: "Étudiante de deuxième année créant des expériences numériques intuitives. Spécialisation en design UX, développement web et informatique centrée sur l'humain.",
          courses: {
            webDesign: "Design Web Interactif",
            dataStructures: "Structures de Données",
            python: "Python",
            ethics: "Éthique Informatique",
            marketing: "Marketing Numérique"
          }
        },
        skills: {
          title: "Compétences",
          figma: {
            name: "Figma",
            description: "– outil principal de design"
          },
          htmlCss: {
            name: "HTML/CSS",
            description: "– fondamental pour le front-end et la compréhension de la structure/mise en page"
          },
          javascript: {
            name: "JavaScript",
            description: "– essentiel pour l'interaction et la logique UX"
          },
          react: {
            name: "React",
            description: "– parfait pour les projets interactifs actuels et futurs"
          },
          tailwind: {
            name: "Tailwind CSS",
            description: "– style moderne, utile dans les projets"
          }
        },
        projects: {
          title: "Projets",
          tagEmAll: {
            title: "Tag 'Em All",
            description: "48h Game Jam Sherbrooke 2025 - Conception de l'interface UI/UX pour Tag 'Em All, un jeu multijoueur dynamique axé sur une navigation intuitive"
          }
        },
        certifications: {
          title: "Certifications",
          dataViz: {
            title: "Visualisation de Données",
            provider: "Calcul Quebec",
            description: "Techniques avancées et meilleures pratiques de visualisation de données"
          },
          uxCert: {
            title: "Certificat en Design UX",
            provider: "Google & Coursera",
            description: "Principes et méthodologies complets du design UX"
          }
        },
        downloadButton: "Télécharger le CV"
      }
    }
  }

  const t = translations[language]

  return (
    <div className="min-h-screen bg-[#FDFBF7] dark:bg-gray-950 text-text-primary dark:text-gray-100 transition-colors duration-300">
      <ThemeToggle />
      <ScrollIndicator />
      <Router>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/tag-em-all" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <TagEmAllPage language={language} />
              </motion.div>
            } />
            <Route path="/" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="min-h-screen"
              >
                {/* Navigation */}
                <nav className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50/80 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900/80 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-700/50">
                  <div className="relative">
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-100/80 via-pink-100/80 to-blue-100/80 backdrop-blur-md animate-gradient-x"></div>
                    {/* Navigation content */}
                    <div className="max-w-screen-md mx-auto px-4">
                      <div className="flex justify-between items-center py-4">
                        {/* Mobile menu button */}
                        <button
                          onClick={toggleMenu}
                          className="md:hidden text-[#1A202C] dark:text-white"
                          aria-label="Toggle menu"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            {isMenuOpen ? (
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            ) : (
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                              />
                            )}
                          </svg>
                        </button>

                        {/* Desktop Navigation */}
                        <ul className="hidden md:flex justify-center space-x-12">
                          <li>
                            <a 
                              href="#projects" 
                              className="text-lg text-[#1A202C] hover:text-purple-600 transition-colors duration-300 relative group"
                              onClick={closeMenu}
                            >
                              {t.nav.projects}
                              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                            </a>
                          </li>
                          <li>
                            <a 
                              href="#about" 
                              className="text-lg text-[#1A202C] hover:text-blue-600 transition-colors duration-300 relative group"
                              onClick={closeMenu}
                            >
                              {t.nav.about}
                              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                            </a>
                          </li>
                          <li>
                            <a 
                              href="#resume" 
                              className="text-lg text-[#1A202C] hover:text-pink-600 transition-colors duration-300 relative group"
                              onClick={closeMenu}
                            >
                              {t.nav.resume}
                              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                            </a>
                          </li>
                          <li>
                            <a 
                              href="#contact" 
                              className="text-lg text-[#1A202C] hover:text-pink-600 transition-colors duration-300 relative group"
                              onClick={closeMenu}
                            >
                              {t.nav.contact}
                              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                            </a>
                          </li>
                        </ul>
                      </div>

                      {/* Mobile Navigation Menu */}
                      <motion.div 
                        className={`md:hidden fixed inset-x-0 top-[60px] bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg`}
                        initial="closed"
                        animate={isMenuOpen ? "open" : "closed"}
                        variants={{
                          open: { 
                            opacity: 1,
                            height: "auto",
                            transition: {
                              type: "spring",
                              stiffness: 300,
                              damping: 30
                            }
                          },
                          closed: { 
                            opacity: 0,
                            height: 0,
                            transition: {
                              type: "spring",
                              stiffness: 300,
                              damping: 30
                            }
                          }
                        }}
                      >
                        <ul className="py-4 px-6 space-y-4">
                          <motion.li
                            variants={{
                              open: { x: 0, opacity: 1 },
                              closed: { x: -20, opacity: 0 }
                            }}
                          >
                            <a 
                              href="#projects" 
                              className="block text-lg text-[#1A202C] dark:text-white hover:text-purple-600 dark:hover:text-purple-300 transition-colors duration-300"
                              onClick={closeMenu}
                            >
                              {t.nav.projects}
                            </a>
                          </motion.li>
                          <motion.li
                            variants={{
                              open: { x: 0, opacity: 1, transition: { delay: 0.1 } },
                              closed: { x: -20, opacity: 0 }
                            }}
                          >
                            <a 
                              href="#about" 
                              className="block text-lg text-[#1A202C] dark:text-white hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-300"
                              onClick={closeMenu}
                            >
                              {t.nav.about}
                            </a>
                          </motion.li>
                          <motion.li
                            variants={{
                              open: { x: 0, opacity: 1, transition: { delay: 0.2 } },
                              closed: { x: -20, opacity: 0 }
                            }}
                          >
                            <a 
                              href="#resume" 
                              className="block text-lg text-[#1A202C] dark:text-white hover:text-pink-600 dark:hover:text-pink-300 transition-colors duration-300"
                              onClick={closeMenu}
                            >
                              {t.nav.resume}
                            </a>
                          </motion.li>
                          <motion.li
                            variants={{
                              open: { x: 0, opacity: 1, transition: { delay: 0.3 } },
                              closed: { x: -20, opacity: 0 }
                            }}
                          >
                            <a 
                              href="#contact" 
                              className="block text-lg text-[#1A202C] dark:text-white hover:text-pink-600 dark:hover:text-pink-300 transition-colors duration-300"
                              onClick={closeMenu}
                            >
                              {t.nav.contact}
                            </a>
                          </motion.li>
                        </ul>
                      </motion.div>
                    </div>
                  </div>
                </nav>

                {/* Hero Section */}
                <section className="min-h-screen flex items-center justify-center px-4 relative">
                  <div className="max-w-4xl mx-auto text-center">
                    <div className="absolute top-4 right-20 z-50">
                      <LanguageToggle 
                        language={language} 
                        onLanguageChange={(newLang) => {
                          setLanguage(newLang);
                          // Prevent scroll
                          if (window.innerWidth < 768) {
                            event.preventDefault();
                            event.stopPropagation();
                          }
                        }}
                      />
                    </div>
                    
                    <motion.h1 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.8,
                        ease: [0.6, -0.05, 0.01, 0.99]
                      }}
                      className="text-4xl md:text-6xl font-light mb-6 text-text-primary dark:text-gray-100 font-petrona pt-20 md:pt-0"
                    >
                      {t.name}
                    </motion.h1>
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.8,
                        delay: 0.2,
                        ease: [0.6, -0.05, 0.01, 0.99]
                      }}
                      className="text-xl md:text-2xl text-text-secondary dark:text-gray-300 mb-8 font-work-sans"
                    >
                      {t.identity}
                    </motion.p>
                    {/* Mouse Scroller */}
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.8,
                        delay: 0.4,
                        ease: [0.6, -0.05, 0.01, 0.99]
                      }}
                      className="flex justify-center mt-8"
                    >
                      <a href="#about" className="group">
                        <svg 
                          className="w-8 h-8 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors duration-300" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <motion.path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={1.5} 
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            animate={{
                              y: [0, 5, 0],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                        </svg>
                      </a>
                    </motion.div>
                  </div>
                </section>

                {/* Visitor Type Section */}
                <section className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
                  <div className="max-w-screen-md mx-auto px-4">
                    <h2 className="text-3xl font-medium mb-8 text-[#1A202C] dark:text-white">{t.visitorType.title}</h2>
                    <div className="space-y-6">
                      <div className="flex flex-wrap gap-4">
                        <button
                          onClick={() => setVisitorType('recruiter')}
                          className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                            visitorType === 'recruiter'
                              ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200'
                              : 'bg-white/90 dark:bg-gray-800/90 text-[#1A202C] dark:text-white hover:text-purple-600 dark:hover:text-purple-300'
                          }`}
                        >
                          {t.visitorType.recruiter}
                        </button>
                        <button
                          onClick={() => setVisitorType('designer')}
                          className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                            visitorType === 'designer'
                              ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                              : 'bg-white/90 dark:bg-gray-800/90 text-[#1A202C] dark:text-white hover:text-blue-600 dark:hover:text-blue-300'
                          }`}
                        >
                          {t.visitorType.designer}
                        </button>
                        <button
                          onClick={() => setVisitorType('explorer')}
                          className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                            visitorType === 'explorer'
                              ? 'bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200'
                              : 'bg-white/90 dark:bg-gray-800/90 text-[#1A202C] dark:text-white hover:text-pink-600 dark:hover:text-pink-300'
                          }`}
                        >
                          {t.visitorType.explorer}
                        </button>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        {visitorType === 'recruiter' && t.visitorType.recruiterResponse}
                        {visitorType === 'designer' && t.visitorType.designerResponse}
                        {visitorType === 'explorer' && t.visitorType.explorerResponse}
                      </p>
                    </div>
                  </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="py-16 sm:py-24">
                  <div className="max-w-screen-md mx-auto px-4">
                    <h2 className="text-2xl sm:text-3xl font-medium mb-6 sm:mb-8 text-[#1A202C] dark:text-white">{t.projects.title}</h2>
                    <div className="space-y-6 sm:space-y-8">
                      <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-green-50 via-teal-50 to-blue-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 p-6 sm:p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-100/20 via-teal-100/20 to-blue-100/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="relative z-10">
                          <Link to="/tag-em-all" className="block">
                            <h3 className="text-lg sm:text-xl font-light text-[#1A202C] dark:text-white mb-2 hover:text-teal-600 dark:hover:text-teal-300 transition-colors duration-300">
                              {t.projects.tagEmAll}
                            </h3>
                          </Link>
                          <p className="text-sm text-gray-600 dark:text-gray-300 max-w-xl mb-4">
                            {t.projects.tagEmAllDesc}
                          </p>
                          <motion.div 
                            className="text-teal-600 dark:text-teal-300"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </motion.div>
                        </div>
                      </div>
                      <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 p-6 sm:p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 via-pink-100/20 to-blue-100/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="relative z-10">
                          <h3 className="text-lg sm:text-xl font-light text-[#1A202C] dark:text-white mb-2">{t.projects.igniteHerMind}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300 max-w-xl mb-4">
                            {t.projects.igniteHerMindDesc}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="inline-flex items-center rounded-full bg-purple-100 dark:bg-purple-900 px-3 py-1 text-sm font-medium text-purple-800 dark:text-purple-200">
                              Coming Soon
                            </span>
                            <motion.div 
                              className="text-purple-600 dark:text-purple-300"
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                      <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-green-50 to-teal-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 p-6 sm:p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-green-100/20 to-teal-100/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="relative z-10">
                          <h3 className="text-lg sm:text-xl font-light text-[#1A202C] dark:text-white mb-2">{t.projects.uxTriathlon}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300 max-w-xl mb-4">
                            {t.projects.uxTriathlonDesc}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900 px-3 py-1 text-sm font-medium text-blue-800 dark:text-blue-200">
                              Coming Soon
                            </span>
                            <motion.div 
                              className="text-blue-600 dark:text-blue-300"
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-center text-gray-600 dark:text-gray-300 italic text-sm mt-8"
                    >
                      {t.projects.cta}
                    </motion.p>
                  </div>
                </section>

                {/* About Section */}
                <section id="about" className="py-24 bg-white/50 dark:bg-gray-900/50">
                  <div className="max-w-screen-md mx-auto px-4">
                    <h2 className="text-3xl font-medium mb-8 text-[#1A202C] dark:text-white">{t.about.title}</h2>
                    <div className="flex flex-col md:flex-row items-start gap-12">
                      <div className="w-full md:w-1/2">
                        <div className="relative group">
                          <img 
                            src="/images/profile-bw.jpg" 
                            alt="Myriam Leblanc - Black and white profile photo" 
                            className="w-full rounded-xl transition-all duration-500 group-hover:opacity-0"
                          />
                          <img 
                            src="/images/profile-color.jpg" 
                            alt="Myriam Leblanc - Color profile photo" 
                            className="w-full rounded-xl absolute top-0 left-0 opacity-0 transition-all duration-500 group-hover:opacity-100"
                          />
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 space-y-6">
                        <p className="text-gray-600 dark:text-gray-300">
                          {t.about.intro}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                          {t.about.mission}
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Resume Section */}
                <section id="resume" className="py-24">
                  <div className="max-w-screen-md mx-auto px-4">
                    <h2 className="text-3xl font-medium mb-8 text-[#1A202C] dark:text-white">{t.resume.title}</h2>
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                        <div>
                          <h3 className="text-2xl font-medium text-[#1A202C] dark:text-white">{t.resume.role}</h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            {t.resume.email}
                          </p>
                        </div>
                        <div className="mt-4 md:mt-0">
                          <a 
                            href="mailto:myriamleblanc230@gmail.com" 
                            className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                          >
                            {t.resume.email}
                          </a>
                        </div>
                      </div>
                      
                      <div className="space-y-8">
                        <div>
                          <h4 className="text-xl font-medium text-[#1A202C] dark:text-white mb-4">{t.resume.education.title}</h4>
                          <div className="space-y-4">
                            <div>
                              <h5 className="font-medium text-[#1A202C] dark:text-white">{t.resume.education.degree}</h5>
                              <p className="text-gray-600 dark:text-gray-300">{t.resume.education.description}</p>
                              <div className="mt-2 flex flex-wrap gap-2">
                                {Object.values(t.resume.education.courses).map((course, index) => (
                                  <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs">
                                    {course}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-xl font-medium text-[#1A202C] dark:text-white mb-4">{t.resume.skills.title}</h4>
                          <div className="flex flex-wrap gap-2 sm:gap-3">
                            {Object.entries(t.resume.skills).filter(([key]) => key !== 'title').map(([skill, { name, description }]) => (
                              <div key={skill} className="group relative">
                                <span className={`px-3 sm:px-4 py-2 ${
                                  skill === 'figma' ? 'bg-violet-100 dark:bg-violet-900/50 text-violet-800 dark:text-violet-200' :
                                  skill === 'htmlCss' ? 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200' :
                                  skill === 'javascript' ? 'bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200' :
                                  skill === 'react' ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200' :
                                  'bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-200'
                                } rounded-full text-sm inline-flex items-center hover:bg-opacity-80 dark:hover:bg-opacity-70 transition-all duration-300`}>
                                  <span className="font-medium whitespace-nowrap">{name}</span>
                                  <span className={`absolute left-0 -bottom-12 w-48 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white dark:bg-gray-800 p-2 rounded-md shadow-lg z-10 ${
                                    skill === 'figma' ? 'text-violet-600 dark:text-violet-300' :
                                    skill === 'htmlCss' ? 'text-emerald-600 dark:text-emerald-300' :
                                    skill === 'javascript' ? 'text-amber-600 dark:text-amber-300' :
                                    skill === 'react' ? 'text-blue-600 dark:text-blue-300' :
                                    'text-cyan-600 dark:text-cyan-300'
                                  }`}>{description}</span>
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-xl font-medium text-[#1A202C] dark:text-white mb-4">{t.resume.projects.title}</h4>
                          <div className="space-y-4">
                            <div>
                              <h5 className="font-medium text-[#1A202C] dark:text-white">{t.resume.projects.tagEmAll.title}</h5>
                              <p className="text-gray-600 dark:text-gray-300">{t.resume.projects.tagEmAll.description}</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-xl font-medium text-[#1A202C] dark:text-white mb-4">{t.resume.certifications.title}</h4>
                          <div className="space-y-4">
                            <div>
                              <h5 className="font-medium text-[#1A202C] dark:text-white">{t.resume.certifications.dataViz.title}</h5>
                              <p className="text-sm text-purple-600 dark:text-purple-400 mb-1">{t.resume.certifications.dataViz.provider}</p>
                              <p className="text-gray-600 dark:text-gray-300">{t.resume.certifications.dataViz.description}</p>
                            </div>
                            <div>
                              <h5 className="font-medium text-[#1A202C] dark:text-white">{t.resume.certifications.uxCert.title}</h5>
                              <p className="text-sm text-purple-600 dark:text-purple-400 mb-1">{t.resume.certifications.uxCert.provider}</p>
                              <p className="text-gray-600 dark:text-gray-300">{t.resume.certifications.uxCert.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                        <a 
                          href="/ML.cv25.pdf" 
                          download="Myriam_Leblanc_CV.pdf"
                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                          {t.resume.downloadButton}
                        </a>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-24">
                  <div className="max-w-screen-md mx-auto px-4">
                    <h2 className="text-3xl font-medium mb-8 text-[#1A202C] dark:text-white">{t.contact.title}</h2>
                    <div className="space-y-6">
                      <p className="text-gray-600 dark:text-gray-300">
                        {t.contact.message}
                      </p>
                      <a 
                        href="mailto:myriamleblanc230@gmail.com" 
                        className="inline-flex items-center px-8 py-4 text-lg font-light text-[#1A202C] dark:text-white bg-transparent border-2 border-[#1A202C] dark:border-white rounded-full hover:bg-[#1A202C] dark:hover:bg-white hover:text-white dark:hover:text-[#1A202C] transition-all duration-300 group"
                      >
                        {t.contact.button}
                        <svg 
                          className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </section>

                {/* Footer */}
                <footer className="py-8 text-center">
                  <div className="container mx-auto px-4">
                    {/* Social Media Icons */}
                    <div className="flex justify-center gap-6 mb-6">
                      <a 
                        href="https://www.linkedin.com/in/myriam-leblanc-854363202" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-[#1A202C] dark:hover:text-white transition-colors duration-300 text-2xl hover:opacity-80"
                        aria-label="LinkedIn"
                      >
                        <FaLinkedin />
                      </a>
                      <a 
                        href="https://github.com/myriamleblanc" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-[#1A202C] dark:hover:text-white transition-colors duration-300 text-2xl hover:opacity-80"
                        aria-label="GitHub"
                      >
                        <FaGithub />
                      </a>
                      <a 
                        href="https://www.instagram.com/myriamleblanc_" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-[#1A202C] dark:hover:text-white transition-colors duration-300 text-2xl hover:opacity-80"
                        aria-label="Instagram"
                      >
                        <FaInstagram />
                      </a>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {t.footer}
                    </p>
                  </div>
                </footer>
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
      </Router>
    </div>
  )
}

export default App
