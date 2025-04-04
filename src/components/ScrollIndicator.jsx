import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState, useEffect } from 'react';

const ScrollIndicator = () => {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Hide indicator when scrolled past 200px
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsVisible(latest < 200);
  });

  // Handle initial animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20 
      }}
      transition={{ duration: 0.6 }}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href="#about" className="block">
        <motion.div
          className="relative p-4 group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Mouse body */}
          <motion.div
            className={`w-6 h-10 rounded-full border-2 border-gray-400 dark:border-gray-500 relative
              ${isHovered ? 'border-gray-600 dark:border-gray-300' : ''}`}
            animate={{
              backgroundColor: isHovered ? 'rgba(0,0,0,0.05)' : 'rgba(0,0,0,0)',
              borderColor: isHovered ? 'rgba(75,85,99,1)' : 'rgba(156,163,175,0.6)'
            }}
            transition={{ duration: 0.2 }}
          >
            {/* Scroll wheel/dot */}
            <motion.div
              className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-500"
              animate={{
                y: [0, 12, 0],
                backgroundColor: isHovered ? 'rgba(75,85,99,1)' : 'rgba(156,163,175,0.6)'
              }}
              transition={{
                y: {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                backgroundColor: { duration: 0.2 }
              }}
            />
          </motion.div>
        </motion.div>
      </a>
    </motion.div>
  );
};

export default ScrollIndicator; 