import { useMemo } from 'react';
import { useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import FloatingBubbles from './components/FloatingBubbles';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import MouseTrail from './components/MouseTrail';
import LoadingScreen from './components/LoadingScreen';
import ParticleNetwork from './components/ParticleNetwork';
import SectionDivider from './components/SectionDivider';

function App() {
  const { isDark } = useTheme();
  // Generate random values once on mount
  const particles = useMemo(() => {
    const random = (seed) => {
      const x = Math.sin(seed) * 10000;
      return x - Math.floor(x);
    };
    
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: random(i * 1.1) * 100,
      delay: random(i * 2.2) * 5,
      duration: 3 + random(i * 3.3) * 4,
      size: 2 + random(i * 4.4) * 4
    }));
  }, []);

  return (
    <div className="min-h-screen animated-bg relative overflow-hidden">
      {/* Loading Screen */}
      <LoadingScreen />
      
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Mouse Trail */}
      <MouseTrail />
      
      {/* Floating Bubbles */}
      <FloatingBubbles />
      
      {/* Particle Network */}
      <ParticleNetwork />
      
      {/* Scroll Progress */}
      <ScrollProgress />
      
      {/* Animated Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-purple-500/20"
            style={{
              left: `${particle.left}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `float-particle ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
              bottom: '-20px'
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 -left-1/4 w-96 h-96 ${isDark ? 'bg-purple-500/20' : 'bg-purple-300/30'} rounded-full blur-3xl animate-pulse`} />
        <div className={`absolute bottom-1/4 -right-1/4 w-96 h-96 ${isDark ? 'bg-cyan-500/20' : 'bg-cyan-300/30'} rounded-full blur-3xl animate-pulse`} style={{ animationDelay: '1s' }} />
        <div className={`absolute top-1/2 left-1/2 w-96 h-96 ${isDark ? 'bg-pink-500/10' : 'bg-pink-300/20'} rounded-full blur-3xl animate-pulse`} style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid Pattern */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }} />
      
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <SectionDivider variant="wave" />
        <About />
        <SectionDivider variant="dots" />
        <Skills />
        <SectionDivider variant="line" />
        <Projects />
        <SectionDivider variant="wave" />
        <Experience />
        <SectionDivider variant="dots" />
        <Contact />
      </main>
      <Footer />

      <style>{`
        @keyframes float-particle {
          0% { 
            transform: translateY(100vh) translateX(0);
            opacity: 0;
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { 
            transform: translateY(-100vh) translateX(25px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
