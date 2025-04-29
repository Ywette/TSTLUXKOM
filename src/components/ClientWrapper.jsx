'use client';

import { Suspense, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const OrbitCircles = dynamic(() => import('./ui/OrbitCircles'), {
  ssr: false,
  loading: () => null
});

const SatelliteScene = dynamic(() => import('./SatelliteScene'), {
  ssr: false,
  loading: () => null
});

export default function ClientWrapper() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Suspense fallback={null}>
      <OrbitCircles />
      <SatelliteScene />
    </Suspense>
  );
} 