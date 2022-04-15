import styles from './App.css';
import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Title from './components/Title';

const mystyle={
  background: 'linear-gradient(to bottom, #cdfdda 0%, #cdfdda 50%, #ffffff 50%, #ffffff 100%)'
}

export default function App() {
   return ( 
    
    <main style={mystyle}>
      <div class="main">
      <Navbar />
      <Title />
      <About />
      <Experience />
      <Projects />
      <Contact />
      </div>
    </main>
    
   );
 }
