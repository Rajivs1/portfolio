import { motion } from 'framer-motion';

const SectionDivider = ({ variant = 'wave' }) => {
  if (variant === 'wave') {
    return (
      <div className="relative h-24 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z"
            fill="url(#waveGradient)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(168, 85, 247, 0.1)" />
              <stop offset="50%" stopColor="rgba(236, 72, 153, 0.1)" />
              <stop offset="100%" stopColor="rgba(6, 182, 212, 0.1)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="flex gap-2">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'line') {
    return (
      <div className="flex justify-center items-center py-12">
        <motion.div
          className="h-1 bg-gradient-to-r from-transparent via-purple-600 to-transparent"
          initial={{ width: 0 }}
          whileInView={{ width: '50%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </div>
    );
  }

  return null;
};

export default SectionDivider;
