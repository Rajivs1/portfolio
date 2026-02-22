import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const NeuralNetwork = () => {
  const pointsRef = useRef();
  const linesRef = useRef();

  // Generate neural network nodes
  const nodes = useMemo(() => {
    const temp = [];
    const layers = 5;
    const nodesPerLayer = 8;
    
    for (let i = 0; i < layers; i++) {
      for (let j = 0; j < nodesPerLayer; j++) {
        temp.push({
          position: new THREE.Vector3(
            (i - layers / 2) * 3,
            (j - nodesPerLayer / 2) * 2 + Math.random() * 0.5,
            Math.random() * 2 - 1
          ),
          connections: [],
        });
      }
    }

    // Create connections between nearby nodes
    temp.forEach((node, i) => {
      temp.forEach((otherNode, j) => {
        if (i !== j) {
          const distance = node.position.distanceTo(otherNode.position);
          if (distance < 4 && Math.random() > 0.6) {
            node.connections.push(j);
          }
        }
      });
    });

    return temp;
  }, []);

  // Animate nodes
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      linesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group>
      {/* Neural nodes */}
      <group ref={pointsRef}>
        {nodes.map((node, i) => (
          <mesh key={i} position={node.position}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial
              color="#a855f7"
              emissive="#a855f7"
              emissiveIntensity={0.5}
              transparent
              opacity={0.8}
            />
          </mesh>
        ))}
      </group>

      {/* Connection lines */}
      <group ref={linesRef}>
        {nodes.map((node, i) =>
          node.connections.map((connectionIndex, j) => {
            const start = node.position;
            const end = nodes[connectionIndex].position;
            const mid = new THREE.Vector3().lerpVectors(start, end, 0.5);
            const distance = start.distanceTo(end);

            return (
              <line key={`${i}-${j}`}>
                <bufferGeometry>
                  <bufferAttribute
                    attach="attributes-position"
                    count={2}
                    array={new Float32Array([
                      start.x, start.y, start.z,
                      end.x, end.y, end.z,
                    ])}
                    itemSize={3}
                  />
                </bufferGeometry>
                <lineBasicMaterial
                  color="#ec4899"
                  transparent
                  opacity={0.3}
                  linewidth={1}
                />
              </line>
            );
          })
        )}
      </group>
    </group>
  );
};

export default NeuralNetwork;
