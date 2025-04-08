'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';
import '../app/stylings/SatelliteScene.css';

function SatelliteModel() {
  const group = useRef();
  const [hovered, setHovered] = useState(false);
  
  return (
    <group ref={group} dispose={null}>
      {/* Satellite body */}
      <mesh
        position={[0, 0, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[2, 1, 1]} />
        <meshStandardMaterial 
          color={hovered ? "#4facfe" : "#ffffff"} 
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      
      {/* Solar panels */}
      <mesh position={[-1.5, 0, 0]}>
        <boxGeometry args={[0.1, 2, 2]} />
        <meshStandardMaterial color="#4facfe" metalness={0.5} roughness={0.3} />
      </mesh>
      <mesh position={[1.5, 0, 0]}>
        <boxGeometry args={[0.1, 2, 2]} />
        <meshStandardMaterial color="#4facfe" metalness={0.5} roughness={0.3} />
      </mesh>
      
      {/* Antenna */}
      <mesh position={[0, 0, 1.5]}>
        <coneGeometry args={[0.5, 1, 8]} />
        <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
}

function CommunicationBeams() {
  const points = [
    [0, 0, 0],
    [5, 5, 0],
    [0, 0, 0],
    [-5, 5, 0],
    [0, 0, 0],
    [0, 5, 5],
  ];
 
  return (
    <group>
      {points.map((point, index) => (
        <mesh key={index} position={point}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color="#00f2fe" emissive="#00f2fe" emissiveIntensity={0.5} />
        </mesh>
      ))}
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={points.length}
            array={new Float32Array(points.flat())}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#00f2fe" />
      </line>
    </group>
  );
}

export default function SatelliteScene() {
  return (
    <div className="satellite-scene">
      <Canvas
        camera={{ position: [10, 10, 10], fov: 50 }}
        style={{ background: 'transparent', width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        {/* <SatelliteModel />
        <CommunicationBeams /> */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
        <OrbitControls 
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.05}
        />
      </Canvas>
    </div>
  );
}