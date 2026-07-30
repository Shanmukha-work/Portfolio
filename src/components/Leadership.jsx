import React from 'react';
import { motion } from 'framer-motion';
import { FaCrown, FaUsers, FaTrophy, FaMedal } from 'react-icons/fa';
import './Leadership.css';

const Leadership = () => {
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
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="leadership" className="leadership-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Leadership & Achievements
      </motion.h2>

      <div className="leadership-container">
        <div className="subsection">
          <h3 className="sub-heading">Leadership Roles</h3>
          <motion.div 
            className="cards-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="role-card" variants={itemVariants} whileHover={{ y: -5 }}>
              <div className="icon-wrapper crown"><FaCrown /></div>
              <div className="role-info">
                <h4>President</h4>
                <p>SPARC Club</p>
              </div>
            </motion.div>
            
            <motion.div className="role-card" variants={itemVariants} whileHover={{ y: -5 }}>
              <div className="icon-wrapper users"><FaUsers /></div>
              <div className="role-info">
                <h4>Core Team Member</h4>
                <p>Avinya Club</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="subsection">
          <h3 className="sub-heading">Achievements</h3>
          <motion.div 
            className="cards-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="role-card" variants={itemVariants} whileHover={{ y: -5 }}>
              <div className="icon-wrapper gold"><FaTrophy /></div>
              <div className="role-info">
                <h4>1st Place</h4>
                <p>College-Level Selection — 3rd Year (SIH)</p>
              </div>
            </motion.div>
            
            <motion.div className="role-card" variants={itemVariants} whileHover={{ y: -5 }}>
              <div className="icon-wrapper silver"><FaMedal /></div>
              <div className="role-info">
                <h4>2nd Place</h4>
                <p>College-Level Selection — 2nd Year (SIH)</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
