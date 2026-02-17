import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MouseTrail = () => {
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    let trailId = 0;

    const handleMouseMove = (e) => {
      const newTrail = {
        id: trailId++,
        x: e.clientX,
        y: e.clientY,
      };

      setTrails((prev) => [...prev.slice(-10), newTrail]);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9997]">
      <AnimatePresence>
        {trails.map((trail, index) => (
          <motion.div
            key={trail.id}
            className="absolute w-3 h-3 rounded-full"
            style={{
              left: trail.x - 6,
              top: trail.y - 6,
              background: `radial-gradient(circle, rgba(168, 85, 247, ${
                0.6 - index * 0.05
              }), transparent)`,
            }}
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 0, opacity: 0 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default MouseTrail;
