import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const DataStream = () => {
  const groupRef = useRef();

  const streams = useMemo(() => {
    const temp = [];
    const streamCount = 15;
    
    for (let i = 0; i < streamCount; i++) {
      const angle = (i / streamCount) * Math.PI * 2;
      const radius = 3 + Math.random() * 2;
      
      temp.push({
        position: [
          Math.cos(angle) * radius,
          Math.sin(angle) * radius,
          (Math.random() - 0.5) * 4
        ],
        speed: 0.5 + Math.random() * 1,
        color: i % 3 === 0 ? '#a855f7' : i % 3 === 1 ? '#ec4899' : '#06b6d4',
      });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {streams.map((stream, i) => (
        <mesh key={i} position={stream.position}>
          <boxGeometry args={[0.05, 0.05, 2]} />
          <meshStandardMaterial
            color={stream.color}
            emissive={stream.color}
            emissiveIntensity={0.5}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  );
};

export default DataStream;
