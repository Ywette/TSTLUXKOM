'use client';

import { useRef } from 'react';
import styles from '../../app/stylings/WifiAnimation.module.css';

const WifiAnimation = ({
  color = '#FF69B4',
  thickness = 0.5,  // In pixels (0.5px is typically the thinnest visible line)
  arcCount = 32  // Increased from 20 to 32 arcs
}) => {
  const containerRef = useRef(null);
  
  // Create array for our arcs with even spacing and vertical-only scaling
  const arcs = Array.from({ length: arcCount }, (_, i) => ({
    left: 10 + (i * 2.5), // Start at 10% and space arcs 2.5% apart to fit in viewport
    scaleY: 0.3 + (i / (arcCount - 1)) * 0.7, // Scale height from 0.3 to 1.0
  }));
  
  return (
    <div ref={containerRef} className={styles.container}>
      {arcs.map((arc, index) => (
        <svg
          key={index}
          className={styles.wifiArc}
          style={{
            left: `${arc.left}%`,
            opacity: 0.5,
          }}
          viewBox="0 0 200 300"
        >
          <path
            d="M 100,70 A 90,90 0 0 1 100,230"
            style={{
              stroke: color,
              strokeWidth: `${thickness}px`,
              transform: `scaleY(${arc.scaleY})`,
              transformOrigin: 'center',
            }}
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      ))}
    </div>
  );
};

export default WifiAnimation;