'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Users } from 'lucide-react';
import '../app/stylings/Partners.css';

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
  const [hoveredPartner, setHoveredPartner] = useState(null);
  
  console.log('Current hovered partner:', hoveredPartner); // Debug state
  
  return (
    <div className="partners-wrapper">
      {/* Top transition gradient */}
      <div className="top-gradient" />
      
      <section id="partners" className="partners-section">
        <div className="partners-container">
          <h2 className="partners-title">Our Partners</h2>
          <div className="partners-grid">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="partner-item"
                onMouseEnter={() => setHoveredPartner(index)}
                onMouseLeave={() => setHoveredPartner(null)}
              >
                <Link href={partner.url} target="_blank" className="partner-link">
                  <div className="partner-content">
                    <div className="partner-image-container">
                      <Image
                        src={partner.img}
                        alt={partner.alt}
                        width={160}
                        height={80}
                        className="partner-image"
                      />
                    </div>
                    {hoveredPartner === index && (
                      <div className="partner-icon">
                        <Users className="partner-icon-svg" />
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
      <div className="bottom-gradient" />
    </div>
  );
}