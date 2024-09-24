import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
};

export default App;
