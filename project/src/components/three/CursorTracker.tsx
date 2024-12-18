import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { useMousePosition } from './hooks/useMousePosition';

export function CursorTracker() {
  const mesh = useRef<THREE.Mesh>(null);
  const mouse = useMousePosition();
  const { viewport } = useThree();

  useFrame(() => {
    if (mesh.current) {
      mesh.current.position.x = THREE.MathUtils.lerp(
        mesh.current.position.x,
        (mouse.current!.x * viewport.width) / 2,
        0.1
      );
      mesh.current.position.y = THREE.MathUtils.lerp(
        mesh.current.position.y,
        (mouse.current!.y * viewport.height) / 2,
        0.1
      );
    }
  });

  return (
    <Sphere ref={mesh} args={[0.2, 32, 32]}>
      <meshBasicMaterial color="#60a5fa" transparent opacity={0.6} />
    </Sphere>
  );
}