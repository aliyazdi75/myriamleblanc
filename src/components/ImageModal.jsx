import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageModal = ({ src, alt, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <motion.img
        src={src}
        alt={alt}
        className={`cursor-pointer ${className}`}
        onClick={openModal}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                src={src}
                alt={alt}
                className="w-full h-full object-contain rounded-lg shadow-2xl"
                layoutId={`image-${src}`}
              />
              <button
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 dark:bg-black/20 dark:hover:bg-black/30 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300"
                onClick={closeModal}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
            <div className="absolute bottom-6 left-0 right-0 text-center">
              <p className="text-white/80 text-sm">{alt}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageModal;
