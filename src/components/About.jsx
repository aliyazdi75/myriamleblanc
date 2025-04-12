import { motion } from 'framer-motion';

const About = ({ language }) => {
  const translations = {
    en: {
      title: "About",
      intro: "I'm Myriam, a first-generation CS student from the Magdalen Islands. I design for clarity, emotion, and human connection — using code, visuals, and rhythm.",
      mission: "UX is where my love for people, design, and problem-solving meet. As someone who comes from a small island, I believe technology should feel welcoming, intuitive, and deeply human.",
      skills: "Skills",
      skillsList: [
        "User Research & Testing",
      //     add more points
      ],
      philosophy: "Design Philosophy",
      philosophyPoints: [
        "Simplicity over complexity",
      //     add more points
      ]
    },
    fr: {
      title: "À propos",
      intro: "Je suis Myriam, une étudiante en informatique de première génération des Îles-de-la-Madeleine. Je conçois pour la clarté, l'émotion et la connexion humaine — en utilisant le code, les visuels et le rythme.",
      mission: "L'UX est là où se rencontrent mon amour pour les gens, le design et la résolution de problèmes. En tant que personne venant d'une petite île, je crois que la technologie devrait être accueillante, intuitive et profondément humaine.",
      skills: "Skills",
      skillsList: [
        "User Research & Testing",
      ],
      philosophy: "Design Philosophy",
      philosophyPoints: [
        "Simplicity",
      ]
    }
  };

  const t = translations[language];

  return (
    <section id="about" className="section bg-warm-cream dark:bg-gray-800">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="heading-2 mb-4 dark:text-white">{t.title}</h2>
          <div className="w-20 h-1 bg-terracotta mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="rounded-2xl shadow-soft overflow-hidden group relative">
                <div className="relative w-full h-full">
                  <img 
                    src="/images/profile-bw.jpg" 
                    alt="BW-Myriam Leblanc"
                    className="w-full rounded-2xl transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <img 
                    src="/images/profile-color.jpg" 
                    alt="Color-Myriam Leblanc"
                    className="w-full rounded-2xl absolute top-0 left-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-soft-peach dark:bg-terracotta/30 rounded-full z-[-1]"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-sage-green/30 dark:bg-sage-green/40 rounded-full z-[-1]"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="body-text mb-6 text-lg dark:text-white">{t.intro}</p>
            <p className="body-text mb-8 dark:text-gray-300">{t.mission}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="heading-3 text-xl mb-4 text-terracotta dark:text-terracotta">{t.skills}</h3>
                <ul className="space-y-2">
                  {t.skillsList.map((skill, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-terracotta rounded-full mr-2"></span>
                      <span className="dark:text-gray-300">{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="heading-3 text-xl mb-4 text-terracotta dark:text-terracotta">{t.philosophy}</h3>
                <ul className="space-y-2">
                  {t.philosophyPoints.map((point, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 bg-terracotta rounded-full mr-2"></span>
                      <span className="dark:text-gray-300">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
