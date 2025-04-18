import React from 'react';
import './Contact.css';
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Let’s Connect</h2>
      <p>Reach out through any of these platforms 👇</p>

      <div className="contact-icons">
        <a href="https://www.instagram.com/jshwanthhh?igsh=YnVrdnkxbTVtbm8z" target="_blank" rel="noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/jashwanth-g-0b0a91276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Jash-codes" target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="mailto:youremail@example.com" target="_blank" rel="noreferrer" aria-label="Email">
          <FaEnvelope />
        </a>
      </div>

      <p className="email-text">📧 jashmr8@gmail.com</p>
    </section>
  );
};

export default Contact;
