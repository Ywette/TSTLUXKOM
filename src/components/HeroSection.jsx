'use client';
import React from 'react';
import Button from './ui/Button';
import Link from 'next/link';
import '../app/stylings/HeroSection.css';

function HeroSection() {
  const isProd = process.env.NODE_ENV === 'production';
  const basePath = isProd ? '/TSTLUXKOM' : '';

  return (
    <section className="hero-section">
      {/* Animated gradient background */}
      <div className="hero-gradient-bg"></div>

      {/* Decorative circles */}
      <div className="decorative-circle-1"></div>
      <div className="decorative-circle-2"></div>

      <div className="hero-container">
        <div className="hero-content-wrapper">
          <div className="hero-content">
            <h1 className="hero-title">
              Your Partner for
              <br />
              <span className="hero-highlight">SATCOM Projects</span>
            </h1>

            <p className="hero-description">
              Whether you're looking to enhance your service management, install or refurbish antennas, or optimize your RF equipment, we've got you covered. </p>
              <p className="hero-description">At TST LUXKOM, we specialize in delivering seamless, reliable, and high-performance satellite communication solutions.
            </p>

            <div className="hero-buttons">
              <Link href={`${basePath}/#services`}>
                <Button
                  className="text-lg px-8 py-4 font-semibold text-text-light w-full sm:w-auto"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Discover Services
                </Button>
              </Link>
              <Link href={`${basePath}/contact`}>
                <Button className="text-lg px-8 py-4 font-semibold border-2 border-accent-highlight bg-transparent hover:bg-accent-highlight/10 text-accent-highlight w-full sm:w-auto transition-colors">
                  Tell About Your Project
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        {/* <div className="scroll-indicator">
          <div className="scroll-indicator-line"></div>
        </div> */}
      </div>
    </section>
  );
}

export default HeroSection;