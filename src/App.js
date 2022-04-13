import styles from './App.css';
import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Title from './components/Title';

export default function App() {
   return ( 
    <main className={styles.card}>
      <Navbar />
      <Title />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
   );
 }
