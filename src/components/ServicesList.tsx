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
      <style jsx>{`
        .services-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          position: relative;
        }

        .service-card {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          width: 100%;
          z-index: 1;
        }

        @media (min-width: 1024px) {
          .services-container {
            position: relative;
            height: 600px;
            overflow: visible;
          }

          .service-card {
            position: absolute;
            width: 23%;
            height: 550px;
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            transform-style: preserve-3d;
            backface-visibility: hidden;
          }

          /* Expanded card */
          .service-card.hovered {
            width: 45%;
            z-index: 10;
            transform: translateZ(0);
          }

          .service-card:nth-child(1) { left: 0%; }
          .service-card:nth-child(2) { left: 25%; }
          .service-card:nth-child(3) { left: 50%; }
          .service-card:nth-child(4) { left: 75%; }

          /* Icon animation delay */
          .service-card.hovered svg {
            transition-delay: 0.5s;
          }

          /* Set styles for non-hovered cards */
          .services-container[data-hovered] .service-card:not(.hovered) {
            opacity: 0.4;
            h3 {
              color: white;
            }
          }

          /* First card expansion (to the right) */
          .services-container[data-hovered="1"] {
            .service-card:nth-child(2) {
              transform: translateX(65%);
              z-index: 3;
            }
            .service-card:nth-child(3) {
              transform: translateX(35%);
              z-index: 2;
            }
            .service-card:nth-child(4) {
              transform: translateX(0) !important;
              z-index: 1;
            }
          }

          /* Second card behavior */
          .services-container[data-hovered="2"] {
            .service-card.hovered {
              transform: translateX(0) !important;
              width: 46%;
              left: 25%;
              margin-left: -11.5%;
            }
            .service-card:nth-child(1) {
              transform: translateX(0);
            }
            .service-card:nth-child(3) {
              transform: translateX(25%);
              z-index: 2;
            }
            .service-card:nth-child(4) {
              transform: translateX(0) !important;
              z-index: 1;
            }
          }

          /* Third card behavior */
          .services-container[data-hovered="3"] {
            .service-card.hovered {
              transform: translateX(35%) !important;
              width: 46%;
              left: 50%;
              margin-left: -34.5%;
            }
            .service-card:nth-child(1) {
              transform: translateX(0);
            }
            .service-card:nth-child(2) {
              transform: translateX(-35%);
              z-index: 3;
            }
            .service-card:nth-child(4) {
              transform: translateX(0) !important;
              z-index: 1;
            }
          }

          /* Fourth card expansion (to the left) */
          .services-container[data-hovered="4"] {
            .service-card.hovered {
              transform: translateX(-45%) !important;
            }
            .service-card:nth-child(2) {
              transform: translateX(-35%);
              z-index: 2;
            }
            .service-card:nth-child(3) {
              transform: translateX(-65%);
              z-index: 3;
            }
          }

          /* Add subtle shadow to create depth for stacked cards */
          .service-card:not(.hovered) {
            box-shadow: -5px 0 10px rgba(0, 0, 0, 0.1);
          }

          /* Reverse shadow for cards stacked to the left */
          .services-container[data-hovered="4"] .service-card:not(.hovered) {
            box-shadow: 5px 0 10px rgba(0, 0, 0, 0.1);
          }

          /* Border animation styles */
          .services-container.all-visible .service-card {
            animation: none;
          }

          .services-container.all-visible .service-card:nth-child(1) {
            animation: flashShadow 0.4s ease-in-out 1.3s;
          }

          .services-container.all-visible .service-card:nth-child(2) {
            animation: flashShadow 0.4s ease-in-out 1.5s;
          }

          .services-container.all-visible .service-card:nth-child(3) {
            animation: flashShadow 0.4s ease-in-out 1.7s;
          }

          .services-container.all-visible .service-card:nth-child(4) {
            animation: flashShadow 0.4s ease-in-out 1.9s;
          }

          @keyframes flashShadow {
            0%, 100% {
              box-shadow: none;
            }
            50% {
              box-shadow: 0 0 35px rgba(255, 255, 255, 0.8);
            }
          }
        }
      `}</style>

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
          className={`services-container mt-10 mb-10 ${hoveredCard ? 'has-hovered' : ''} ${allCardsVisible ? 'all-visible' : ''}`}
          data-hovered={hoveredCard}
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={el => cardRefs.current[index] = el}
              data-card-id={service.id}
              className={`
                service-card group relative bg-white/5 backdrop-blur-sm rounded-2xl
                transition-all duration-500 cursor-pointer
                ${visibleCards.has(service.id) ? 'opacity-100' : 'opacity-0'}
                ${hoveredCard === service.id ? 'hovered' : ''}
                hover:shadow-2xl hover:shadow-accent-highlight/20
              `}
              style={{
                transitionDelay: hoveredCard ? '0ms' : `${index * 200}ms`
              }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick(service.id)}
            >
              {/* Content */}
              <div className="relative z-10 px-8 py-12 flex flex-col">
                <div className="mb-6 flex justify-between items-center">
                  <div className="flex items-center">
                    {getIconForService(service.id)}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-accent-highlight mb-4 uppercase transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-lg text-text-light/80 mb-6 transition-colors duration-300 group-hover:text-text-light/90">
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