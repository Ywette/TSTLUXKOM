'use client'
import React, { useState, useEffect, useRef } from 'react';
import { RocketIcon, EyeIcon, StarIcon } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';
import { usePathname } from 'next/navigation';
import '../app/stylings/Mission.css';

// Fun animated Mission component
export function Mission() {
  const { scrollYProgress } = useScroll();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const pathname = usePathname();
  const isProd = process.env.NODE_ENV === 'production';
  const basePath = isProd ? '/TSTLUXKOM' : '';

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { tension: 300, friction: 30 }
  });

  // Handle scroll to section when navigating from header
  useEffect(() => {
    if (pathname === `${basePath}/#about`) {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, basePath]);

  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, delivering the highest quality solutions and services to our clients."
    },
    {
      title: "Innovation",
      description: "We embrace innovation and cutting-edge technology to provide forward-thinking solutions that drive business success."
    },
    {
      title: "Integrity",
      description: "We maintain the highest standards of integrity, ensuring trust and reliability in all our business relationships."
    }
  ];

  return (
    <section id="about" className="mission-section" ref={ref}>
      <div className="mission-container">
        <motion.div 
          className="mission-content"
          style={{ opacity, y }}
        >
          <animated.div 
            className="core-values-card"
            style={springProps}
          >
            <div className="card-header">
              <h2 className="card-title">About Us</h2>
            </div>
            <div className="values-container">
              {values.map((value, index) => (
                <div key={value.title} className="value-card">
                  <h3 className="value-title">{value.title}</h3>
                  <p className="value-description">{value.description}</p>
                </div>
              ))}
            </div>
          </animated.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Mission;