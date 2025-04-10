'use client';

import { services } from '@/data/services';
import { Cog, BarChart3, HeadphonesIcon, Code } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import '@/app/stylings/ServicesList.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const getIconForService = (serviceId) => {
  switch (serviceId) {
    case "1":
      return <Cog className="service-icon service-icon-cog" />;
    case "2":
      return <BarChart3 className="service-icon service-icon-chart" />;
    case "3":
      return <HeadphonesIcon className="service-icon service-icon-headphones" />;
    case "4":
      return <Code className="service-icon service-icon-code" />;
    default:
      return null;
  }
};

export function ServicesList() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = cardsRef.current;
    
    // Initial state - cards are hidden below the screen
    gsap.set(cards, {
      y: '100vh',
      opacity: 0
    });

    // Create ScrollTrigger for the container
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 80%",
      onEnter: () => {
        // Animate each card with a quick stagger effect and bounce
        cards.forEach((card, index) => {
          gsap.to(card, {
            y: -50, // Move up slightly past the final position
            opacity: 1,
            duration: 0.6,
            delay: index * 0.15,
            ease: "power2.out",
            onComplete: () => {
              // Bounce back to final position
              gsap.to(card, {
                y: 0,
                duration: 0.3,
                ease: "bounce.out"
              });
            }
          });
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleCardClick = (webRoute) => {
    window.location.href = `/services/${webRoute}`;
  };

  return (
    <section id="services" className="services-section">
      {/* Background effects */}
      <div className="section-bg-gradient"></div>
      <div className="section-bg-blur section-bg-blur-top"></div>
      <div className="section-bg-blur section-bg-blur-bottom"></div>

      {/* Content */}
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            Our Services
            <span className="section-title-underline"></span>
          </h2>
        </div>

        {/* Services Grid */}
        <div 
          ref={containerRef}
          className="services-container"
          data-hovered={hoveredCard}
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={el => cardsRef.current[index] = el}
              className={`service-card ${hoveredCard === service.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick(service.web)}
            >
              <div className="service-card-header">
                <div className="service-icon-wrapper">
                  {getIconForService(service.id)}
                </div>
              </div>
              
              <h3 className="service-card-title">
                {service.title}
              </h3>
              
              <p className="service-card-description">
                {service.description}
              </p>

              {service.features && (
                <div className="service-features">
                  <h4 className="service-features-title">Features</h4>
                  <ul className="service-features-list">
                    {service.features.map((feature, idx) => (
                      <li key={`feature-${idx}`} className="service-feature-item">
                        <span className="service-feature-bullet"></span>
                        <span className="service-feature-text">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}