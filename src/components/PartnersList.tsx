'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export function PartnersList() {
  const [visiblePartners, setVisiblePartners] = useState(new Set());
  const [currentPage, setCurrentPage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const partnerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const partners = [
    { id: '1', name: 'Partner 1', logo: '/partners/partner1.svg' },
    { id: '2', name: 'Partner 2', logo: '/partners/partner2.svg' },
    { id: '3', name: 'Partner 3', logo: '/partners/partner3.svg' },
    { id: '4', name: 'Partner 4', logo: '/partners/partner4.svg' },
    { id: '5', name: 'Partner 5', logo: '/partners/partner5.svg' },
    { id: '6', name: 'Partner 6', logo: '/partners/partner6.svg' },
  ];

  const partnersPerPage = 3;
  const totalPages = Math.ceil(partners.length / partnersPerPage);
  const currentPartners = partners.slice(
    currentPage * partnersPerPage,
    (currentPage + 1) * partnersPerPage
  );

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
    setVisiblePartners(new Set()); // Reset visibility for new page
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    setVisiblePartners(new Set()); // Reset visibility for new page
  };

  useEffect(() => {
    partnerRefs.current = partnerRefs.current.slice(0, partnersPerPage);
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const partnerId = entry.target.getAttribute('data-partner-id');
          if (partnerId) {
            setVisiblePartners(prev => new Set([...prev, partnerId]));
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    partnerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [currentPage]); // Reset observer when page changes

  return (
    <section id="partners" className="relative overflow-hidden py-24">
      {/* Background effects */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-purple-600/5 to-blue-600/5"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="max-w-[2000px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-6 relative inline-block min-h-[4rem] md:min-h-[5rem] flex items-center justify-center">
            Our Partners
            <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-highlight/50 to-transparent rounded-full"></span>
          </h2>
          <p className="text-xl text-text-light/80 max-w-3xl mx-auto min-h-[3.5rem] flex items-center justify-center">
            Collaborating with industry leaders to deliver exceptional solutions
          </p>
        </div>

        {/* Partners Grid */}
        <div className="relative">
          <div 
            ref={containerRef}
            className="grid grid-cols-3 gap-8 md:gap-12"
          >
            {currentPartners.map((partner, index) => (
              <div
                key={partner.id}
                ref={el => partnerRefs.current[index] = el}
                data-partner-id={partner.id}
                className={`
                  relative group
                  transform transition-all duration-500
                  ${visiblePartners.has(partner.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className="
                  bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-blue-800/20
                  backdrop-blur-sm rounded-2xl p-8
                  transition-all duration-300
                  border border-blue-500/10
                  hover:border-accent-highlight/30
                  hover:bg-gradient-to-br hover:from-blue-800/30 hover:via-purple-800/30 hover:to-blue-700/30
                  hover:shadow-2xl hover:shadow-accent-highlight/20
                  flex items-center justify-center
                  h-[550px]
                  overflow-hidden
                  group
                ">
                  <div className="relative w-full h-[calc(100%-32px)] flex items-center justify-center">
                    <div className="relative w-full h-4/5">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain brightness-200 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center mt-12 gap-8">
            <button
              onClick={handlePrevPage}
              className="
                px-6 py-3 rounded-xl
                bg-gradient-to-r from-blue-900/20 to-purple-900/20
                hover:from-blue-800/30 hover:to-purple-800/30
                border border-blue-500/10 hover:border-accent-highlight/30
                transition-all duration-300
                text-text-light/80 hover:text-text-light
                flex items-center gap-2
              "
            >
              <span className="text-2xl">←</span>
              Previous
            </button>
            <div className="text-text-light/80">
              Page {currentPage + 1} of {totalPages}
            </div>
            <button
              onClick={handleNextPage}
              className="
                px-6 py-3 rounded-xl
                bg-gradient-to-r from-purple-900/20 to-blue-900/20
                hover:from-purple-800/30 hover:to-blue-800/30
                border border-blue-500/10 hover:border-accent-highlight/30
                transition-all duration-300
                text-text-light/80 hover:text-text-light
                flex items-center gap-2
              "
            >
              Next
              <span className="text-2xl">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 