/**
 * Contact section component
 * Displays contact information and social media links
 */

import './Contact.css';
import React from "react";
import PropTypes from 'prop-types';
import { SOCIAL_LINKS } from '../constants';

import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

/**
 * ContactButton component for reusable contact link buttons
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.icon - Icon element to display
 * @param {Function} props.onClick - Click handler function
 */
const ContactButton = ({ icon, onClick }) => (
  <div className="container white-circle" onClick={onClick}>
    <div className="circle-icons">{icon}</div>
  </div>
);

ContactButton.propTypes = {
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
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
 * Main Contact section component
 */
export default function Contact() {
  return (
    <section id="contacts">
      <header className="contactbar">
        <div className="cbar">
          <p>Contact Me</p>
          <div className="contacts">
            <ContactButton
              icon={<HiOutlineMail size="30px" />}
              onClick={() => openEmailLink(SOCIAL_LINKS.EMAIL)}
            />
            <ContactButton
              icon={<FaLinkedinIn size="30px" />}
              onClick={() => openExternalLink(SOCIAL_LINKS.LINKEDIN)}
            />
            <ContactButton
              icon={<FaGithub size="30px" />}
              onClick={() => openExternalLink(SOCIAL_LINKS.GITHUB)}
            />
          </div>
        </div>
      </header>
    </section>
  );
}
