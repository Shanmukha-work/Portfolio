import React from 'react';
import './App.css';

/* ── Utility Components ── */
import ScrollProgress from './components/ScrollProgress.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

/* ── Section Components ── */
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import Certifications from './components/Certifications.jsx';
import Leadership from './components/Leadership.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="app">
      {/* Scroll progress indicator at page top */}
      <ScrollProgress />

      {/* Sticky navigation */}
      <Navbar />

      {/* Page sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Leadership />
      <Contact />
      <Footer />

      {/* Floating scroll-to-top button */}
      <ScrollToTop />
    </div>
  );
}

export default App;
