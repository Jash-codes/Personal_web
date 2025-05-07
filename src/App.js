import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/about'; 
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="skills"><Skills /></section>
      <section id="resume"><Resume /></section>
      <section id="blog"><Blog /></section>
      <section id="contact"><Contact /></section>
    </>
  );
}

export default App;
