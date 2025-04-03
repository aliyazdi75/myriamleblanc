import CaseStudy from './components/CaseStudy'
import TagEmAllPage from './pages/TagEmAllPage'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './components/ThemeToggle'

function App() {
  const [language, setLanguage] = useState('en')
  const [visitorType, setVisitorType] = useState(null)

  useEffect(() => {
    const savedLang = localStorage.getItem('language')
    if (savedLang) {
      setLanguage(savedLang)
    }
  }, [])

  const translations = {
    en: {
      name: "I'm Myriam Leblanc",
      identity: "UX designer-in-training with a deep love for simplicity, beauty, and systems that empower people.",
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
        tagEmAll: "→ Tag 'Em All · Visual onboarding in 48h",
        tagEmAllDesc: "A playful comic strip that guides users through the power of tagging, making complex concepts feel intuitive and engaging.",
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
      footer: "Curiosity is my compass. Elegance is my practice. Tech is my tool."
    },
    fr: {
      name: "Moi, c'est Myriam",
      identity: "Designer UX en formation avec une passion pour la simplicité, la beauté et les systèmes qui autonomisent les gens.",
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
        tagEmAll: "→ Tag 'Em All · Onboarding visuel en 48h",
        tagEmAllDesc: "Une bande dessinée ludique qui guide les utilisateurs à travers la puissance du tagging, rendant les concepts complexes intuitifs et engageants.",
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
      footer: "La curiosité est ma boussole. L'élégance est ma pratique. La technologie est mon outil."
    }
  }

  const t = translations[language]

  return (
    <div className="min-h-screen bg-[#FDFBF7] dark:bg-gray-950 text-text-primary dark:text-gray-100 transition-colors duration-300">
      <ThemeToggle />
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
                        <ul className="flex justify-center space-x-12">
                          <li>
                            <a 
                              href="#projects" 
                              className="text-lg text-[#1A202C] hover:text-purple-600 transition-colors duration-300 relative group"
                            >
                              {t.nav.projects}
                              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                            </a>
                          </li>
                          <li>
                            <a 
                              href="#about" 
                              className="text-lg text-[#1A202C] hover:text-blue-600 transition-colors duration-300 relative group"
                            >
                              {t.nav.about}
                              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                            </a>
                          </li>
                          <li>
                            <a 
                              href="#resume" 
                              className="text-lg text-[#1A202C] hover:text-pink-600 transition-colors duration-300 relative group"
                            >
                              {t.nav.resume}
                              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                            </a>
                          </li>
                          <li>
                            <a 
                              href="#contact" 
                              className="text-lg text-[#1A202C] hover:text-pink-600 transition-colors duration-300 relative group"
                            >
                              {t.nav.contact}
                              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </nav>

                {/* Hero Section */}
                <section className="min-h-screen flex items-center justify-center px-4">
                  <div className="max-w-4xl mx-auto text-center">
                    <motion.h1 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-4xl md:text-6xl font-light mb-6 text-text-primary dark:text-gray-100"
                    >
                      {t.name}
                    </motion.h1>
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="text-xl md:text-2xl text-text-secondary dark:text-gray-300 mb-8"
                    >
                      {t.identity}
                    </motion.p>
                    {/* Decorative Arrow */}
                    <div className="flex justify-center mt-8">
                      <svg 
                        className="w-8 h-8 text-gray-400 animate-bounce" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={1.5} 
                          d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                        />
                      </svg>
                    </div>
                  </div>
                </section>

                {/* Visitor Type Section */}
                <div className="relative mt-10">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-gradient-to-r from-pink-100/90 via-purple-100/90 to-blue-100/90 dark:from-gray-800/90 dark:via-gray-700/90 dark:to-gray-800/90 backdrop-blur-lg animate-gradient-x rounded-3xl max-w-2xl mx-auto"
                  />
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative space-y-8 py-12 px-8 md:px-12 max-w-2xl mx-auto"
                  >
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-xl md:text-2xl text-white text-center font-light tracking-wide mb-8"
                    >
                      {t.question}
                    </motion.p>
                    <div className="flex justify-center gap-4 flex-wrap">
                      <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setVisitorType('recruiter')}
                        className={`relative group px-6 py-2 rounded-full transition-all duration-300 ${
                          visitorType === 'recruiter' 
                            ? 'text-purple-300 bg-white/90 shadow-lg' 
                            : 'text-white hover:text-purple-300 hover:bg-white/70'
                        }`}
                      >
                        <span className="relative z-10 text-base">{t.buttons.recruiter}</span>
                        <motion.span 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: visitorType === 'recruiter' ? 1 : 0 }}
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </motion.button>
                      <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setVisitorType('designer')}
                        className={`relative group px-6 py-2 rounded-full transition-all duration-300 ${
                          visitorType === 'designer' 
                            ? 'text-blue-300 bg-white/90 shadow-lg' 
                            : 'text-white hover:text-blue-300 hover:bg-white/70'
                        }`}
                      >
                        <span className="relative z-10 text-base">{t.buttons.designer}</span>
                        <motion.span 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: visitorType === 'designer' ? 1 : 0 }}
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </motion.button>
                      <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setVisitorType('explorer')}
                        className={`relative group px-6 py-2 rounded-full transition-all duration-300 ${
                          visitorType === 'explorer' 
                            ? 'text-pink-300 bg-white/90 shadow-lg' 
                            : 'text-white hover:text-pink-300 hover:bg-white/70'
                        }`}
                      >
                        <span className="relative z-10 text-base">{t.buttons.explorer}</span>
                        <motion.span 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: visitorType === 'explorer' ? 1 : 0 }}
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-100 to-blue-100 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </motion.button>
                    </div>
                    <AnimatePresence mode="wait">
                      {visitorType && (
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.3 }}
                          className="text-base text-white italic text-center mt-4"
                        >
                          {t.responses[visitorType]}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>

                {/* Projects Section */}
                <section id="projects" className="py-24">
                  <div className="max-w-screen-md mx-auto px-4">
                    <h2 className="text-3xl font-medium mb-8 text-white dark:text-gray-100">{t.projects.title}</h2>
                    <div className="space-y-8">
                      <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-50 via-teal-50 to-blue-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-100/20 via-teal-100/20 to-blue-100/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="relative z-10">
                          <Link to="/tag-em-all" className="block">
                            <h3 className="text-xl font-light text-white mb-2 hover:text-teal-300 transition-colors duration-300">
                              {t.projects.tagEmAll}
                            </h3>
                          </Link>
                          <p className="text-sm text-gray-200 dark:text-gray-300 max-w-xl mb-4">
                            {t.projects.tagEmAllDesc}
                          </p>
                          <motion.div 
                            className="text-teal-300"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </motion.div>
                        </div>
                      </div>
                      <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 via-pink-100/20 to-blue-100/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="relative z-10">
                          <h3 className="text-xl font-light text-white mb-2">{t.projects.igniteHerMind}</h3>
                          <p className="text-sm text-gray-200 dark:text-gray-300 max-w-xl mb-4">
                            {t.projects.igniteHerMindDesc}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="inline-flex items-center rounded-full bg-purple-100 dark:bg-purple-900 px-3 py-1 text-sm font-medium text-purple-800 dark:text-purple-200">
                              Coming Soon
                            </span>
                            <motion.div 
                              className="text-purple-300 dark:text-purple-400"
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                      <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-green-50 to-teal-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-green-100/20 to-teal-100/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="relative z-10">
                          <h3 className="text-xl font-light text-white mb-2">{t.projects.uxTriathlon}</h3>
                          <p className="text-sm text-gray-200 dark:text-gray-300 max-w-xl mb-4">
                            {t.projects.uxTriathlonDesc}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900 px-3 py-1 text-sm font-medium text-blue-800 dark:text-blue-200">
                              Coming Soon
                            </span>
                            <motion.div 
                              className="text-blue-300 dark:text-blue-400"
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                      className="text-center text-gray-200 dark:text-gray-300 italic text-sm mt-8"
                    >
                      {t.projects.cta}
                    </motion.p>
                  </div>
                </section>

                {/* About Section */}
                <section id="about" className="py-24 bg-white/50 dark:bg-gray-900/50">
                  <div className="max-w-screen-md mx-auto px-4">
                    <h2 className="text-3xl font-medium mb-8 text-white dark:text-gray-100">{t.about.title}</h2>
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
                        <p className="text-gray-200 dark:text-gray-300">
                          {t.about.intro}
                        </p>
                        <p className="text-gray-200 dark:text-gray-300">
                          {t.about.mission}
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Resume Section */}
                <section id="resume" className="py-24">
                  <div className="max-w-screen-md mx-auto px-4">
                    <h2 className="text-3xl font-medium mb-8 text-white dark:text-gray-100">{t.nav.resume}</h2>
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                        <div>
                          <h3 className="text-2xl font-medium text-[#1A202C] dark:text-white">Myriam Leblanc</h3>
                          <p className="text-gray-600 dark:text-gray-300">UX Designer & Developer</p>
                        </div>
                        <div className="mt-4 md:mt-0">
                          <a 
                            href="mailto:myriamleblanc230@gmail.com" 
                            className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                          >
                            myriamleblanc230@gmail.com
                          </a>
                        </div>
                      </div>
                      
                      <div className="space-y-8">
                        <div>
                          <h4 className="text-xl font-medium text-[#1A202C] dark:text-white mb-4">Education</h4>
                          <div className="space-y-4">
                            <div>
                              <h5 className="font-medium text-[#1A202C] dark:text-white">Computer Science</h5>
                              <p className="text-gray-600 dark:text-gray-300">First-generation CS student</p>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-xl font-medium text-[#1A202C] dark:text-white mb-4">Skills</h4>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">UX Design</span>
                            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">React</span>
                            <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 rounded-full text-sm">JavaScript</span>
                            <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">HTML/CSS</span>
                            <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full text-sm">Tailwind CSS</span>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-xl font-medium text-[#1A202C] dark:text-white mb-4">Projects</h4>
                          <div className="space-y-4">
                            <div>
                              <h5 className="font-medium text-[#1A202C] dark:text-white">Tag 'Em All</h5>
                              <p className="text-gray-600 dark:text-gray-300">Visual onboarding in 48h - A playful comic strip that guides users through the power of tagging</p>
                            </div>
                            <div>
                              <h5 className="font-medium text-[#1A202C] dark:text-white">ignite.HER.MIND</h5>
                              <p className="text-gray-600 dark:text-gray-300">Empowering women through digital curation - Coming Soon</p>
                            </div>
                            <div>
                              <h5 className="font-medium text-[#1A202C] dark:text-white">UX + Triathlon</h5>
                              <p className="text-gray-600 dark:text-gray-300">Tracking calm & chaos in motion - Coming Soon</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                        <a 
                          href="/resume.pdf" 
                          download
                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                          Download Resume
                        </a>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-24">
                  <div className="max-w-screen-md mx-auto px-4">
                    <h2 className="text-3xl font-medium mb-8 text-white dark:text-gray-100">{t.contact.title}</h2>
                    <div className="space-y-6">
                      <p className="text-gray-200 dark:text-gray-300">
                        {t.contact.message}
                      </p>
                      <a 
                        href="mailto:myriamleblanc230@gmail.com" 
                        className="inline-flex items-center px-8 py-4 text-lg font-light text-white bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-[#1A202C] transition-all duration-300 group"
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
                <footer className="py-8 text-center text-sm text-gray-200 dark:text-gray-300">
                  <div className="container text-center">
                    <p className="text-sm text-gray-200 dark:text-gray-300">
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
