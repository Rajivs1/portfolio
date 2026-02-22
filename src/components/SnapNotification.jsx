import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const SnapNotification = () => {
  const [notifications, setNotifications] = useState([]);

  const messages = [
    '🔥 New project added!',
    '⚡ Skills updated!',
    '🎯 Check out my work!',
    '💼 Open to opportunities!',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      const id = Date.now();
      
      setNotifications((prev) => [...prev, { id, message: randomMessage }]);

      setTimeout(() => {
        setNotifications((prev) => prev.filter((n) => n.id !== id));
      }, 3000);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-20 right-4 z-50 space-y-2">
      <AnimatePresence>
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.8 }}
            className="snap-card px-6 py-4 min-w-[250px] snap-shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-snap-yellow rounded-full animate-pulse" />
              <p className="font-semibold text-sm">{notification.message}</p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default SnapNotification;
