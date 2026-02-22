import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const SnapFilter = () => {
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFilter(true);
      setTimeout(() => setShowFilter(false), 2000);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {showFilter && (
        <motion.div
          className="fixed inset-0 pointer-events-none z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Yellow Filter Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-yellow-300/10" />
          
          {/* Scan Lines */}
          <div className="absolute inset-0">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"
                initial={{ top: '-10%' }}
                animate={{ top: '110%' }}
                transition={{
                  duration: 2,
                  delay: i * 0.4,
                  ease: 'linear',
                }}
              />
            ))}
          </div>

          {/* Corner Brackets */}
          <div className="absolute top-8 left-8 w-16 h-16 border-t-4 border-l-4 border-yellow-400" />
          <div className="absolute top-8 right-8 w-16 h-16 border-t-4 border-r-4 border-yellow-400" />
          <div className="absolute bottom-8 left-8 w-16 h-16 border-b-4 border-l-4 border-yellow-400" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-b-4 border-r-4 border-yellow-400" />

          {/* Center Focus */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-32 h-32 border-4 border-yellow-400 rounded-full" />
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default SnapFilter;
