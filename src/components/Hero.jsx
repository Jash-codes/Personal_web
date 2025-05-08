import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import profileCircle from "../assets/jash professional circle.png";

const Hero = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    const loadVanta = async () => {
      const THREE = await import("three");
      const VANTA = await import("vanta/dist/vanta.globe.min");

      if (!vantaEffect) {
        const effect = VANTA.default({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x31dfff,         // Glove Color
          color2: 0xffffff,        // Secondary Color
          backgroundColor: 0x23153c // Background
        });

        setVantaEffect(effect);
      }
    };

    loadVanta();

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

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
