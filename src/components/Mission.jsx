'use client'
import React, { useEffect } from 'react';
import { RocketIcon, EyeIcon, StarIcon } from 'lucide-react'
import { motion, useScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';
import { usePathname } from 'next/navigation';
import '../app/stylings/Mission.css';
import WifiAnimation from './ui/WiFiAnimation';

const AnimatedText = ({ text }) => {
  return (
    <div className="animated-title-container">
      <h2 className="animated-title">
        {text}
      </h2>
    </div>
  );
};

// Fun animated Mission component
export function Mission() {
  const { scrollYProgress } = useScroll();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  const pathname = usePathname();
  const isProd = process.env.NODE_ENV === 'production';
  const basePath = isProd ? '/TSTLUXKOM' : '';

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
      icon: <StarIcon className="value-icon" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, delivering the highest quality solutions and services to our clients."
    },
    {
      icon: <RocketIcon className="value-icon" />,
      title: "Innovation",
      description: "We embrace innovation and cutting-edge technology to provide forward-thinking solutions that drive business success."
    },
    {
      icon: <EyeIcon className="value-icon" />,
      title: "Integrity",
      description: "We maintain the highest standards of integrity, ensuring trust and reliability in all our business relationships."
    }
  ];

  return (
    <section id="about" className="mission-section" ref={ref}>
      {inView && (
        <WifiAnimation 
          color="#FF69B4"
          thickness={1}
          arcCount={12}
          threshold={0.2}
          triggerOnce={true}
        />
      )}
      <div className="mission-container">
        <div className="mission-content">
          {/* Company History Card */}
          <animated.div 
            className="history-card"
            style={springProps}
          >
            <div className="card-header">
              <AnimatedText text="Our Journey to the Stars" />
            </div>
            <div className="history-content">
              <p>
                Founded in 2020, TST LUXKOM emerged as a visionary force in satellite communications. 
                From our humble beginnings in Luxembourg, we've grown into a trusted partner for global SATCOM solutions, 
                combining technical expertise with innovative approaches to meet the evolving needs of the space industry.
              </p>
            </div>
          </animated.div>

          {/* Core Values Card */}
          <animated.div 
            className="core-values-card"
            style={springProps}
          >
            <div className="card-header">
              <AnimatedText text="Core Values" />
            </div>
            <div className="values-container">
              {values.map((value, index) => (
                <div key={value.title} className="value-card">
                  <div className="value-icon-wrapper">
                    {value.icon}
                  </div>
                  <h3 className="value-title">{value.title}</h3>
                  <p className="value-description">{value.description}</p>
                </div>
              ))}
            </div>
          </animated.div>
        </div>
      </div>
    </section>
  );
}

export default Mission;