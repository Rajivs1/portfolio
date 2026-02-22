import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-white dark:bg-[#1A1A1A]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center space-y-8">
            {/* Snapchat Ghost Logo */}
            <motion.div
              className="relative"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <motion.div
                className="w-32 h-32 mx-auto rounded-t-full bg-snap-yellow flex items-center justify-center relative ghost-float"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(255, 252, 0, 0.5)',
                    '0 0 40px rgba(255, 252, 0, 0.8)',
                    '0 0 20px rgba(255, 252, 0, 0.5)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {/* Ghost Face */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  {/* Eyes */}
                  <div className="flex gap-4 mb-2">
                    <div className="w-3 h-3 bg-black rounded-full" />
                    <div className="w-3 h-3 bg-black rounded-full" />
                  </div>
                  {/* Mouth */}
                  <div className="w-8 h-4 border-b-4 border-black rounded-b-full" />
                </div>
                
                {/* Ghost Bottom Waves */}
                <div className="absolute -bottom-1 left-0 right-0 flex justify-around">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-6 h-4 bg-snap-yellow rounded-b-full"
                    />
                  ))}
                </div>
              </motion.div>
              
              {/* Orbiting Yellow Dots */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-4 h-4 bg-snap-yellow rounded-full snap-glow"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.3,
                  }}
                  style={{
                    transformOrigin: `${50 + i * 10}px 0px`,
                  }}
                />
              ))}
            </motion.div>

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold yellow-gradient-text">
                Loading Portfolio
              </h2>
              
              {/* Progress Bar - Snapchat Style */}
              <div className="w-64 h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mx-auto">
                <motion.div
                  className="h-full bg-snap-yellow snap-glow"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              {/* Progress Percentage */}
              <motion.p
                className="text-gray-600 dark:text-gray-400 font-bold text-xl"
                key={progress}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {progress}%
              </motion.p>
            </motion.div>

            {/* Animated Dots */}
            <div className="flex justify-center gap-3">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 bg-snap-yellow rounded-full snap-glow"
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
