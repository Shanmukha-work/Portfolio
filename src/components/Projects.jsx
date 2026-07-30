import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <div className="projects-grid">
        <motion.div 
          className="project-card"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ y: -10 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="card-content">
            <h3>AI-Based Complaint Grievance System</h3>
            <div className="tech-tags">
              <span>React.js</span>
              <span>JavaScript</span>
              <span>PostgreSQL</span>
              <span>Prisma ORM</span>
            </div>
            <ul className="project-description">
              <li>Developed a web-based complaint management system for efficient complaint registration, tracking, and resolution.</li>
              <li>Implemented complaint categorization and dashboard management.</li>
              <li>Used PostgreSQL with Prisma ORM for database operations.</li>
            </ul>
            <div className="project-links">
              <a href="#" className="btn"><FaGithub /> GitHub</a>
              <a href="#" className="btn"><FaExternalLinkAlt /> Live Demo</a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="project-card"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ y: -10 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="card-content">
            <h3>Digit & Text Recognition with Seamless Translation</h3>
            <div className="tech-tags">
              <span>Python</span>
              <span>TensorFlow</span>
              <span>OpenCV</span>
              <span>OCR</span>
            </div>
            <ul className="project-description">
              <li>Developed an OCR application capable of recognizing handwritten digits and printed text.</li>
              <li>Integrated multilingual translation and image preprocessing for improved accuracy.</li>
            </ul>
            <div className="project-links">
              <a href="#" className="btn"><FaGithub /> GitHub</a>
              <a href="#" className="btn"><FaExternalLinkAlt /> Live Demo</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
