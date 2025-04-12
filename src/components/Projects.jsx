import { motion } from 'framer-motion';
import { useState } from 'react';

const Projects = ({ language }) => {
  const setHoveredProject = useState(null);

  const translations = {
    en: {
      title: "Projects",
      tagEmAll: "→ Tag 'Em All · 48h Game Jam Sherbrooke 2025",
      tagEmAllDesc: "Crafted the UI/UX for Tag 'Em All, a fast-paced multiplayer game with a focus on intuitive navigation.",
      igniteHerMind: "→ ignite.HER.MIND · Empowering women through digital curation",
      igniteHerMindDesc: "A digital platform designed to amplify women's voices and stories through thoughtful content curation and community building.",
      uxTriathlon: "→ UX + Triathlon · Tracking calm & chaos in motion",
      uxTriathlonDesc: "An app that helps athletes balance training intensity with recovery, using data visualization to make complex training patterns clear and actionable.",
      cta: "Excited to create meaningful experiences together",
      viewCase: "View Case Study",
      comingSoon: "Coming Soon"
    },
    fr: {
      title: "Projets",
      tagEmAll: "→ Tag 'Em All · 48h Game Jam Sherbrooke 2025",
      tagEmAllDesc: "Conception de l'interface UI/UX pour Tag 'Em All, un jeu multijoueur dynamique axé sur une navigation intuitive.",
      igniteHerMind: "→ ignite.HER.MIND · Autonomisation des femmes par la curation numérique",
      igniteHerMindDesc: "Une plateforme numérique conçue pour amplifier les voix et les histoires des femmes à travers une curation de contenu réfléchie et la construction de communauté.",
      uxTriathlon: "→ UX + Triathlon · Suivi du calme & du chaos en mouvement",
      uxTriathlonDesc: "Une application qui aide les athlètes à équilibrer l'intensité de l'entraînement avec la récupération, utilisant la visualisation de données pour rendre les schémas d'entraînement complexes clairs et actionnables.",
      cta: "Enthousiaste à l'idée de créer ensemble des expériences significatives",
      viewCase: "View Case Study",
      comingSoon: "Coming Soon"
    }
  };

  const t = translations[language];

  const projects = [
    {
      id: 'tag-em-all',
      title: t.tagEmAll,
      description: t.tagEmAllDesc,
      image: '/images/comic.png',
      color: 'bg-terracotta',
      link: '/projects/tag-em-all',
      available: true
    },
    {
      id: 'ignite-her-mind',
      title: t.igniteHerMind,
      description: t.igniteHerMindDesc,
      image: '/projects/ignite-her-mind.jpg',
      color: 'bg-dusty-rose',
      link: '#',
      available: false
    },
    {
      id: 'ux-triathlon',
      title: t.uxTriathlon,
      description: t.uxTriathlonDesc,
      image: '/projects/ux-triathlon.jpg',
      color: 'bg-sage-green',
      link: '#',
      available: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="projects" className="section bg-white dark:bg-gray-900">
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-12 mb-16"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="project-card overflow-hidden dark:bg-gray-800">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3 relative">
                    {project.id === 'tag-em-all' ? (
                      <div className="aspect-[4/3] rounded-lg overflow-hidden relative">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover"
                        />
                        {/* nice blur effect */}
                        <div className="absolute top-4 left-4 bg-terracotta/80 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg">
                          <span className="text-white font-petrona text-xl">UX</span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-terracotta/40 to-transparent opacity-70"></div>
                      </div>
                    ) : (
                      <div className={`aspect-[4/3] ${project.color} rounded-lg overflow-hidden flex items-center justify-center`}>
                        <span className="text-white text-4xl font-light">UX</span>
                      </div>
                    )}
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="heading-3 mb-3 group-hover:text-terracotta transition-colors duration-300 dark:text-white">{project.title}</h3>
                    <p className="body-text mb-6 dark:text-gray-300">{project.description}</p>
                    {project.available ? (
                      <a href={project.link} className="btn btn-secondary dark:border-terracotta dark:text-terracotta dark:hover:bg-terracotta dark:hover:text-white">
                        {t.viewCase}
                      </a>
                    ) : (
                      <span className="btn btn-secondary opacity-80 cursor-not-allowed dark:border-terracotta dark:text-terracotta">
                        {t.comingSoon}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xl font-petrona italic text-terracotta dark:text-terracotta">{t.cta}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
