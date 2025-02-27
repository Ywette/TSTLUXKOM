// app/partners/page.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HandshakeIcon } from 'lucide-react';


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
    <section id="partners" className="flex flex-wrap justify-center items-center pt-24 h-screen">
      {partners.map((partner, index) => (
        <div
          key={index}
          className="relative mr-20 mb-20"
          onMouseEnter={() => {
            console.log('Hovering partner:', index); // Debug hover
            setHoveredPartner(index);
          }}
          onMouseLeave={() => setHoveredPartner(null)}
        >
          <Link href={partner.url} target="_blank">
            <div className="relative">
              <Image
                src={partner.img}
                alt={partner.alt}
                width={200}
                height={100}
                className="object-contain"
              />
              {hoveredPartner === index && (
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 transition-all duration-300 opacity-100 z-50 bg-white p-2 rounded-full shadow-lg">
                  <HandshakeIcon className="h-8 w-8 text-blue-600 animate-bounce" />
                </div>
              )}
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
 }