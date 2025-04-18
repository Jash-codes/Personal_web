import React from 'react';
import './Hero.css';
import { motion } from 'framer-motion';
import profilePic from '../assets/jash-profile.jpg'; // ✅ make sure this name matches your image

const Hero = () => {
  return (
    <section className="hero" id="home">
      <nav className="navbar">
        <a href="#home" className="nav-btn">Home</a>
        <a href="#about" className="nav-btn">About</a>
        <a href="#projects" className="nav-btn">Projects</a>
        <a href="#skills" className="nav-btn">Skills</a>
        <a href="#resume" className="nav-btn">Resume</a>
        <a href="#blog" className="nav-btn">Blog</a>
        <a href="#contact" className="nav-btn">Contact</a>
      </nav>

      <div className="hero-container">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Hi, I'm Jashwanth 👋</h1>
          <p>AI/ML Enthusiast • ML Engineer • Data Analyst • Web Developer • App Developer</p>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <img src={profilePic} alt="Jashwanth" className="hero-image" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;