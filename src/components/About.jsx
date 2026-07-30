import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaDatabase, FaNetworkWired, FaCode, FaChartBar } from 'react-icons/fa';
import './About.css';

const About = () => {
  const stats = [
    { label: 'Projects', value: '5+' },
    { label: 'Certifications', value: '3+' },
    { label: 'Degree', value: 'B.Tech CSE&IT' },
  ];

  const icons = [
    { icon: <FaShieldAlt />, color: '#ff5f56' },
    { icon: <FaDatabase />, color: '#ffbd2e' },
    { icon: <FaNetworkWired />, color: '#27c93f' },
    { icon: <FaCode />, color: '#82aaff' },
    { icon: <FaChartBar />, color: '#c3e88d' },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-text-container"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card about-text">
              <p>
                I am a B.Tech Computer Science & Information Technology student passionate about technology and continuous learning. My interests span Cybersecurity, Data Analytics, Networking, Databases, and Software Development. 
              </p>
              <p>
                I enjoy solving real-world problems through technology and continuously improving my technical skills by working on practical projects.
              </p>
            </div>
            
            <div className="stats-container">
              {stats.map((stat, index) => (
                <div key={index} className="glass-card stat-card">
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="about-visual"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="icons-grid">
              {icons.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="icon-wrapper"
                  style={{ color: item.color }}
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: index * 0.2 
                  }}
                >
                  {item.icon}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
