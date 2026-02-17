import { motion } from 'framer-motion';

const FloatingBubbles = () => {
  const bubbles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 100 + 50,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: Math.random() * 20 + 15,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.left}%`,
            bottom: '-10%',
            background: `radial-gradient(circle at 30% 30%, rgba(168, 85, 247, 0.15), rgba(236, 72, 153, 0.08))`,
            filter: 'blur(2px)',
          }}
          animate={{
            y: [0, -window.innerHeight - 200],
            x: [0, Math.random() * 100 - 50],
            scale: [0, 1, 1, 0.8, 0],
            opacity: [0, 0.6, 0.6, 0.3, 0],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingBubbles;
