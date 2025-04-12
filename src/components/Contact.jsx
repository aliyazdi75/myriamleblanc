import {motion} from 'framer-motion';
import {useState} from 'react';
import {FaEnvelope, FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa';

const Contact = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    message: ''
  });

  const translations = {
    en: {
      title: "Contact",
      message: "I'm always open to meaningful conversations, creative collaborations, or simply connecting with curious minds.",
      connect: "Connect with me",
      formName: "Name",
      formTitle: "Title",
      formMessage: "Message",
      formSubmit: "Send Message"
    },
    fr: {
      title: "Contact",
      message: "Je suis toujours ouverte aux conversations significatives, aux collaborations créatives ou simplement à la connexion avec des esprits curieux.",
      connect: "Me contacter",
      formName: "Nom",
      formTitle: "Titre",
      formMessage: "Message",
      formSubmit: "Envoyer le message"
    }
  };

  const t = translations[language];

  const socialLinks = [
    //   change your linkedin username :)
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/myriam-leblanc-854363202", label: "LinkedIn" },
    { icon: <FaGithub />, url: "https://github.com/myriamleblanc", label: "GitHub" },
    // make a professional instagram :)
    { icon: <FaInstagram />, url: "https://instagram.com/myriamleblanc.ux", label: "Instagram" },
    { icon: <FaEnvelope />, url: "mailto:myriamleblanc230@gmail.com", label: "Email" }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // create mailto link
    const subject = formData.title || `Contact from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0ATitle: ${formData.title}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = `mailto:myriamleblanc230@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <section id="contact" className="section bg-white dark:bg-gray-900">
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
          <p className="body-text max-w-2xl mx-auto dark:text-gray-300">{t.message}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-warm-cream dark:bg-gray-800 p-8 rounded-2xl shadow-soft"
          >
            <h3 className="heading-3 text-xl mb-6 text-terracotta dark:text-terracotta">{t.formSubmit}</h3>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block mb-2 text-text-secondary dark:text-gray-300">{t.formName}</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-terracotta" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="title" className="block mb-2 text-text-secondary dark:text-gray-300">{t.formTitle}</label>
                <input 
                  type="text" 
                  id="title" 
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="input-field dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-terracotta" 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-text-secondary dark:text-gray-300">{t.formMessage}</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4" 
                  className="input-field dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-terracotta" 
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary w-full dark:bg-terracotta dark:text-white dark:hover:bg-opacity-80">
                {t.formSubmit}
              </button>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h3 className="heading-3 text-xl mb-6 text-terracotta dark:text-terracotta">{t.connect}</h3>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-terracotta hover:bg-terracotta hover:text-white dark:hover:bg-terracotta transition-all duration-300 shadow-soft"
                  whileHover={{ y: -5 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* nice quote */}
            <div className="relative">
              <div className="aspect-[3/2] bg-gradient-to-br from-terracotta/10 to-sage-green/10 dark:from-terracotta/20 dark:to-sage-green/20 rounded-2xl flex items-center justify-center p-8">
                <div className="text-center">
                  <p className="text-lg font-petrona italic mb-4 dark:text-gray-200">
                    "Design is not just what it looks like and feels like. Design is how it works."
                  </p>
                  <p className="text-sm text-text-secondary dark:text-gray-400">— Steve Jobs</p>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-soft-peach dark:bg-terracotta/30 rounded-full z-[-1]"></div>
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-sage-green/30 dark:bg-sage-green/40 rounded-full z-[-1]"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
