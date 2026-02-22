import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingParticles = ({ count = 200 }) => {
  const pointsRef = useRef();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 20;
      temp.push(x, y, z);
    }
    return new Float32Array(temp);
  }, [count]);

  const colors = useMemo(() => {
    const temp = [];
    const color1 = new THREE.Color('#a855f7');
    const color2 = new THREE.Color('#ec4899');
    const color3 = new THREE.Color('#06b6d4');

    for (let i = 0; i < count; i++) {
      const mixedColor = new THREE.Color();
      const rand = Math.random();
      
      if (rand < 0.33) {
        mixedColor.copy(color1);
      } else if (rand < 0.66) {
        mixedColor.copy(color2);
      } else {
        mixedColor.copy(color3);
      }
      
      temp.push(mixedColor.r, mixedColor.g, mixedColor.b);
    }
    return new Float32Array(temp);
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export default FloatingParticles;
