import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Top Progress Bar - Cyberpunk */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 origin-left z-[9999]"
        style={{ scaleX }}
      />
      
      {/* Circular Progress Indicator - Cyberpunk Style */}
      <motion.div
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full glass-ultra flex items-center justify-center cursor-pointer z-50 hover:scale-110 transition-transform border border-purple-500/30"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)',
        }}
      >
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="rgba(168, 85, 247, 0.2)"
            strokeWidth="6"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="url(#cyberpunkGradient)"
            strokeWidth="6"
            strokeLinecap="round"
            style={{
              pathLength: scrollYProgress,
            }}
            strokeDasharray="0 1"
          />
          <defs>
            <linearGradient id="cyberpunkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
        <motion.div
          className="absolute text-xl font-bold text-gradient"
          style={{
            opacity: useSpring(scrollYProgress, {
              stiffness: 100,
              damping: 30,
            }),
          }}
        >
          ↑
        </motion.div>
      </motion.div>
    </>
  );
};

export default ScrollProgress;
