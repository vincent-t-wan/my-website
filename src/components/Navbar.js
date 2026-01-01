/**
 * Navigation bar component
 * Displays navigation links and applies scroll-based styling
 */

import './Navbar.css';
import myFile from "./resources/resume-wanv.pdf";
import React, { useEffect, useState, useCallback } from "react";
import { NAV_LINKS } from '../constants';

/**
 * Navbar component with scroll-aware styling
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(true);

  /**
   * Handles scroll events to update navbar state
   */
  const handleScroll = useCallback(() => {
    setScrolled(true);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const navbarClasses = ['navbar', scrolled ? 'scrolled' : ''].filter(Boolean).join(' ');

  return (
    <header className={navbarClasses}>
      <div className="container">
        <nav>
          <ul>
            <li><a href={NAV_LINKS.ABOUT}>About Me</a></li>
            <li><a href={NAV_LINKS.EXPERIENCES}>Experience</a></li>
            <li><a href={NAV_LINKS.PROJECTS}>Projects</a></li>
            <li><a href={NAV_LINKS.CONTACTS}>Contact Me</a></li>
            <li><a href={myFile} target="blank">My Resume</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
