import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Torus, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export function FloatingModel() {
  const modelRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (modelRef.current) {
      modelRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
      modelRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.3;
    }
  });

  return (
    <Torus ref={modelRef} args={[3, 1, 32, 100]}>
      <MeshDistortMaterial
        color="#60a5fa"
        attach="material"
        distort={0.4}
        speed={3}
        roughness={0.2}
        metalness={0.8}
      />
    </Torus>
  );
}