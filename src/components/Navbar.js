import './Navbar.css';
import myFile from "./resources/resume-wanv.pdf";
import { useEffect, useState, useCallback } from "react";
import { NAV_LINKS } from '../constants';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(true);

  const handleScroll = useCallback(() => {
    setScrolled(true);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

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
