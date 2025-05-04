'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '../components/ui/Button';
import '../app/stylings/HeroSection.css';

export default function HeroSection() {
  const sectionRef = useRef(null);
  
  // Section visibility for animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      
      if (!isVisible) {
        section.classList.add('section-hidden');
      } else {
        section.classList.remove('section-hidden');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section className="hero-section" ref={sectionRef}>     
      <div className="hero-container">
        <div className="hero-content-wrapper">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-title-wrapper">
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
            Your Partner for
              
              <span className="hero-highlight">SATCOM Projects</span>
            </motion.h1>
            </div>
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Whether you're looking to enhance your service management, install or refurbish antennas, or optimize your RF equipment, we've got you covered.

At TST LUXKOM, we specialize in delivering seamless, reliable, and high-performance satellite communication solutions.
              </motion.p>
            
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <Link href="#services">
                <Button 
                className="button"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Discover Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="secondary-button button">
                  Tell About Your Project
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            y: [0, 10, 0]
          }}
          transition={{
            opacity: { delay: 1.2, duration: 0.8 },
            y: { duration: 2, repeat: Infinity, repeatType: "loop" }
          }}
        >
          <div className="scroll-indicator-arrow"></div>
        </motion.div>
      </div>
    </section>
  );
}