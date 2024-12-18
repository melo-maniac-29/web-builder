import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Scene } from './Scene';
import { LoadingSpinner } from '../ui/LoadingSpinner';

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <Suspense fallback={<LoadingSpinner />}>
        <Canvas>
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  );
}