import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const GeometricShapes = () => {
  const groupRef = useRef();

  const shapes = [
    { type: 'box', position: [-4, 2, -3], color: '#a855f7', size: 0.8 },
    { type: 'octahedron', position: [4, -2, -2], color: '#ec4899', size: 0.9 },
    { type: 'tetrahedron', position: [-3, -3, -4], color: '#06b6d4', size: 1 },
    { type: 'box', position: [3, 3, -5], color: '#a855f7', size: 0.7 },
    { type: 'octahedron', position: [0, 4, -3], color: '#ec4899', size: 0.8 },
  ];

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        child.rotation.x = state.clock.elapsedTime * (0.5 + i * 0.1);
        child.rotation.y = state.clock.elapsedTime * (0.3 + i * 0.1);
        child.position.y += Math.sin(state.clock.elapsedTime + i) * 0.002;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {shapes.map((shape, i) => (
        <mesh key={i} position={shape.position}>
          {shape.type === 'box' && <boxGeometry args={[shape.size, shape.size, shape.size]} />}
          {shape.type === 'octahedron' && <octahedronGeometry args={[shape.size]} />}
          {shape.type === 'tetrahedron' && <tetrahedronGeometry args={[shape.size]} />}
          <meshStandardMaterial
            color={shape.color}
            emissive={shape.color}
            emissiveIntensity={0.4}
            metalness={0.8}
            roughness={0.2}
            transparent
            opacity={0.6}
            wireframe={i % 2 === 0}
          />
        </mesh>
      ))}
    </group>
  );
};

export default GeometricShapes;
