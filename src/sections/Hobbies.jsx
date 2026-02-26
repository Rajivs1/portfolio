import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiHeart } from 'react-icons/hi';
import { portfolioData } from '../data/portfolioData';

const Hobbies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { hobbies } = portfolioData;

  return (
    <section id="hobbies" className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 glass rounded-full mb-4"
          >
            <span className="text-sm text-purple-400">Beyond Code</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            My <span className="text-gradient">Hobbies</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            When I'm not coding, I love exploring new places and experiencing different cultures
          </p>
        </motion.div>

        {/* Hobbies Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="neon-glass rounded-2xl overflow-hidden card-3d">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={hobby.image}
                    alt={hobby.place}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                  
                  {/* Holographic Effect */}
                  <motion.div
                    animate={{ 
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"
                  />
                  
                  {/* Place Name */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-2">
                      <HiHeart className="text-pink-400" size={20} />
                      <span className="text-xs text-purple-300 font-medium uppercase tracking-wider">
                        {hobby.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {hobby.place}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <div className="p-6">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {hobby.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
