'use client';

import { services } from '@/data/services';
import Button from './ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import { Cog, BarChart3, HeadphonesIcon, Code } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

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
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [allCardsVisible, setAllCardsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    // Set all cards visible after a short delay
    const timer = setTimeout(() => {
      setAllCardsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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
              className={`
                service-card group
                bg-white/5 backdrop-blur-sm rounded-2xl
                cursor-pointer
                ${allCardsVisible ? 'opacity-100' : 'opacity-0'}
                ${hoveredCard === service.id ? 'hovered' : ''}
              `}
              style={{
                transitionDelay: hoveredCard ? '0ms' : `${index * 200}ms`,
                animationDelay: `${1.3 + index * 0.2}s`
              }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => {
                router.push(`/services/${service.web}`);
              }}
            >
              <div className="px-8 py-12 h-full flex flex-col">
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