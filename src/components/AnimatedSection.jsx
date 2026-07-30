import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: delay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
