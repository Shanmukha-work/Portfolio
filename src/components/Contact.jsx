import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
  };

  return (
    <section id="contact" className="contact-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Get In Touch
      </motion.h2>

      <div className="contact-container">
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <a href="mailto:shanmukhavardhan70@gmail.com" className="info-card">
            <div className="info-icon"><FaEnvelope /></div>
            <div className="info-text">
              <h4>Email</h4>
              <p>shanmukhavardhan70@gmail.com</p>
            </div>
          </a>

          <a href="tel:+919000314620" className="info-card">
            <div className="info-icon"><FaPhone /></div>
            <div className="info-text">
              <h4>Phone</h4>
              <p>+91 9000314620</p>
            </div>
          </a>

          <a href="https://linkedin.com/in/shanmukha-vardhan-2721862b6" target="_blank" rel="noopener noreferrer" className="info-card">
            <div className="info-icon"><FaLinkedin /></div>
            <div className="info-text">
              <h4>LinkedIn</h4>
              <p>linkedin.com/in/shanmukha-vardhan-2721862b6</p>
            </div>
          </a>
        </motion.div>

        <motion.div 
          className="contact-form-wrapper"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input type="text" placeholder="Name" required />
            </div>
            <div className="input-group">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="input-group">
              <input type="text" placeholder="Subject" required />
            </div>
            <div className="input-group">
              <textarea placeholder="Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
