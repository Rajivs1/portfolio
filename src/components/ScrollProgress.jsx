import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Top Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 origin-left z-[9999]"
        style={{ scaleX }}
      />
      
      {/* Circular Progress Indicator */}
      <motion.div
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full glass-strong border-2 border-purple-500/30 flex items-center justify-center cursor-pointer z-50 hover:scale-110 transition-transform"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="rgba(168, 85, 247, 0.2)"
            strokeWidth="4"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="4"
            strokeLinecap="round"
            style={{
              pathLength: scrollYProgress,
            }}
            strokeDasharray="0 1"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
        <motion.div
          className="absolute text-xs font-bold text-purple-400"
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
