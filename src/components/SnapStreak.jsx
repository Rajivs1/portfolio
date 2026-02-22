import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const SnapStreak = () => {
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStreak((prev) => (prev < 100 ? prev + 1 : 0));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed top-24 right-8 z-40"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 2 }}
    >
      <motion.div
        className="snap-card px-6 py-4 flex items-center gap-3"
        whileHover={{ scale: 1.05 }}
        animate={{
          boxShadow: [
            '0 0 20px rgba(255, 252, 0, 0.3)',
            '0 0 40px rgba(255, 252, 0, 0.6)',
            '0 0 20px rgba(255, 252, 0, 0.3)',
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {/* Fire Emoji */}
        <motion.span
          className="text-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [-5, 5, -5],
          }}
          transition={{ duration: 0.5, repeat: Infinity }}
        >
          🔥
        </motion.span>

        {/* Streak Count */}
        <div className="text-center">
          <motion.p
            className="text-3xl font-bold yellow-gradient-text"
            key={streak}
            initial={{ scale: 1.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            {streak}
          </motion.p>
          <p className="text-xs text-gray-600 dark:text-gray-400 font-semibold">
            Day Streak
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SnapStreak;
