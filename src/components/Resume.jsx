import React from 'react';
import './Resume.css';
import { FaFilePdf } from 'react-icons/fa';

const Resume = () => {
  const resumeFile = require('../assets/G Jashwanth Resume.pdf');

  return (
    <section className="resume" id="resume">
      <div className="resume-icon">
        <FaFilePdf size={100} color="#007bff" />
      </div>

      <a href={resumeFile} download className="resume-btn">
        Download Resume
      </a>
    </section>
  );
};

export default Resume;
