import React from 'react';
import '../stylings/HeroSection.css';
import OrbitCircles from './OrbitCircles';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <OrbitCircles />
      <div className="hero-container">
        {/* Rest of your hero section content */}
      </div>
    </section>
  );
};

export default HeroSection; 