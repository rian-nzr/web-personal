import { useState, useEffect } from 'react';

const TextRotator = ({ texts, interval }) => {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const rotateText = () => {
      setDisplayedText('');
      const text = texts[index % texts.length];
      let currentIndex = 0;

      const intervalId = setInterval(() => {
        setDisplayedText((prevText) => prevText + text[currentIndex]);
        currentIndex++;

        if (currentIndex === text.length) {
          clearInterval(intervalId);
          setTimeout(() => {
            setIndex((prevIndex) => prevIndex + 1);
          }, interval);
        }
      }, 100);
    };

    rotateText();
  }, [index, texts, interval]);

  return <span className="text-white">{displayedText}</span>;
};

export default TextRotator;