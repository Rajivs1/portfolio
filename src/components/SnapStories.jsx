import { motion } from 'framer-motion';

const stories = [
  { id: 1, name: 'Projects', emoji: '💼', color: 'from-yellow-400 to-orange-500' },
  { id: 2, name: 'Skills', emoji: '⚡', color: 'from-yellow-300 to-yellow-500' },
  { id: 3, name: 'About', emoji: '👨‍💻', color: 'from-yellow-500 to-amber-500' },
  { id: 4, name: 'Contact', emoji: '📧', color: 'from-amber-400 to-yellow-400' },
];

const SnapStories = () => {
  return (
    <motion.div
      className="fixed top-20 left-0 right-0 z-30 px-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.5 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {stories.map((story, index) => (
            <motion.a
              key={story.id}
              href={`#${story.name.toLowerCase()}`}
              className="flex-shrink-0"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 1.7 + index * 0.1, type: "spring" }}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex flex-col items-center gap-2">
                {/* Story Ring */}
                <div className={`p-1 rounded-full bg-gradient-to-br ${story.color} story-ring`}>
                  <div className="w-16 h-16 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center border-4 border-white dark:border-gray-800">
                    <span className="text-2xl">{story.emoji}</span>
                  </div>
                </div>
                
                {/* Story Name */}
                <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                  {story.name}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SnapStories;
