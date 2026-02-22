import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei';
import { Suspense } from 'react';
import NeuralNetwork from './NeuralNetwork';
import CyberpunkSphere from './CyberpunkSphere';
import FloatingParticles from './FloatingParticles';
import HolographicRing from './HolographicRing';
import GeometricShapes from './GeometricShapes';
import AnimatedTorus from './AnimatedTorus';

const CyberpunkScene = ({ variant = 'hero' }) => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 10]} />
          
          {/* Lighting */}
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#a855f7" />
          <pointLight position={[-10, -10, -10]} intensity={0.7} color="#ec4899" />
          <pointLight position={[0, 10, 5]} intensity={0.5} color="#06b6d4" />
          <spotLight
            position={[0, 15, 0]}
            angle={0.3}
            penumbra={1}
            intensity={0.8}
            color="#a855f7"
            castShadow
          />

          {/* Scene elements based on variant */}
          {variant === 'hero' && (
            <>
              <NeuralNetwork />
              <FloatingParticles count={200} />
              <HolographicRing radius={4} position={[0, 0, -5]} />
              <GeometricShapes />
              <AnimatedTorus position={[5, 0, -8]} scale={0.6} />
              <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
            </>
          )}

          {variant === 'sphere' && (
            <>
              <CyberpunkSphere />
              <FloatingParticles count={150} />
              <HolographicRing radius={5} position={[0, 0, -3]} />
              <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
            </>
          )}

          {variant === 'minimal' && (
            <>
              <FloatingParticles count={100} />
              <HolographicRing radius={3} position={[0, 0, -3]} />
              <AnimatedTorus position={[0, 0, -5]} scale={0.5} />
              <Stars radius={100} depth={50} count={1500} factor={4} saturation={0} fade speed={1} />
            </>
          )}

          {/* Optional controls for development - uncomment to enable */}
          {/* <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} /> */}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default CyberpunkScene;
