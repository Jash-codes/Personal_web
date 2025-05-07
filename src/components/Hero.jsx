import React, { useEffect, useRef } from "react";
import "./Hero.css";
import profileCircle from "../assets/jash professional circle.png";

const Hero = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    if (window.VANTA) {
      const effect = window.VANTA.GLOBE({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x3dfff,
        backgroundColor: 0x23153c,
      });

      return () => {
        if (effect && typeof effect.destroy === "function") effect.destroy();
      };
    }
  }, []);

  return (
    <div className="hero" ref={vantaRef}>
      <div className="hero-overlay">
        <img src={profileCircle} alt="Jashwanth" className="hero-image" />
        <div className="hero-text">
          <h1>Hi, I'm Jashwanth</h1>
          <p>IT Student | ML & AI Enthusiast | Data Analyst | Full-Stack Dev</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
