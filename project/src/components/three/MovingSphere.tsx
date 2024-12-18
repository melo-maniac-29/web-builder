import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface MovingSphereProps {
  mouse: React.RefObject<{ x: number; y: number }>;
}

export function MovingSphere({ mouse }: MovingSphereProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.x = THREE.MathUtils.lerp(
        meshRef.current.position.x,
        (mouse.current!.x * viewport.width) / 2,
        0.1
      );
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        (mouse.current!.y * viewport.height) / 2,
        0.1
      );
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]}>
      <MeshDistortMaterial
        color="#4299e1"
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0}
      />
    </Sphere>
  );
}