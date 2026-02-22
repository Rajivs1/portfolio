import { motion } from 'framer-motion';
import { useState } from 'react';

const SnapCamera = () => {
  const [flash, setFlash] = useState(false);

  const handleCapture = () => {
    setFlash(true);
    setTimeout(() => setFlash(false), 300);
  };

  return (
    <>
      {/* Camera Flash Effect */}
      {flash && (
        <motion.div
          className="fixed inset-0 bg-snap-yellow z-[9999] pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Camera Button */}
      <motion.button
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 w-20 h-20 rounded-full bg-white dark:bg-gray-800 border-4 border-snap-yellow snap-glow-strong cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleCapture}
        animate={{
          boxShadow: [
            '0 0 20px rgba(255, 252, 0, 0.5)',
            '0 0 40px rgba(255, 252, 0, 0.8)',
            '0 0 20px rgba(255, 252, 0, 0.5)',
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div
          className="w-full h-full rounded-full bg-snap-yellow flex items-center justify-center"
          animate={{ scale: [0.8, 0.9, 0.8] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="text-2xl">📸</span>
        </motion.div>
      </motion.button>

      {/* Camera UI Elements */}
      <div className="fixed top-8 left-8 z-40 flex gap-4">
        {/* Flash Icon */}
        <motion.div
          className="w-12 h-12 rounded-full snap-card flex items-center justify-center cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="text-xl">⚡</span>
        </motion.div>

        {/* Timer Icon */}
        <motion.div
          className="w-12 h-12 rounded-full snap-card flex items-center justify-center cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="text-xl">⏱️</span>
        </motion.div>
      </div>
    </>
  );
};

export default SnapCamera;
