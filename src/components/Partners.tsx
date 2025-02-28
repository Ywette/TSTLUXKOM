// app/partners/page.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Handshake } from 'lucide-react';


const partners = [
  {
    url: 'https://govsat.lu/',
    img: 'https://connectivity.esa.int/sites/default/files/LuxGovSat%20logo.jpg',
    alt: 'LuxGovSat SA'
  },
  {
    url: 'https://mae.gouvernement.lu/en.html',
    img: 'https://cdn.public.lu/pictures/logos/gov/fr/gov-light.png',
    alt: 'Ministry of Foreign and European Affairs'
  },
  {
    url: 'https://ses-techcom.com',
    img: 'https://ses-techcom.com/wp-content/themes/oxo-theme/dist/img/logo.svg',
    alt: 'SES Techcom'
  },
  {
    url: 'https://tstgroup.de',
    img: 'https://tstgroup.de/images/tfb.png',
    alt: 'TST Fahrzeugbau'
  },
  {
    url: 'https://www.ipcopter.com/de/',
    img: 'https://tstgroup.de/images/ipcopter.gif',
    alt: 'IP Copter'
  }
];



export default function Partners() {
  const [hoveredPartner, setHoveredPartner] = useState<number | null>(null);
  
  console.log('Current hovered partner:', hoveredPartner); // Debug state
 
  return (
    <div className="relative w-full overflow-hidden">
      {/* Top transition gradient */}
      <div className="h-32 bg-gradient-to-b from-primary to-white" />
      
      <section id="partners" className="bg-white">
        <div className="flex flex-col items-center py-24">
          <h2 className="text-3xl font-bold text-primary mb-16">Our Partners</h2>
          <div className="flex items-center justify-center gap-32 max-w-7xl mx-auto px-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="relative w-[200px] h-[100px] flex items-center justify-center"
                onMouseEnter={() => setHoveredPartner(index)}
                onMouseLeave={() => setHoveredPartner(null)}
              >
                <Link href={partner.url} target="_blank" className="w-full h-full flex items-center justify-center">
                  <div className="relative group w-full h-full flex items-center justify-center">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={partner.img}
                        alt={partner.alt}
                        width={160}
                        height={80}
                        className="object-contain max-w-full max-h-full transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    {hoveredPartner === index && (
                      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 transition-all duration-300 opacity-100 z-50 bg-white p-2 rounded-full shadow-lg">
                        <Handshake className="h-8 w-8 text-primary animate-bounce" />
                      </div>
                    )}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom transition gradient */}
      <div className="h-32 bg-gradient-to-b from-white to-primary" />
    </div>
  );
 }