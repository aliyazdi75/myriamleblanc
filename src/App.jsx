import CaseStudy from './components/CaseStudy'
import TagEmAllPage from './pages/TagEmAllPage'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

function App() {
  const [language, setLanguage] = useState('en')
  const [visitorType, setVisitorType] = useState(null)

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
        contact: "Contact"
      },
      projects: {
        title: "Projects",
        tagEmAll: "→ Tag 'Em All · Visual onboarding in 48h",
        tagEmAllDesc: "A playful comic strip that guides users through the power of tagging, making complex concepts feel intuitive and engaging.",
        igniteHerMind: "→ ignite.HER.MIND · Empowering women through digital curation",
        igniteHerMindDesc: "A digital platform designed to amplify women's voices and stories through thoughtful content curation and community building.",
        uxTriathlon: "→ UX + Triathlon · Tracking calm & chaos in motion",
        uxTriathlonDesc: "An app that helps athletes balance training intensity with recovery, using data visualization to make complex training patterns clear and actionable."
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
        contact: "Contact"
      },
      projects: {
        title: "Projets",
        tagEmAll: "→ Tag 'Em All · Onboarding visuel en 48h",
        tagEmAllDesc: "Une bande dessinée ludique qui guide les utilisateurs à travers la puissance du tagging, rendant les concepts complexes intuitifs et engageants.",
        igniteHerMind: "→ ignite.HER.MIND · Autonomisation des femmes par la curation numérique",
        igniteHerMindDesc: "Une plateforme numérique conçue pour amplifier les voix et les histoires des femmes à travers une curation de contenu réfléchie et la construction de communauté.",
        uxTriathlon: "→ UX + Triathlon · Suivi du calme & du chaos en mouvement",
        uxTriathlonDesc: "Une application qui aide les athlètes à équilibrer l'intensité de l'entraînement avec la récupération, utilisant la visualisation de données pour rendre les schémas d'entraînement complexes clairs et actionnables."
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
              <nav className="fixed top-0 left-0 right-0 z-50">
                <div className="relative">
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-100/80 via-purple-100/80 to-blue-100/80 backdrop-blur-md animate-gradient-x"></div>
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
              <section className="min-h-screen flex items-center">
                <div className="w-full max-w-screen-lg mx-auto px-6 pt-40 pb-24 text-center space-y-10">
                  {/* Language Switcher */}
                  <div className="flex justify-center items-center space-x-4 mb-8">
                    <button
                      onClick={() => setLanguage('en')}
                      className={`px-6 py-2 rounded-full text-base font-medium transition-all duration-300 ${
                        language === 'en'
                          ? 'bg-white/90 text-purple-600 shadow-md'
                          : 'text-gray-500 hover:text-purple-600 hover:bg-white/70'
                      }`}
                      aria-label="Switch to English"
                    >
                      EN
                    </button>
                    <button
                      onClick={() => setLanguage('fr')}
                      className={`px-6 py-2 rounded-full text-base font-medium transition-all duration-300 ${
                        language === 'fr'
                          ? 'bg-white/90 text-purple-600 shadow-md'
                          : 'text-gray-500 hover:text-purple-600 hover:bg-white/70'
                      }`}
                      aria-label="Switch to French"
                    >
                      FR
                    </button>
                  </div>

                  {/* Name */}
                  <h1 className="text-6xl md:text-7xl font-light tracking-tight leading-[1.1]">
                    {t.name}
                  </h1>

                  {/* Identity Statement */}
                  <p className="text-2xl md:text-3xl text-gray-500 max-w-2xl mx-auto leading-snug mt-6">
                    {t.identity}
                  </p>

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

                  {/* Visitor Type Section */}
                  <div className="relative mt-10">
                    {/* Animated gradient background */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 bg-gradient-to-r from-pink-100/90 via-purple-100/90 to-blue-100/90 backdrop-blur-lg animate-gradient-x rounded-3xl max-w-2xl mx-auto"
                    />
                    {/* Content container */}
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
                        className="text-xl md:text-2xl text-gray-700 text-center font-light tracking-wide mb-8"
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
                              ? 'text-purple-600 bg-white/90 shadow-lg' 
                              : 'text-gray-500 hover:text-purple-600 hover:bg-white/70'
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
                              ? 'text-blue-600 bg-white/90 shadow-lg' 
                              : 'text-gray-500 hover:text-blue-600 hover:bg-white/70'
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
                              ? 'text-pink-600 bg-white/90 shadow-lg' 
                              : 'text-gray-500 hover:text-pink-600 hover:bg-white/70'
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
                            className="text-base text-gray-500 italic text-center mt-4"
                          >
                            {t.responses[visitorType]}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                </div>
              </section>

              {/* Projects Section */}
              <section id="projects" className="py-24">
                <div className="max-w-screen-md mx-auto px-4">
                  <h2 className="text-3xl font-medium mb-8">{t.projects.title}</h2>
                  <div className="space-y-8">
                    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-50 via-teal-50 to-blue-50 p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-100/20 via-teal-100/20 to-blue-100/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="relative z-10">
                        <Link to="/tag-em-all" className="block">
                          <h3 className="text-xl font-light text-[#1A202C] mb-2 hover:text-teal-600 transition-colors duration-300">
                            {t.projects.tagEmAll}
                          </h3>
                        </Link>
                        <p className="text-sm text-gray-500 max-w-xl mb-4">
                          {t.projects.tagEmAllDesc}
                        </p>
                        <motion.div 
                          className="text-teal-600"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.div>
                      </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 via-pink-100/20 to-blue-100/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="relative z-10">
                        <h3 className="text-xl font-light text-[#1A202C] mb-2">{t.projects.igniteHerMind}</h3>
                        <p className="text-sm text-gray-500 max-w-xl mb-4">
                          {t.projects.igniteHerMindDesc}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800">
                            Coming Soon
                          </span>
                          <motion.div 
                            className="text-purple-600"
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
                    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-green-50 to-teal-50 p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-green-100/20 to-teal-100/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="relative z-10">
                        <h3 className="text-xl font-light text-[#1A202C] mb-2">{t.projects.uxTriathlon}</h3>
                        <p className="text-sm text-gray-500 max-w-xl mb-4">
                          {t.projects.uxTriathlonDesc}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                            Coming Soon
                          </span>
                          <motion.div 
                            className="text-blue-600"
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
                </div>
              </section>

              {/* About Section */}
              <section id="about" className="py-24">
                <div className="max-w-screen-md mx-auto px-4">
                  <h2 className="text-3xl font-medium mb-8">{t.about.title}</h2>
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
                      <p className="body-text">
                        {t.about.intro}
                      </p>
                      <p className="body-text">
                        {t.about.mission}
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact Section */}
              <section id="contact" className="py-24">
                <div className="max-w-screen-md mx-auto px-4">
                  <h2 className="text-3xl font-medium mb-8">{t.contact.title}</h2>
                  <div className="space-y-6">
                    <p className="body-text">
                      {t.contact.message}
                    </p>
                    <a 
                      href="mailto:myriamleblanc230@gmail.com" 
                      className="inline-flex items-center px-8 py-4 text-lg font-light text-[#1A202C] bg-transparent border-2 border-[#1A202C] rounded-full hover:bg-[#1A202C] hover:text-white transition-all duration-300 group"
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
              <footer className="py-16">
                <div className="container text-center">
                  <p className="text-sm text-gray-400">
                    {t.footer}
                  </p>
                </div>
              </footer>
            </motion.div>
          } />
        </Routes>
      </AnimatePresence>
    </Router>
  )
}

export default App
