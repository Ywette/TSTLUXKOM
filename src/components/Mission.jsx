'use client'
import React, { useState, useEffect } from 'react';
import { RocketIcon, EyeIcon, StarIcon } from 'lucide-react'
import '../app/stylings/Mission.css';

// Fun animated Mission component
const Mission = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    // Trigger entrance animations after component mounts
    setIsLoaded(true);
    
    // Create a starry background effect
    const createStars = () => {
      const stars = [];
      for (let i = 0; i < 100; i++) {
        const style = {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${5 + Math.random() * 10}s`
        };
        stars.push(<div key={i} className="star" style={style} />);
      }
      return stars;
    };
    
    return () => {
      setIsLoaded(false);
    };
  }, []);

  return (
    <section className="mission-container">
      {/* Background effects */}
      <div className="bg-gradient"></div>
      <div className="bg-circle-top"></div>
      <div className="bg-circle-bottom"></div>

      <div className="content-container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            Our Philosophy
            <span className="title-underline"></span>
          </h2>
        </div>

        <div className="grid-layout">
          {/* Left Column: Mission & Vision */}
          <div className="content-left">
            <div className="value-item-group">
              <div className="value-item">
                <div className="value-hover-effect"></div>
                <div className="card-header">
                  <RocketIcon className="card-icon" />
                  <h3 className="value-title">Mission</h3>
                </div>
                <p className="value-text">
                  To provide innovative and reliable technology solutions that empower businesses to thrive in the digital age.
                </p>
              </div>
            </div>

            <div className="value-item-group">
              <div className="value-item">
                <div className="value-hover-effect"></div>
                <div className="card-header">
                  <EyeIcon className="card-icon" />
                  <h3 className="value-title">Vision</h3>
                </div>
                <p className="value-text">
                  To be the leading provider of technology services and solutions, recognized for our innovation, reliability, and commitment to customer success.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Core Values */}
          <div className="content-left">
            <div className="value-item-group">
              <div className="value-item">
                <div className="value-hover-effect"></div>
                <div className="card-header">
                  <StarIcon className="card-icon" />
                  <h3 className="value-title">Core Values</h3>
                </div>
                <div className="value-text">
                  <p><strong>Excellence:</strong> We strive for excellence in everything we do, from project delivery to customer service.</p>
                  <p><strong>Innovation:</strong> We embrace new technologies and creative solutions to solve complex challenges.</p>
                  <p><strong>Integrity:</strong> We conduct our business with the highest standards of professionalism and ethics.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional style for animations */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        
        @keyframes blob {
          0% {
            transform: scale(1);
          }
          33% {
            transform: scale(1.1);
          }
          66% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animate-text {
          background-size: 200% 200%;
          animation: gradient 5s ease infinite;
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  );
};

export default Mission;