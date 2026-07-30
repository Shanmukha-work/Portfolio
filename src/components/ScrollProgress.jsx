import React, { useState, useEffect } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scroll = `${(totalScroll / windowHeight) * 100}`;
    setScrollProgress(scroll);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '3px',
      background: 'rgba(255, 255, 255, 0.1)',
      zIndex: 9999
    }}>
      <div style={{
        height: '100%',
        width: `${scrollProgress}%`,
        background: 'linear-gradient(135deg, #2563EB, #3B82F6)',
        transition: 'width 0.1s ease-out'
      }} />
    </div>
  );
};

export default ScrollProgress;
