import React from 'react';
import Hero from './components/Hero';
import About from './components/about'; 
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Blog from './components/Blog';
import Contact from './components/Contact';



function App() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
