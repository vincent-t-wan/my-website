import './Contact.css';
import React from "react";
import PropTypes from 'prop-types';
import { SOCIAL_LINKS } from '../constants';

import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const ContactButton = ({ icon, onClick }) => (
  <div className="container white-circle" onClick={onClick}>
    <div className="circle-icons">{icon}</div>
  </div>
);

ContactButton.propTypes = {
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

const openExternalLink = (url) => {
  window.open(url);
};

const openEmailLink = (email) => {
  window.location.href = email;
};

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
