import React, { useState, useEffect } from 'react';
// import { FaArrowUp } from 'react-icons/fa';
import {AiOutlineToTop} from 'react-icons/ai'
import './ScrollTop.css'

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show scroll to top icon when user has scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add event listener when component mounts
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top when user clicks on icon
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div onClick={scrollToTop} className={`scroll-to-top shadow ${isVisible ? 'visible' : 'hidden'}`}>
      {/* <FaArrowUp onClick={scrollToTop} /> */}
      <AiOutlineToTop/>
    </div>
  );
};

export default ScrollTop;
