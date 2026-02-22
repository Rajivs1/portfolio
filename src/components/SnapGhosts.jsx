import { motion } from 'framer-motion';

const SnapGhosts = () => {
  const ghosts = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 40,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 15 + 10,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {ghosts.map((ghost) => (
        <motion.div
          key={ghost.id}
          className="absolute"
          style={{
            width: ghost.size,
            height: ghost.size * 1.2,
            left: `${ghost.left}%`,
            bottom: '-10%',
          }}
          animate={{
            y: [0, -window.innerHeight - 200],
            x: [0, Math.sin(ghost.id) * 50],
            rotate: [0, 360],
            opacity: [0, 0.3, 0.3, 0],
          }}
          transition={{
            duration: ghost.duration,
            delay: ghost.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {/* Snapchat Ghost SVG */}
          <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M50 10C30 10 15 25 15 45C15 55 18 63 23 69C23 69 20 75 20 80C20 85 25 85 30 85C35 85 38 82 40 80C42 78 45 75 50 75C55 75 58 78 60 80C62 82 65 85 70 85C75 85 80 85 80 80C80 75 77 69 77 69C82 63 85 55 85 45C85 25 70 10 50 10Z"
              fill="rgba(255, 252, 0, 0.6)"
              className="ghost-float"
            />
            {/* Ghost Eyes */}
            <circle cx="40" cy="45" r="5" fill="#000" />
            <circle cx="60" cy="45" r="5" fill="#000" />
            {/* Ghost Mouth */}
            <path
              d="M40 55C40 55 45 60 50 60C55 60 60 55 60 55"
              stroke="#000"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default SnapGhosts;
