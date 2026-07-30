import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Gudavalli Shanmukha Vardhan</h3>
        <div className="social-icons">
          <a href="#" aria-label="GitHub"><FaGithub /></a>
          <a href="https://linkedin.com/in/shanmukha-vardhan-2721862b6" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="mailto:shanmukhavardhan70@gmail.com" aria-label="Email"><FaEnvelope /></a>
        </div>
        <p className="made-with">Made with ❤️ using React + Vite</p>
        <p className="copyright">© 2026 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
