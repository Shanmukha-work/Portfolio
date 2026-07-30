import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Education
      </motion.h2>
      <div className="timeline">
        <motion.div 
          className="timeline-item left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="timeline-icon">
            <FaGraduationCap />
          </div>
          <div className="timeline-content">
            <h3>B.Tech — Computer Science & Information Technology</h3>
            <h4>MLR Institute of Technology</h4>
            <p className="date">2023 – Present</p>
          </div>
        </motion.div>

        <motion.div 
          className="timeline-item right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="timeline-icon">
            <FaGraduationCap />
          </div>
          <div className="timeline-content">
            <h3>Intermediate</h3>
            <h4>Sri Chaitanya Junior College</h4>
          </div>
        </motion.div>

        <motion.div 
          className="timeline-item left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="timeline-icon">
            <FaSchool />
          </div>
          <div className="timeline-content">
            <h3>SSC</h3>
            <h4>Bharatiya Vidya Bhavan Public School</h4>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
