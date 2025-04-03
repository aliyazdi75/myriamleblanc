import CaseStudy from './components/CaseStudy'
import TagEmAllCase from './components/TagEmAllCase'
import { useState } from 'react'

function App() {
  const [language, setLanguage] = useState('en')

  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      {/* Header */}
      <header className="min-h-[90vh] flex items-center justify-center py-32 border-b border-gray-200">
        <div className="container text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-medium text-gray-900 mb-8 leading-tight">
            Myriam Leblanc
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 italic max-w-2xl mx-auto leading-relaxed">
            UX Designer in the making — blending tech, human connection & aesthetics.
          </p>
        </div>
      </header>

      {/* Why UX Section */}
      <section className="py-32 border-b border-gray-200">
        <div className="container max-w-2xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-12">Why UX?</h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            UX is where my love for people, design, and problem-solving meet. As someone who comes from a small island, 
            I believe technology should feel welcoming, intuitive, and deeply human.
          </p>
        </div>
      </section>

      {/* Navigation */}
      <nav className="py-8 border-b border-gray-200 sticky top-0 bg-[#F5F5F0]/90 backdrop-blur-sm z-10">
        <div className="container">
          <ul className="flex justify-center space-x-12">
            <li><a href="#work" className="nav-link text-lg">Work</a></li>
            <li><a href="#about" className="nav-link text-lg">About</a></li>
            <li><a href="#contact" className="nav-link text-lg">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Case Studies Section */}
      <section className="py-32">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-8 text-center">UX Case Studies</h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-16 text-center max-w-2xl mx-auto">
            Here's a closer look at how I approach design — through playful curiosity, research, and intention.
          </p>
          <div className="space-y-12">
            <TagEmAllCase />
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="aspect-video bg-gray-100 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-gray-400 text-lg">Coming Soon</span>
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Digital Accessibility Research</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                A comprehensive study exploring how we can make digital experiences more inclusive and accessible for everyone.
              </p>
              <a href="#" className="inline-flex items-center text-gray-900 hover:text-gray-600 transition-colors duration-200">
                View Case Study
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-32 bg-white">
        <div className="container">
          <h2 className="section-title text-3xl md:text-4xl text-center mb-16">Selected Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <CaseStudy
              title="UX Research Project"
              description="A comprehensive user research study exploring digital accessibility in education. This project involved extensive user interviews, usability testing, and the development of inclusive design guidelines."
              link="#"
            />
            <CaseStudy
              title="Mobile App Design"
              description="Designing an intuitive interface for a sustainable shopping companion. This project focused on creating a seamless user experience while promoting environmentally conscious consumer choices."
              link="#"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900">
              {language === 'en' ? 'About Me' : 'À propos de moi'}
            </h2>
            <div className="flex space-x-4">
              <button
                onClick={() => setLanguage('en')}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                  language === 'en'
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('fr')}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                  language === 'fr'
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                aria-label="Passer au français"
              >
                FR
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-1/2 relative group">
              <img 
                src="/images/profile-bw.jpg" 
                alt="Myriam Leblanc - Black and White Portrait" 
                className="w-full h-auto transition-opacity duration-500 group-hover:opacity-0"
              />
              <img 
                src="/images/profile-color.jpg" 
                alt="Myriam Leblanc - Color Portrait" 
                className="absolute inset-0 w-full h-auto opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-lg text-gray-600 leading-relaxed">
                {language === 'en' 
                  ? "I'm Myriam, a first-gen CS student from the Magdalen Islands. I blend curiosity, aesthetics, and empathy to design experiences that feel intuitive and human. From airport shifts to game jams and EDM festivals, I've always believed in showing up fully — and helping others do the same through technology."
                  : "Je suis Myriam, étudiante en informatique et première de ma famille à fréquenter l'université. Originaire des Îles-de-la-Madeleine, je combine curiosité, esthétisme et empathie pour créer des expériences technologiques humaines et intuitives. Entre les shifts à l'aéroport, les festivals et les game jams, j'ai toujours cru en l'importance de se montrer pleinement — et d'aider les autres à en faire autant."
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="container max-w-2xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-8">Let's Connect</h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12">
            I'm always open to meaningful conversations, creative collaborations, or simply connecting with curious minds.
          </p>
          <a 
            href="mailto:myriamleblanc230@gmail.com" 
            className="inline-flex items-center px-8 py-4 text-lg font-medium text-gray-900 bg-transparent border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 group"
          >
            Send me an email
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
      </section>

      {/* Footer */}
      <footer className="bg-[#fdfdfc] py-8">
        <div className="container max-w-2xl mx-auto text-center px-4">
          <p className="text-sm text-gray-600 mb-4">Myriam Leblanc</p>
          <p className="text-sm text-gray-500 italic leading-relaxed">
            Stay curious. Stay soft. Stay lit up by what moves you.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
