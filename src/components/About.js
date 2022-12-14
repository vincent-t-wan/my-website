// The section of the website which contains information about me.

import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AboutTitle from './AboutTitle.js';
import React, { useEffect } from "react";
import AboutImage from './resources/me.png';

import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

export default function About() {
  return (
    <section id="about">
      <div class="AboutStyle">
        <div class="AboutContainer">
          <div class="leftAboutSec">
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
          <div class="rightAboutSec">
            <img src={AboutImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}