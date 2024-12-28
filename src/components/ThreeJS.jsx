// src/ThreeJS.js
import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Box = () => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Animasi untuk rotasi kotak
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh
      ref={meshRef}
      onClick={() => setClicked(!clicked)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : clicked ? 'orange' : 'skyblue'} />
    </mesh>
  );
};

const ThreeJS = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-xl rounded-lg">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">Three.js in React</h2>
      <Canvas className="bg-gray-100 p-4 rounded-md shadow-md">
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Box />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ThreeJS;
