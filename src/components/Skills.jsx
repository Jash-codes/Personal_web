import React from 'react';
import './Skills.css';
import { motion } from 'framer-motion';

const techSkills = [
  { name: "Python", level: 90 },
  { name: "Java", level: 85 },
  { name: "C++", level: 75 },
  { name: "SQL", level: 80 },
  { name: "JavaScript", level: 70 },
  { name: "SQL", level: 80 },
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
];

const tools = [
    { name: "Power BI", level: 90 },
    { name: "Jupyter", level: 85 },
    { name: "VS Code", level: 95 },
    { name: "Git", level: 90 },
    { name: "Streamlit", level: 85 },
    { name: "Flask", level: 80 },
    { name: "TensorFlow", level: 75 },
    { name: "Keras", level: 70 },
];

const softSkills = [
  "Problem-solving", "Teamwork", "Communication",
  "Leadership", "Presentation", "Adaptability"
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>

      <div className="skills-columns">
        <div className="skills-group">
          <h3>Tech Skills</h3>
          {techSkills.map((skill, index) => (
            <motion.div
              className="skill-bar"
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="skill-info">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="bar-container">
                <div className="bar-fill" style={{ width: `${skill.level}%` }}></div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="skills-group">
          <h3>Tools</h3>
          {tools.map((tool, index) => (
            <motion.div
              className="skill-bar"
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="skill-info">
                <span>{tool.name}</span>
                <span>{tool.level}%</span>
              </div>
              <div className="bar-container">
                <div className="bar-fill" style={{ width: `${tool.level}%` }}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="soft-skills"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3>Soft Skills</h3>
        <p>{softSkills.join(" • ")}</p>
      </motion.div>
    </section>
  );
};

export default Skills;
