import React from 'react';
import { Float, PerspectiveCamera } from '@react-three/drei';
import { Particles } from './Particles';
import { FloatingModel } from './FloatingModel';
import { CursorTracker } from './CursorTracker';

export function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={75} />
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.3} />
      
      <Float
        speed={2}
        rotationIntensity={0.5}
        floatIntensity={0.5}
      >
        <FloatingModel />
      </Float>
      
      <Particles count={500} />
      <CursorTracker />
    </>
  );
}