import { useState, useEffect } from 'react';

const useTypewriter = (texts, speed = 100, pause = 2000) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    let ticker = setTimeout(() => {
      handleTyping();
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(ticker);
  }, [text, isDeleting, loopNum]);

  const handleTyping = () => {
    const i = loopNum % texts.length;
    const fullText = texts[i];

    if (isDeleting) {
      setText(fullText.substring(0, text.length - 1));
    } else {
      setText(fullText.substring(0, text.length + 1));
    }

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  };

  return { text, showCursor };
};

export default useTypewriter;
