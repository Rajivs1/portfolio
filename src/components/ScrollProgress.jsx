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
      {/* Top Progress Bar - Snapchat Yellow */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 origin-left z-[9999]"
        style={{ scaleX }}
      />
      
      {/* Circular Progress Indicator - Snapchat Style */}
      <motion.div
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full snap-card flex items-center justify-center cursor-pointer z-50 snap-hover-lift yellow-pulse"
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
            stroke="rgba(255, 252, 0, 0.2)"
            strokeWidth="6"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="url(#snapGradient)"
            strokeWidth="6"
            strokeLinecap="round"
            style={{
              pathLength: scrollYProgress,
            }}
            strokeDasharray="0 1"
          />
          <defs>
            <linearGradient id="snapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFC00" />
              <stop offset="50%" stopColor="#FFD700" />
              <stop offset="100%" stopColor="#FFA500" />
            </linearGradient>
          </defs>
        </svg>
        <motion.div
          className="absolute text-xl font-bold snap-yellow"
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
