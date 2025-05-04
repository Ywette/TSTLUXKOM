'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import '../app/stylings/SatelliteScene.css';

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
      <OrbitControls 
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.05}
      />
    </>
  );
}

export default function ThreeScene() {
  return (
    <div className="satellite-scene">
      <Canvas
        camera={{ position: [10, 10, 10], fov: 50 }}
        style={{ background: 'transparent', width: '100%', height: '100%' }}
        dpr={[1, 2]}
      >
        <SceneContent />
      </Canvas>
    </div>
  );
} 