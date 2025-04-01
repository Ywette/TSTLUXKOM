'use client';

import { services } from '@/data/services';
import Link from 'next/link';
import { Cog, BarChart3, HeadphonesIcon, Code } from 'lucide-react';
import { useState } from 'react';
import '../app/stylings/ServicesList.css';

const getIconForService = (serviceId) => {
  switch (serviceId) {
    case "1":
      return <Cog className="service-icon" />;
    case "2":
      return <BarChart3 className="service-icon" />;
    case "3":
      return <HeadphonesIcon className="service-icon" />;
    case "4":
      return <Code className="service-icon" />;
    default:
      return null;
  }
};

export function ServicesList() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="services" className="services-section">
      {/* Background effects */}
      <div className="bg-gradient"></div>
      <div className="bg-circle-top"></div>
      <div className="bg-circle-bottom"></div>

      {/* Content */}
      <div className="content-container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            Our Services
            <span className="title-underline"></span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="services-container">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.web}`}
              className={`service-card ${hoveredCard === service.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="service-card-inner">
                <div className="card-header">
                  <div className="icon-container">
                    {getIconForService(service.id)}
                  </div>
                  <h3 className="service-title">
                    {service.title}
                  </h3>
                </div>
                
                <p className="service-description">
                  {service.description}
                </p>

                {service.features && (
                  <ul className="features-list">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="feature-item">
                        <span className="feature-dot"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}