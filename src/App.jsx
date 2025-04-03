import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CaseStudy from './components/CaseStudy'

function App() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="py-8 border-b border-gray-200">
        <div className="container">
          <h1 className="text-3xl font-medium text-gray-900 mb-2">Myriam Leblanc</h1>
          <p className="text-gray-600 italic">Dreaming at the intersection of art and technology</p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="py-4 border-b border-gray-200">
        <div className="container">
          <ul className="flex space-x-8">
            <li><a href="#work" className="nav-link">Work</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Featured Case Study */}
      <section className="py-16">
        <div className="container">
          <h2 className="section-title">Featured Case Study</h2>
          <CaseStudy
            title="Game Jam Comic Strip"
            description="A visual storytelling project that combines narrative design with interactive elements."
            link="#"
          />
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-16 bg-white">
        <div className="container">
          <h2 className="section-title">Selected Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CaseStudy
              title="UX Research Project"
              description="A comprehensive user research study exploring digital accessibility in education."
              link="#"
            />
            <CaseStudy
              title="Mobile App Design"
              description="Designing an intuitive interface for a sustainable shopping companion."
              link="#"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600">
              Born in the beautiful Îles-de-la-Madeleine, I'm a first-generation computer science student
              with a passion for creating meaningful digital experiences. My journey in UX design
              reflects my belief in the power of thoughtful, human-centered technology.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container">
          <h2 className="section-title">Get in Touch</h2>
          <div className="max-w-xl">
            <p className="text-gray-600 mb-6">
              I'm always excited to connect with fellow designers, developers, and creative minds.
              Let's create something meaningful together.
            </p>
            <a 
              href="mailto:your.email@example.com" 
              className="inline-flex items-center text-gray-900 hover:underline"
            >
              Send me an email
              <svg 
                className="w-4 h-4 ml-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
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
    </div>
  )
}

export default App
