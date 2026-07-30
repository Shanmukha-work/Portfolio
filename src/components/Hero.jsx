import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import ParticleBackground from './ParticleBackground';
import './Hero.css';

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ['Aspiring Cybersecurity Professional', 'Data Enthusiast', 'Software Developer'];
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[textIndex];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, textIndex, typingSpeed, texts]);

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="home" className="hero-section">
      <ParticleBackground />
      
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants} className="hero-greeting">Hi, I'm</motion.p>
          <motion.h1 variants={itemVariants} className="hero-name">
            Gudavalli Shanmukha Vardhan
          </motion.h1>
          <motion.div variants={itemVariants} className="hero-subtitle">
            <span className="typing-text">{currentText}</span><span className="cursor">|</span>
          </motion.div>
          <motion.p variants={itemVariants} className="hero-description">
            A passionate technology enthusiast specializing in cybersecurity, data analytics, and software development, dedicated to solving complex real-world problems.
          </motion.p>
          
          <motion.div variants={itemVariants} className="hero-buttons">
            <a href="/resume.pdf" download className="btn-primary">Download Resume</a>
            <a href="#contact" className="btn-secondary">Contact Me</a>
            <a href="https://www.linkedin.com/in/shanmukha-vardhan-2721862b6" target="_blank" rel="noreferrer" className="btn-secondary icon-btn">
              <FaLinkedin /> LinkedIn
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-illustration"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="terminal-window">
            <div className="terminal-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="terminal-body">
              <p className="code-line"><span className="keyword">const</span> <span className="variable">developer</span> = {'{'} </p>
              <p className="code-line indent">name: <span className="string">"Shanmukha Vardhan"</span>,</p>
              <p className="code-line indent">skills: [<span className="string">"Cybersecurity"</span>, <span className="string">"Data"</span>, <span className="string">"Dev"</span>],</p>
              <p className="code-line indent">hardWorker: <span className="keyword">true</span>,</p>
              <p className="code-line indent">problemSolver: <span className="keyword">true</span></p>
              <p className="code-line">{'}'};</p>
              <br/>
              <p className="code-line"><span className="function">console</span>.<span className="method">log</span>(<span className="string">"Ready to innovate!"</span>);</p>
              <p className="code-line output">{'>'} Ready to innovate!</p>
              <p className="code-line cursor-line">_</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
