'use client';

import { services } from '@/data/services';
import Button from './ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import { Cog, BarChart3, HeadphonesIcon, Code } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const getIconForService = (serviceId: string) => {
  switch (serviceId) {
    case "1":
      return <Cog className="w-8 h-8 text-accent-highlight transition-all duration-300 group-hover:rotate-90" />;
    case "2":
      return <BarChart3 className="w-8 h-8 text-accent-highlight transition-all duration-300 group-hover:scale-110" />;
    case "3":
      return <HeadphonesIcon className="w-8 h-8 text-accent-highlight transition-all duration-300 group-hover:scale-110" />;
    case "4":
      return <Code className="w-8 h-8 text-accent-highlight transition-all duration-300 group-hover:scale-110" />;
    default:
      return null;
  }
};

export function ServicesList() {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [allCardsVisible, setAllCardsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleCardClick = (serviceId: string) => {
    const serviceRoutes: { [key: string]: string } = {
      "1": "/services/software-development",
      "2": "/services/data-analytics",
      "3": "/services/customer-support",
      "4": "/services/web-development"
    };
    window.location.href = serviceRoutes[serviceId];
  };

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, services.length);
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cardId = entry.target.getAttribute('data-card-id');
          if (cardId) {
            setVisibleCards(prev => new Set([...prev, cardId]));
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Check if all cards are visible
    if (visibleCards.size === services.length && !allCardsVisible) {
      setAllCardsVisible(true);
    }
  }, [visibleCards]);

  return (
    <section id="services" className="relative overflow-hidden py-24">
      {/* Background effects */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-blue-600/5 to-purple-600/5"></div>
      <div className="absolute top-40 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 my-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-6 relative inline-block">
            Our Services
            <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-highlight/50 to-transparent rounded-full"></span>
          </h2>
          {/* <p className="text-xl text-text-light/80 max-w-3xl mx-auto">
            Comprehensive solutions tailored to empower your business in the digital age
          </p> */}
        </div>

        {/* Services Grid */}
        <div 
          ref={containerRef}
          className={`services-container ${allCardsVisible ? 'all-visible' : ''}`}
          data-hovered={hoveredCard}
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={el => cardRefs.current[index] = el}
              data-card-id={service.id}
              className={`
                service-card
                bg-white/5 backdrop-blur-sm rounded-2xl
                cursor-pointer
                ${visibleCards.has(service.id) ? 'opacity-100' : 'opacity-0'}
                ${hoveredCard === service.id ? 'hovered' : ''}
              `}
              style={{
                transitionDelay: hoveredCard ? '0ms' : `${index * 200}ms`
              }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick(service.id)}
            >
              <div className="p-8 h-full flex flex-col">
                <div className="mb-6 flex justify-between items-center">
                  <div className="flex items-center">
                    {getIconForService(service.id)}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-accent-highlight mb-4 uppercase">
                  {service.title}
                </h3>
                
                <p className="text-lg text-text-light/80 mb-6 group-hover:text-text-light/90">
                  {service.description}
                </p>

                {service.features && (
                  <ul className="space-y-3 flex-grow">
                    {service.features.map((feature, idx) => (
                      <li 
                        key={idx} 
                        className="flex items-start space-x-3 text-text-light/80"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-highlight mt-2.5"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}