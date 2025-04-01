'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../app/stylings/Partners.css';

const partners = [
  {
    name: 'LuxGovSat SA',
    logo: 'https://govsat.lu/wp-content/themes/govsat/dist/images/logo.svg',
    url: 'https://govsat.lu/',
    bgColor: '#1a365d' // Dark blue background for white logo
  },
  {
    name: 'Ministry of Foreign and European Affairs',
    logo: 'https://cdn.public.lu/pictures/logos/gov/fr/gov-light.png',
    url: 'https://mae.gouvernement.lu/en.html',
    bgColor: '#ffffff' // White background for dark logo
  },
  {
    name: 'SES Techcom',
    logo: 'https://ses-techcom.com/wp-content/themes/oxo-theme/dist/img/logo.svg',
    url: 'https://ses-techcom.com',
    bgColor: '#f8fafc' // Light gray background for dark logo
  },
  {
    name: 'TST Fahrzeugbau',
    logo: 'https://tst-fahrzeugbau.com/wp-content/uploads/2019/11/logo-208x74.png',
    url: 'https://tstgroup.de',
    bgColor: '#ffffff' // White background for dark logo
  },
  {
    name: 'IP Copter',
    logo: 'https://tstgroup.de/images/ipcopter.gif',
    url: 'https://www.ipcopter.com/de/',
    bgColor: '#f8fafc' // Light gray background for dark logo
  }
];

export default function Partners() {
  return (
    <div className="partners-wrapper">
      <div className="partners-container">
        <h2 className="partners-title">Our Partners</h2>
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <Link 
              key={index} 
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="partner-item"
              style={{ backgroundColor: partner.bgColor }}
            >
              <div className="partner-image-container">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={160}
                  height={120}
                  className="partner-image"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  unoptimized
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}