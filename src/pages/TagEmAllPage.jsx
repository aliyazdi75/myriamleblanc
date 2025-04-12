import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';
import ImageModal from '../components/ImageModal';

const TagEmAllPage = ({ language, theme, setTheme }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-white transition-colors duration-300">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-warm-cream via-soft-peach to-warm-cream/80 dark:from-gray-800 dark:via-gray-800 dark:to-gray-800/90 backdrop-blur-sm border-b border-gray-100 dark:border-gray-700">
        <div className="max-w-screen-lg mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <Link
              to="/"
              className="text-gray-600 hover:text-terracotta dark:text-gray-300 dark:hover:text-terracotta transition-colors duration-300 flex items-center space-x-2"
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
            <div className="flex items-center">
              <ThemeToggle theme={theme} setTheme={setTheme} />
            </div>
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
            <h1 className="text-5xl md:text-6xl font-light tracking-tight text-gray-800 dark:text-white leading-[1.1]">
              Tag 'Em All
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              A playful social experience that brings friends together through interactive challenges
            </p>
            <div className="flex justify-center gap-4 text-sm text-gray-400 dark:text-gray-500">
              <span>48-hour Game Jam</span>
              <span>•</span>
              <span>8 Team Members</span>
              <span>•</span>
              <span>UX/UI Design Lead</span>
            </div>
            <motion.a
              href="https://fcozzuto.itch.io/tag-em-all"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-8 px-6 py-3 bg-gradient-to-r from-terracotta to-dusty-rose text-white rounded-full hover:from-terracotta hover:to-dusty-rose transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Play the Game 🎮
            </motion.a>
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
            <h2 className="text-3xl font-light tracking-tight text-gray-800 dark:text-white text-center">
              The Process
            </h2>
            <div className="relative">
              {/* Process Steps */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Step 1 */}
                <a href="#research" className="group">
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl border border-terracotta/20 dark:border-terracotta/30 hover:border-terracotta dark:hover:border-terracotta/70 transition-all duration-300">
                    <div className="text-terracotta dark:text-terracotta text-sm font-medium mb-2">01</div>
                    <h3 className="text-gray-800 dark:text-white group-hover:text-terracotta dark:group-hover:text-terracotta transition-colors duration-300">Research</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Understanding the Problem</p>
                  </div>
                </a>

                {/* Step 2 */}
                <a href="#design" className="group">
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl border border-dusty-rose/20 dark:border-dusty-rose/30 hover:border-dusty-rose dark:hover:border-dusty-rose/70 transition-all duration-300">
                    <div className="text-dusty-rose dark:text-dusty-rose text-sm font-medium mb-2">02</div>
                    <h3 className="text-gray-800 dark:text-white group-hover:text-dusty-rose dark:group-hover:text-dusty-rose transition-colors duration-300">Design</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Creating Solutions</p>
                  </div>
                </a>

                {/* Step 3 */}
                <a href="#prototype" className="group">
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl border border-sage-green/20 dark:border-sage-green/30 hover:border-sage-green dark:hover:border-sage-green/70 transition-all duration-300">
                    <div className="text-sage-green dark:text-sage-green text-sm font-medium mb-2">03</div>
                    <h3 className="text-gray-800 dark:text-white group-hover:text-sage-green dark:group-hover:text-sage-green transition-colors duration-300">Prototype</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Building & Testing</p>
                  </div>
                </a>

                {/* Step 4 */}
                <a href="#validate" className="group">
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl border border-deep-teal/20 dark:border-deep-teal/30 hover:border-deep-teal dark:hover:border-deep-teal/70 transition-all duration-300">
                    <div className="text-deep-teal dark:text-deep-teal text-sm font-medium mb-2">04</div>
                    <h3 className="text-gray-800 dark:text-white group-hover:text-deep-teal dark:group-hover:text-deep-teal transition-colors duration-300">Validate</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Refining & Iterating</p>
                  </div>
                </a>
              </div>

              {/* Connecting Lines */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-terracotta/30 via-dusty-rose/30 to-sage-green/30 dark:from-terracotta/50 dark:via-dusty-rose/50 dark:to-sage-green/50 -z-10"></div>
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
            <h2 className="text-3xl font-light tracking-tight text-gray-800 dark:text-white bg-terracotta/10 dark:bg-terracotta/20 px-6 py-3 rounded-full inline-block">
              Overview
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Tag 'Em All is a competitive 2-player game where players tag followers to build the biggest crowd. Created during Game Jam Sherbrooke 2025, my biggest challenge was making it instantly playable without a tutorial. Think of it as a playful race to build your own cheering section!
            </p>
          </motion.div>

          {/* My Role */}
          <motion.div
            id="my-role"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-light tracking-tight text-gray-800 dark:text-white bg-dusty-rose/10 dark:bg-dusty-rose/20 px-6 py-3 rounded-full inline-block">
              My Role
            </h2>
            <li className="flex items-start">
              <span className="text-terracotta dark:text-terracotta mr-2">•</span>
              <span>Designed menu flow, visuals, and interaction logic</span>
            </li>
            <li className="flex items-start">
              <span className="text-terracotta dark:text-terracotta mr-2">•</span>
              <span>Created all hand-drawn assets for menus, instructions, and score HUD</span>
            </li>
            <li className="flex items-start">
              <span className="text-terracotta dark:text-terracotta mr-2">•</span>
              <span>Collaborated with 7 talented teammates: programmers, sound designers, tech artist, game designer, and mediator</span>
            </li>
          </motion.div>

          {/* Process */}
          <motion.div
            id="process"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-light tracking-tight text-gray-800 dark:text-white bg-deep-teal/10 dark:bg-deep-teal/20 px-6 py-3 rounded-full inline-block">
              Design Process
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium text-gray-700 dark:text-gray-200 mb-3">Visual Design</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  I created a hand-drawn, playful aesthetic that communicated the game's lighthearted nature. The visual style helped players immediately understand the game's mood and approachability.
                </p>
                <ImageModal
                  src="/images/game.png"
                  alt="Game visual design"
                  className="rounded-lg shadow-md"
                />
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-700 dark:text-gray-200 mb-3">Menu Design</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  The menu system was designed to be minimalist and clear, allowing players to jump into gameplay with minimal friction. I used visual cues rather than text where possible.
                </p>
                <ImageModal
                  src="/images/menu.png"
                  alt="Menu design"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-medium text-gray-700 dark:text-gray-200 mb-6">Design Evolution</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-terracotta dark:text-terracotta">Initial Sketches</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-terracotta dark:text-terracotta mr-2">•</span>
                      <span>Rapid ideation to explore multiple concepts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-terracotta dark:text-terracotta mr-2">•</span>
                      <span>Hand-drawn approach for quick iteration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-terracotta dark:text-terracotta mr-2">•</span>
                      <span>Testing different visual metaphors for "followers"</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ImageModal
                    src="/images/initialsketches.png"
                    alt="Initial sketches showing various game concept explorations"
                    className="w-full rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-terracotta dark:text-terracotta">Start Menu</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-terracotta dark:text-terracotta mr-2">•</span>
                      <span>Minimalist button design for intuitive navigation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-terracotta dark:text-terracotta mr-2">•</span>
                      <span>Playful color palette to establish game mood</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-terracotta dark:text-terracotta mr-2">•</span>
                      <span>Clear visual hierarchy guiding player attention</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ImageModal
                    src="/images/menu.png"
                    alt="Colorful start menu with intuitive button placement and playful visual design"
                    className="w-full rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-terracotta dark:text-terracotta">Gameplay Screen</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-terracotta dark:text-terracotta mr-2">•</span>
                      <span>Dynamic follower line showing player progress</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-terracotta dark:text-terracotta mr-2">•</span>
                      <span>Sparkle effects provide visual feedback</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-terracotta dark:text-terracotta mr-2">•</span>
                      <span>Color-coded elements for player identification</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ImageModal
                    src="/images/game.png"
                    alt="Dynamic game screen showing follower line and sparkle effects during gameplay"
                    className="w-full rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-terracotta dark:text-terracotta">End Scene</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-terracotta dark:text-terracotta mr-2">•</span>
                      <span>Stylized block art celebrates the winner</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-terracotta dark:text-terracotta mr-2">•</span>
                      <span>Clear game results display for both players</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-terracotta dark:text-terracotta mr-2">•</span>
                      <span>Playful animations encourage replay</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ImageModal
                    src="/images/endscene.png"
                    alt="Stylized end scene with playful block art and game results display"
                    className="w-full rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Improvements */}
          <motion.div
            id="improvements"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-light tracking-tight text-gray-800 dark:text-white bg-terracotta/20 dark:bg-terracotta/30 px-6 py-3 rounded-full inline-block">
              Future Improvements
            </h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-terracotta text-lg mr-3">✓</span>
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong className="text-gray-800 dark:text-white">Better HUD placement</strong> - Iterate on HUD placement for better visibility
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-terracotta text-lg mr-3">✓</span>
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong className="text-gray-800 dark:text-white">More animations</strong> - Add more animations for player feedback
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-terracotta text-lg mr-3">✓</span>
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong className="text-gray-800 dark:text-white">Simpler end screen</strong> - Simplify the end screen UX flow
                  </p>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Learnings */}
          <motion.div
            id="learnings"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-light tracking-tight text-gray-800 dark:text-white bg-sage-green/20 dark:bg-sage-green/30 px-6 py-3 rounded-full inline-block">
              Key Learnings
            </h2>
            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-300 italic">
                 This game jam taught me that sketching fast brings clarity under pressure. Players connect with visual storytelling much faster than text, and a joyful UI can guide gameplay without a single word. Sometimes, the best UX is the one that makes players smile and play without thinking twice.
              </p>
              <p className="text-right text-gray-500 dark:text-gray-400 mt-4">— Myriam Leblanc</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Return button */}
      <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            to="/"
            className="inline-block px-8 py-3 bg-terracotta text-white rounded-full hover:bg-terracotta/90 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Return to Portfolio
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TagEmAllPage;
