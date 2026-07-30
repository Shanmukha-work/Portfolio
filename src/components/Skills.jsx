import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaChartLine, FaDatabase, FaNetworkWired, FaDesktop, FaGlobe, FaTools } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    {
      title: 'Programming',
      icon: <FaCode />,
      skills: ['Python', 'Java', 'C', 'JavaScript'],
    },
    {
      title: 'Data Analysis',
      icon: <FaChartLine />,
      skills: ['Microsoft Excel', 'SQL', 'Data Cleaning', 'Data Analysis', 'Data Visualization', 'Data Interpretation'],
    },
    {
      title: 'Databases',
      icon: <FaDatabase />,
      skills: ['PostgreSQL', 'MySQL', 'DBMS', 'Prisma ORM'],
    },
    {
      title: 'Networking',
      icon: <FaNetworkWired />,
      skills: ['TCP/IP', 'OSI Model', 'IP Addressing', 'Subnetting', 'Routing & Switching', 'DNS', 'HTTP/HTTPS'],
    },
    {
      title: 'Operating Systems',
      icon: <FaDesktop />,
      skills: ['Linux', 'Windows'],
    },
    {
      title: 'Web Technologies',
      icon: <FaGlobe />,
      skills: ['HTML', 'CSS', 'React.js'],
    },
    {
      title: 'Tools',
      icon: <FaTools />,
      skills: ['Git & GitHub', 'VS Code', 'Cisco Packet Tracer', 'Wireshark', 'Nmap'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Technical Skills</h2>
          <div className="title-underline"></div>
        </motion.div>

        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillsData.map((category, index) => (
            <motion.div key={index} className="skill-card" variants={itemVariants}>
              <div className="skill-header">
                <div className="skill-icon">{category.icon}</div>
                <h3 className="skill-title">{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
