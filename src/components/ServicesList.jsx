'use client';

import React from 'react';
import { services } from '@/data/services';
import { Cog, BarChart3, HeadphonesIcon, Code } from 'lucide-react';
import { useState, useRef } from 'react';
import '../app/stylings/ServicesList.css';

const getIconForService = (serviceId) => {
  const className = 'service-icon';
  switch (serviceId) {
    case '1':
      return <Cog className={className + ' rotate-effect'} />;
    case '2':
      return <BarChart3 className={className + ' scale-effect'} />;
    case '3':
      return <HeadphonesIcon className={className + ' scale-effect'} />;
    case '4':
      return <Code className={className + ' scale-effect'} />;
    default:
      return null;
  }
};

export function ServicesList() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const cardRefs = useRef([]);

  const nonHovered = services.filter((s) => s.id !== hoveredCard);
  const hovered = services.find((s) => s.id === hoveredCard);

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-gradient">Our Services</h2>
        </div>

        <div className="stacked-services">
          {nonHovered.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              setHoveredCard={setHoveredCard}
              ref={el => cardRefs.current[index] = el}
            />
          ))}
          {hovered && (
            <ServiceCard
              key={hovered.id}
              service={hovered}
              setHoveredCard={setHoveredCard}
              ref={el => cardRefs.current[services.findIndex(s => s.id === hovered.id)] = el}
            />
          )}
        </div>
      </div>
    </section>
  );
}

const ServiceCard = React.forwardRef(({ service, setHoveredCard }, ref) => {
  return (
    <div
      ref={ref}
      className="service-card"
      style={{ 
        left: `${5 + 23 * (parseInt(service.id) - 1)}%`
      }}
      onMouseEnter={() => setHoveredCard(service.id)}
      onMouseLeave={() => setHoveredCard(null)}
      onClick={() => {
        window.location.href = `/services/${service.web}`;
      }}
    >
      <div className="service-card-content">
        <div className="service-icon-wrapper">
          {getIconForService(service.id)}
        </div>
        <h3 className="service-title">{service.title}</h3>
        <p className="service-description">{service.description}</p>
        {service.features && (
          <ul className="service-features">
            {service.features.map((feature, idx) => (
              <li key={idx} className="service-feature">
                <span className="feature-dot"></span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
});
