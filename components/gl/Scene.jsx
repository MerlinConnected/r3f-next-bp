import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Loader } from '@react-three/drei';

import { useControls } from 'leva';

import { Suspense, useRef, useState } from 'react';

export default function Scene() {
  const { color } = useControls({
    color: {
      value: '#FF69B4',
      label: 'Color',
      format: (v) => v,
    },
  });
  return (
    <>
      <Canvas shadows>
        <Suspense fallback={null}>
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={color} />
          </mesh>
          <OrbitControls
            enablePan={false}
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 1.8}
            minDistance={1.5}
            maxDistance={2.5}
            target={[0, 0, 0]}
          />
          <ambientLight intensity={1} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}
