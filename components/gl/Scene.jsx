import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Loader } from '@react-three/drei';

import { useControls } from 'leva';

import { Suspense, useRef, useState } from 'react';

export default function Scene() {
function Model() {
  const meshRef = useRef();

  const [hovered, hover] = useState(false);

  const { color } = useControls({
    color: {
      value: '#FF69B4',
      label: 'Color',
      format: (v) => v,
    },
  });

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  if (meshRef.current) console.log(meshRef.current);

  return (
    <mesh ref={meshRef} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)} scale={hovered ? 2 : 1}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} roughness={0} />
    </mesh>
  );
}
  return (
    <>
      <Canvas shadows camera={{ fov: '72' }}>
        <Suspense fallback={null}>
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={color} />
          </mesh>
          <OrbitControls />
          <ambientLight intensity={1} />
          <Environment preset="dawn" />
        </Suspense>
        <Model />
      </Canvas>
      <Loader />
    </>
  );
}
