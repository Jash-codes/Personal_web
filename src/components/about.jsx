import React from 'react';
import './about.css';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="about" id="about">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="about-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        I'm currently pursuing my 3rd year B.Tech in Information Technology at Dr. M.G.R. Educational and
        Research Institute. I have a strong foundation in Artificial Intelligence, Machine Learning, Deep Learning,
        and Data Analysis. I'm passionate about leveraging innovative technologies to solve real-world challenges.
        I focus on building impactful, data-driven applications using tools like Jupyter Notebook, VS Code, Power BI, and Python.
      </motion.p>
    </section>
  );
};

export default About;