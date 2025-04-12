import CaseStudy from './components/CaseStudy'
import TagEmAllPage from './pages/TagEmAllPage'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollIndicator from './components/ScrollIndicator'
import Introduction from './components/Introduction'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Projects from "./components/Projects";

function App() {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'en';
  });

  const [theme, setTheme] = useState(() => {
    // Check if theme is stored in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    // Check if user prefers dark mode
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    // Default to light mode
    return 'light';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

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
    <Router>
      <div className="min-h-screen">
        <ScrollIndicator />

        <Routes>
          <Route path="/" element={
            <>
              <Navigation language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme} />
              <main>
                <Introduction language={language} />
                <Projects language={language} />
              </main>
              <Footer language={language} />
            </>
          } />
          <Route path="/projects/tag-em-all" element={<TagEmAllPage language={language} theme={theme} setTheme={setTheme} />} />
          <Route path="/case-study/:id" element={<CaseStudy language={language} theme={theme} setTheme={setTheme} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
