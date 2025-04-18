import React from 'react';
import './Projects.css';
import { motion } from 'framer-motion';

const projectList = [
  {
    title: "Heart Disease Analysis",
    desc: "Diagnostic prediction and visualization using ML and Power BI.",
    tech: "Power BI, ML",
    link: "https://github.com/Jash-codes/Heart-Disease-Analysis.git",
  },
  {
    title: "Mushroom Classification",
    desc: "ML model with GUI to classify mushrooms as edible or poisonous.",
    tech: "Python, ML, GUI",
    link: "https://github.com/Jash-codes/iNueron-Mushroom-classification.git",
  },
  {
    title: "MedPredict",
    desc: "Multi-disease prediction app with six ML models.",
    tech: "Python, Streamlit",
    link: "https://github.com/Jash-codes/Medpredict.git",
  },
  {
    title: "Welding Flaws Detection",
    desc: "Image classification model for detecting welding anomalies.",
    tech: "Python, ML, Image Processing",
    link: "https://github.com/Jash-codes/Welding-Flaw-Detection.git",
  },
  {
    title: "Anomaly Detection in Stocks",
    desc: "Real-time anomaly detection in stock data with alerts.",
    tech: "Python, Streamlit, Isolation Forest",
    link: "https://github.com/Jash-codes/Anomalies-Detection.git",
  },
  {
    title: "Plant Disease Prediction",
    desc: "Deep learning-based image prediction system for leaf disease.",
    tech: "TensorFlow, Keras",
    link: "https://github.com/Jash-codes/Plant-disease-Prediction.git",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projectList.map((proj, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
            <span className="tech">{proj.tech}</span>
            <a href={proj.link} target="_blank" rel="noreferrer">
              🔗 View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
