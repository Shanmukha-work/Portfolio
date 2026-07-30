import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';
import './Certifications.css';

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Certifications
      </motion.h2>
      <div className="cert-container">
        <motion.div 
          className="cert-card"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ y: -5, boxShadow: '0 0 40px rgba(37,99,235,0.2)' }}
        >
          <div className="cert-icon">
            <FaCertificate />
          </div>
          <div className="cert-info">
            <h3>CCNA Training Course</h3>
            <p className="issuer">Indian Institute of Cyber Security (IICS)</p>
            <div className="badge">Completed: July 2026</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
