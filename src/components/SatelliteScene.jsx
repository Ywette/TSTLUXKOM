'use client';

import dynamic from 'next/dynamic';
import { Suspense, useEffect, useState } from 'react';

const ThreeScene = dynamic(() => import('./ThreeScene'), {
  ssr: false,
  loading: () => null
});

export default function SatelliteScene() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Suspense fallback={null}>
      <ThreeScene />
    </Suspense>
  );
}