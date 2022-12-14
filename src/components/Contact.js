// The section of the website containing my contacts.

import './Contact.css';
import React, { useEffect } from "react";

import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

export default function Contact() {
  return (
    <section id="contacts">
      <header className="contactbar">
        <div class="cbar">
          <p>Contact Me</p>
          <div class="contacts">
            <div class="container white-circle" onClick={() => { window.location.href = 'mailto:wanv2002@gmail.com' }}>
              <div class="circle-icons"><HiOutlineMail size="30px" /></div>
            </div>
            <div class="container white-circle" onClick={() => { window.location.href = 'https://www.linkedin.com/in/vincent-t-wan/' }}>
              <div class="circle-icons"><FaLinkedinIn size="30px" /></div>
            </div>
            <div class="container white-circle" onClick={() => { window.location.href = 'https://www.github.com/vincent-t-wan/' }}>
              <div class="circle-icons"><FaGithub size="30px" /></div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}