import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="aspect-video bg-muted-gray"></div>
            <div className="p-6">
              <h3 className="text-xl font-medium mb-2">Game Jam Comic Strip</h3>
              <p className="text-gray-600 mb-4">
                A visual storytelling project that combines narrative design with interactive elements.
              </p>
              <a href="#" className="text-gray-900 hover:underline">View case study →</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
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
    </div>
  )
}

export default App
