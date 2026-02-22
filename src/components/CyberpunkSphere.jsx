import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const CyberpunkSphere = () => {
  const meshRef = useRef();
  const glowRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.25;
    }
    if (glowRef.current) {
      glowRef.current.rotation.x = -state.clock.elapsedTime * 0.1;
      glowRef.current.rotation.y = -state.clock.elapsedTime * 0.2;
      glowRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime) * 0.1);
    }
  });

  return (
    <group>
      {/* Main Sphere */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[2.5, 5]} />
        <MeshDistortMaterial
          color="#a855f7"
          attach="material"
          distort={0.5}
          speed={2.5}
          roughness={0.1}
          metalness={0.9}
          emissive="#ec4899"
          emissiveIntensity={0.4}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Outer Glow Sphere */}
      <mesh ref={glowRef} position={[0, 0, 0]}>
        <sphereGeometry args={[3.2, 32, 32]} />
        <meshBasicMaterial
          color="#06b6d4"
          transparent
          opacity={0.15}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Wireframe Overlay */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <icosahedronGeometry args={[2.6, 2]} />
        <meshBasicMaterial
          color="#ec4899"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
    </group>
  );
};

export default CyberpunkSphere;
