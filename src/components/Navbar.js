// The section of the website with the navigation bar.

import './Navbar.css';
import myFile from "./resources/wanv-resume.pdf";
import React, { useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = React.useState(true);
  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(true);
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })
  let navbarClasses = ['navbar'];
  if (scrolled) {
    navbarClasses.push('scrolled');
  }
  return (
    <header className={navbarClasses.join(" ")}>
      <div class="container">
        <nav>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#experiences">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contacts">Contact Me</a></li>
            <li><a href={myFile} target="blank">My Resume</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );

}