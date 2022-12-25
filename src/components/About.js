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
            <p>
              I am Vincent. I like ...
            </p>
            <div class="AboutSecButtons">
              <div class="container green-diamond" onClick={() => { window.location.href = 'mailto:wanv2002@gmail.com' }}>
                <div class="diamond-icons"><HiOutlineMail size="30px" /></div>
              </div>
              <div class="container green-diamond" onClick={() => { window.location.href = 'https://www.linkedin.com/in/vincent-t-wan/' }}>
                <div class="diamond-icons"><FaLinkedinIn size="30px" /></div>
              </div>
              <div class="container green-diamond" onClick={() => { window.location.href = 'https://www.github.com/vincent-t-wan/' }}>
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