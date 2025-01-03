// The section of the website which contains information about me.

import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AboutTitle from './AboutTitle.js';
import React, { useRef } from "react";
import AboutImage from './resources/okpic.jpg';
import useElementOnScreen from '../hooks/useElementOnScreen';

import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

import { FaBriefcase } from 'react-icons/fa'
import { FaGraduationCap } from 'react-icons/fa'
import { FaCode } from 'react-icons/fa'
import { FaGamepad } from 'react-icons/fa'

export default function About() {

  const targetRef = useRef(null);
  const isVisible = useElementOnScreen({
    root: null, 
    rootMargin: '0px', 
    threshold: 0.4
  }, targetRef, true);

  return (
    <section id="about">
      <div class="AboutStyle">
        <div class="AboutContainer" ref={targetRef}>
          <div class={`${isVisible ? 'leftAboutSec animated animatedFadeInUp fadeInUp' : 'leftAboutSec'}`} style={{ visibility: `${isVisible ? 'visible' : 'hidden'}` }}>
            <AboutTitle
              heading="About Me"
            />
            <div class="AboutBody">
              <div class="AboutCategory">
                <FaGraduationCap size="30px" /> <div class="Education">
                  <span>4B Bachelor of Computer Science with AI Specialization, Minor in Statistics</span>
                  <br/>
                  <span>University of Waterloo, Ontario, Canada</span>
                  <br/>
                  <span>Cumulative Average: 92.88%</span>
                  </div>
              </div>
              <div class="AboutCategory">
                <FaBriefcase size="30px" /> <div class="Internships"><span>Currently seeking 2025 New Grad SWE Roles!</span></div>
              </div>
              <div class="AboutCategory">
                <FaCode size="30px" /> <div class="Skills"><span>My technical skillset lies in fullstack development, with 2+ years of work experience in React, JavaScript/TypeScript, C#/.NET, and SQL.</span></div>
              </div>
              <div class="AboutCategory">
                <FaGamepad size="30px" /> <div class="Hobbies"><span>My interests lie in AI/ML, data science, video game development, and embedded/real-time systems. Outside of coding, I enjoy swimming, playing video games, mathematics, rock climbing, travelling, and cooking!</span></div>
              </div>
            </div>
            <div class="AboutSecButtons">
              <div class="container green-diamond" onClick={() => { window.location.href = 'mailto:wanv2002@gmail.com' }}>
                <div class="diamond-icons"><HiOutlineMail size="30px" /></div>
              </div>
              <div class="container green-diamond" onClick={() => { window.open('https://www.linkedin.com/in/vincent-t-wan/') }}>
                <div class="diamond-icons"><FaLinkedinIn size="30px" /></div>
              </div>
              <div class="container green-diamond" onClick={() => { window.open('https://www.github.com/vincent-t-wan/') }}>
                <div class="diamond-icons"><FaGithub size="30px" /></div>
              </div>
            </div>
          </div>
          <div class={`${isVisible ? 'rightAboutSec animated animatedFadeInUp fadeInUp' : 'rightAboutSec'}`} style={{ visibility: `${isVisible ? 'visible' : 'hidden'}` }}>
            <img src={AboutImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}