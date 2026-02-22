import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const notifications = [
  { id: 1, icon: '👻', text: 'New project added!', color: 'yellow' },
  { id: 2, icon: '⚡', text: 'Skills updated!', color: 'yellow' },
  { id: 3, icon: '🎯', text: 'Check out my work!', color: 'yellow' },
  { id: 4, icon: '🚀', text: 'Portfolio live!', color: 'yellow' },
];

const SnapNotifications = () => {
  const [currentNotif, setCurrentNotif] = useState(null);

  useEffect(() => {
    const showNotification = () => {
      const randomNotif = notifications[Math.floor(Math.random() * notifications.length)];
      setCurrentNotif(randomNotif);
      setTimeout(() => setCurrentNotif(null), 3000);
    };

    const interval = setInterval(showNotification, 10000);
    showNotification(); // Show first notification immediately

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {currentNotif && (
        <motion.div
          className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50"
          initial={{ y: -100, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -100, opacity: 0, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <motion.div
            className="snap-card px-6 py-4 flex items-center gap-4 snap-glow-strong"
            animate={{
              boxShadow: [
                '0 0 20px rgba(255, 252, 0, 0.5)',
                '0 0 40px rgba(255, 252, 0, 0.8)',
                '0 0 20px rgba(255, 252, 0, 0.5)',
              ],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {/* Icon */}
            <motion.span
              className="text-3xl"
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
            >
              {currentNotif.icon}
            </motion.span>

            {/* Text */}
            <p className="font-bold text-lg text-gray-900 dark:text-white">
              {currentNotif.text}
            </p>

            {/* Snap Dot */}
            <div className="snap-dot" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SnapNotifications;
