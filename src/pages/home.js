import './home.css';
import Navbar from '../components/Navbar';
import Title from '../components/Title';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import React from 'react';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Title />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}