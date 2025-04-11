'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Satellite, Wifi, Globe, Shield, Rocket, Antenna, Signal, Network } from 'lucide-react';
import '../../app/stylings/animations/OrbitCircles.css';

const OrbitCircles: React.FC = () => {
  return (
    <>
      {/* Decorative background blur circles */}
      <div className="decorative-circles-container">
        <div className="decorative-circle decorative-circle-1"></div>
        <div className="decorative-circle decorative-circle-2"></div>
        <div className="decorative-circle decorative-circle-3"></div>
        <div className="decorative-circle decorative-circle-4"></div>
      </div>

      {/* Orbit circles */}
      <div className="orbit-container">
        <div 
          className="orbit-circle orbit-circle-1"          
        >
          <div className="orbit-icons">
            <Satellite className="orbit-icon" />
            <Wifi className="orbit-icon" />
            <Globe className="orbit-icon" />
            <Shield className="orbit-icon" />
          </div>
        </div>
        <div 
          className="orbit-circle orbit-circle-2"          
        >
          <div className="orbit-icons">
            <Rocket className="orbit-icon" />
            <Antenna className="orbit-icon" />
            <Signal className="orbit-icon" />
            <Network className="orbit-icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OrbitCircles;