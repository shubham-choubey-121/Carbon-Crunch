import React from "react";
import "./HeroSection.css";
import industrialGlobe from "../../assets/image.png";


const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1>Revolutionizing Carbon Management</h1>
        <p>Helping industries transition to a sustainable future.</p>
      </div>
      <div className="hero-image">
        <img src={industrialGlobe} alt="Industrial Globe" />
      </div>
    </section>
  );
};

export default HeroSection;
