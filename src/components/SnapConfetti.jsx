import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const SnapConfetti = ({ trigger = false }) => {
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    if (trigger) {
      const newConfetti = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
        duration: Math.random() * 2 + 2,
        rotation: Math.random() * 360,
        color: ['#FFFC00', '#FFD700', '#FFA500'][Math.floor(Math.random() * 3)],
      }));
      setConfetti(newConfetti);

      setTimeout(() => setConfetti([]), 4000);
    }
  }, [trigger]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {confetti.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute w-3 h-3 rounded-sm"
          style={{
            left: `${piece.left}%`,
            top: '-10%',
            backgroundColor: piece.color,
            rotate: piece.rotation,
          }}
          animate={{
            y: ['0vh', '110vh'],
            rotate: [piece.rotation, piece.rotation + 720],
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};

export default SnapConfetti;
