/**
 * About section component
 * Displays information about the user including education, work, skills, and social links
 */

import './About.css';
import PropTypes from 'prop-types';
import AboutTitle from './AboutTitle.js';
import React, { useRef } from "react";
import AboutImage from './resources/okpic.jpg';
import useElementOnScreen from '../hooks/useElementOnScreen';
import { SOCIAL_LINKS, INTERSECTION_OBSERVER_OPTIONS } from '../constants';

import { FaLinkedinIn, FaGithub, FaBriefcase, FaGraduationCap, FaCode, FaGamepad } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

/**
 * SocialButton component for reusable social link buttons
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.icon - Icon element to display
 * @param {Function} props.onClick - Click handler function
 * @param {string} props.className - CSS class name for styling
 */
const SocialButton = ({ icon, onClick, className }) => (
  <div className={`container ${className}`} onClick={onClick}>
    <div className="diamond-icons">{icon}</div>
  </div>
);

SocialButton.propTypes = {
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

SocialButton.defaultProps = {
  className: 'green-diamond',
};

/**
 * AboutCategory component for individual about section items
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.icon - Icon element to display
 * @param {React.ReactNode} props.children - Content to display
 * @param {string} props.className - CSS class name for the content wrapper
 */
const AboutCategory = ({ icon, children, className }) => (
  <div className="AboutCategory">
    {icon}
    <div className={className}>{children}</div>
  </div>
);

AboutCategory.propTypes = {
  icon: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

/**
 * Handles opening external URLs in a new window
 * @param {string} url - URL to open
 */
const openExternalLink = (url) => {
  window.open(url);
};

/**
 * Handles navigating to email
 * @param {string} email - Email address (mailto: format)
 */
const openEmailLink = (email) => {
  window.location.href = email;
};

/**
 * Main About section component
 */
export default function About() {
  const targetRef = useRef(null);
  const isVisible = useElementOnScreen({
    ...INTERSECTION_OBSERVER_OPTIONS,
    threshold: 0.4
  }, targetRef, true);

  const visibilityStyle = { visibility: isVisible ? 'visible' : 'hidden' };
  const animatedClass = isVisible ? 'animated animatedFadeInUp fadeInUp' : '';

  return (
    <section id="about">
      <div className="AboutStyle">
        <div className="AboutContainer" ref={targetRef}>
          <div
            className={`leftAboutSec ${animatedClass}`}
            style={visibilityStyle}
          >
            <AboutTitle heading="About Me" />
            <div className="AboutBody">
              <AboutCategory icon={<FaGraduationCap size="30px" />} className="Education">
                <span>Bachelor of Computer Science with AI Specialization, Minor in Statistics</span>
                <br/>
                <span>University of Waterloo, Ontario, Canada</span>
                <br/>
                <span>Cumulative Average: 93.05%</span>
              </AboutCategory>
              <AboutCategory icon={<FaBriefcase size="30px" />} className="Internships">
                <span>Currently an SWE at Dayforce!</span>
              </AboutCategory>
              <AboutCategory icon={<FaCode size="30px" />} className="Skills">
                <span>My technical skillset lies in fullstack development, with 3+ years of work experience in React, JavaScript/TypeScript, C#/.NET, and SQL.</span>
              </AboutCategory>
              <AboutCategory icon={<FaGamepad size="30px" />} className="Hobbies">
                <span>My interests lie in AI/ML and data science. Outside of coding, I enjoy rock climbing, video games, mathematics, travelling, and cooking!</span>
              </AboutCategory>
            </div>
            <div className="AboutSecButtons">
              <SocialButton
                icon={<HiOutlineMail size="30px" />}
                onClick={() => openEmailLink(SOCIAL_LINKS.EMAIL)}
              />
              <SocialButton
                icon={<FaLinkedinIn size="30px" />}
                onClick={() => openExternalLink(SOCIAL_LINKS.LINKEDIN)}
              />
              <SocialButton
                icon={<FaGithub size="30px" />}
                onClick={() => openExternalLink(SOCIAL_LINKS.GITHUB)}
              />
            </div>
          </div>
          <div
            className={`rightAboutSec ${animatedClass}`}
            style={visibilityStyle}
          >
            <img src={AboutImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
