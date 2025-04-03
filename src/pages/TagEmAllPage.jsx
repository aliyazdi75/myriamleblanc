import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TagEmAllPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-screen-lg mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <Link 
              to="/" 
              className="text-gray-600 hover:text-purple-600 transition-colors duration-300 flex items-center space-x-2"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img 
              src="/images/comic.png" 
              alt="Tag 'Em All Comic Strip" 
              className="w-full rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Title Section */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6 text-center"
          >
            <h1 className="text-5xl md:text-6xl font-light tracking-tight text-gray-800 leading-[1.1]">
              Tag 'Em All
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              A playful social experience that brings friends together through interactive challenges
            </p>
            <div className="flex justify-center gap-4 text-sm text-gray-400">
              <span>48-hour Game Jam</span>
              <span>•</span>
              <span>8 Team Members</span>
              <span>•</span>
              <span>UX/UI Design Lead</span>
            </div>
            <a 
              href="https://fcozzuto.itch.io/tag-em-all" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-8 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Play the Game 🎮
            </a>
          </motion.div>
        </div>
      </section>

      {/* Process Diagram */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-light tracking-tight text-gray-800 text-center">
              The Process 🎯
            </h2>
            <div className="relative">
              {/* Process Steps */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Step 1 */}
                <a href="#research" className="group">
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-purple-100 hover:border-purple-300 transition-all duration-300">
                    <div className="text-purple-500 text-sm font-medium mb-2">01</div>
                    <h3 className="text-gray-800 group-hover:text-purple-600 transition-colors duration-300">Research</h3>
                    <p className="text-sm text-gray-500 mt-1">Understanding the Problem</p>
                  </div>
                </a>

                {/* Step 2 */}
                <a href="#design" className="group">
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-pink-100 hover:border-pink-300 transition-all duration-300">
                    <div className="text-pink-500 text-sm font-medium mb-2">02</div>
                    <h3 className="text-gray-800 group-hover:text-pink-600 transition-colors duration-300">Design</h3>
                    <p className="text-sm text-gray-500 mt-1">Creating Solutions</p>
                  </div>
                </a>

                {/* Step 3 */}
                <a href="#prototype" className="group">
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-blue-100 hover:border-blue-300 transition-all duration-300">
                    <div className="text-blue-500 text-sm font-medium mb-2">03</div>
                    <h3 className="text-gray-800 group-hover:text-blue-600 transition-colors duration-300">Prototype</h3>
                    <p className="text-sm text-gray-500 mt-1">Building & Testing</p>
                  </div>
                </a>

                {/* Step 4 */}
                <a href="#validate" className="group">
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-green-100 hover:border-green-300 transition-all duration-300">
                    <div className="text-green-500 text-sm font-medium mb-2">04</div>
                    <h3 className="text-gray-800 group-hover:text-green-600 transition-colors duration-300">Validate</h3>
                    <p className="text-sm text-gray-500 mt-1">Refining & Iterating</p>
                  </div>
                </a>
              </div>

              {/* Connecting Lines */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 -z-10"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-16">
          {/* Overview */}
          <motion.div
            id="overview"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-light tracking-tight text-gray-800">
              Hey there! 👋
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Tag 'Em All is a competitive 2-player game where players tag followers to build the biggest crowd. Created during Game Jam Sherbrooke 2025, my biggest challenge was making it instantly playable without a tutorial. Think of it as a playful race to build your own cheering section!
            </p>
          </motion.div>

          {/* My Role */}
          <motion.div
            id="role"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-light tracking-tight text-gray-800">
              What I Did 🎨
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                Designed menu flow, visuals, and interaction logic
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                Created all hand-drawn assets for menus, instructions, and score HUD
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                Collaborated with 7 talented teammates: programmers, sound designers, tech artist, game designer, and mediator
              </li>
            </ul>
          </motion.div>

          {/* The Challenge */}
          <motion.div
            id="challenge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-light tracking-tight text-gray-800">
              The UX Challenge 🎯
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              In a game jam, every second counts. Players needed to understand the game instantly, without reading a single word. I focused on designing a start menu and feedback flow that spoke through visuals alone, making the experience intuitive and engaging from the first glance.
            </p>
          </motion.div>

          {/* Process */}
          <motion.div
            id="process"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-light tracking-tight text-gray-800">
              The Design Process ✏️
            </h2>
            <div className="space-y-4">
              <img 
                src="/images/initialsketches.png" 
                alt="Initial UI Sketches" 
                className="w-full rounded-xl shadow-md"
              />
              <p className="text-sm text-gray-500 italic">Early sketches exploring menu layouts, visual hierarchy, and inspiration from Fall Guys, Animal Crossing, and Nintendo DS interfaces</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-light text-gray-700">Design Goals</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  Fast visual clarity through intuitive iconography
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  Playful color-coded buttons for clear actions
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  Intuitive layout that guides players naturally
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Final Screens */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-light tracking-tight text-gray-800">
              The Final Look ✨
            </h2>
            <div className="space-y-6">
              <img 
                src="/images/menu.png" 
                alt="Start Menu" 
                className="w-full rounded-xl shadow-lg"
              />
              <p className="text-sm text-gray-500 italic">Colorful start menu with intuitive button placement</p>
              
              <img 
                src="/images/game.png" 
                alt="Game Screen" 
                className="w-full rounded-xl shadow-lg"
              />
              <p className="text-sm text-gray-500 italic">Dynamic game screen with follower line and sparkle effects</p>

              <img 
                src="/images/endscene.png" 
                alt="End Scene" 
                className="w-full rounded-xl shadow-lg"
              />
              <p className="text-sm text-gray-500 italic">Stylized end scene with playful block art</p>
            </div>
          </motion.div>

          {/* Feedback */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-light tracking-tight text-gray-800">
              What Players Said 💭
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-purple-50 p-6 rounded-xl">
                <p className="text-gray-700 italic mb-4">"I didn't need a tutorial. The moment I moved, it all made sense!"</p>
                <p className="text-sm text-gray-500">- Game Jam Player</p>
              </div>
              <div className="bg-pink-50 p-6 rounded-xl">
                <p className="text-gray-700 italic mb-4">"Loved the color-coded score and simple controls!"</p>
                <p className="text-sm text-gray-500">- Game Jam Player</p>
              </div>
            </div>
          </motion.div>

          {/* Improvements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-light tracking-tight text-gray-800">
              What I'd Improve 🚀
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                Iterate on HUD placement for better visibility
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                Add more animations for player feedback
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                Simplify the end screen UX flow
              </li>
            </ul>
          </motion.div>

          {/* Learnings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-light tracking-tight text-gray-800">
              Key Learnings 💡
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              This game jam taught me that sketching fast brings clarity under pressure. Players connect with visual storytelling much faster than text, and a joyful UI can guide gameplay without a single word. Sometimes, the best UX is the one that makes players smile and play without thinking twice.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TagEmAllPage; 