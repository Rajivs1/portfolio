import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const AnimatedTorus = ({ position = [0, 0, 0], scale = 1 }) => {
  const torusRef = useRef();
  const innerTorusRef = useRef();

  useFrame((state) => {
    if (torusRef.current) {
      torusRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      torusRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      torusRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
    if (innerTorusRef.current) {
      innerTorusRef.current.rotation.x = -state.clock.elapsedTime * 0.4;
      innerTorusRef.current.rotation.y = -state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <group position={position} scale={scale}>
      {/* Outer Torus */}
      <mesh ref={torusRef}>
        <torusGeometry args={[2, 0.4, 16, 100]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Inner Torus */}
      <mesh ref={innerTorusRef}>
        <torusGeometry args={[1.5, 0.3, 16, 100]} />
        <meshStandardMaterial
          color="#ec4899"
          emissive="#ec4899"
          emissiveIntensity={0.6}
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Wireframe Ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.5, 0.05, 16, 100]} />
        <meshBasicMaterial
          color="#06b6d4"
          wireframe
          transparent
          opacity={0.4}
        />
      </mesh>
    </group>
  );
};

export default AnimatedTorus;
