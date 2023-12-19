"use client"

import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
  onClick={scrollToTop}
  className={`${
    isVisible ? 'block' : 'hidden'
  } fixed bottom-4 right-4 bg-amber-400 p-4 rounded-full aspect-w-1 aspect-h-1 cursor-pointer`}
>
  <ArrowUp />
</button>


  );
};

export default ScrollToTopButton;