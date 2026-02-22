import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiAcademicCap, HiCheckCircle } from 'react-icons/hi';
import { portfolioData } from '../data/portfolioData';
import CyberpunkScene from '../components/CyberpunkScene';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { about, education } = portfolioData;

  return (
    <section id="about" className="py-20 relative overflow-hidden" ref={ref}>
      {/* Cyberpunk Background */}
      <CyberpunkScene variant="minimal" />
      
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
            <span className="text-sm text-purple-400">Get to know me</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Developer Workspace Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="relative rounded-2xl overflow-hidden border-2 border-purple-500/30 shadow-2xl shadow-purple-500/30 mb-6 card-3d glow-pulse"
            >
              {/* Holographic Overlay */}
              <div className="absolute inset-0 holographic pointer-events-none z-10" />
              <motion.img
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
                alt="Developer Workspace"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
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
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="neon-glass rounded-2xl p-8 card-3d relative overflow-hidden"
            >
              <div className="absolute inset-0 shimmer pointer-events-none" />
              <h3 className="text-2xl font-bold text-gradient-2 mb-4 relative z-10">Who I Am</h3>
              <p className="text-slate-300 leading-relaxed text-lg relative z-10">
                {about.description}
              </p>
            </motion.div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.05, y: -5, rotateZ: 2 }}
                className="neon-glass rounded-xl p-6 text-center card-3d glow-pulse relative overflow-hidden"
              >
                <div className="shimmer absolute inset-0" />
                <div className="text-3xl font-bold text-gradient mb-2 relative z-10">8+</div>
                <div className="text-sm text-slate-400 relative z-10">Monts Experience</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05, y: -5, rotateZ: -2 }}
                className="neon-glass rounded-xl p-6 text-center card-3d glow-pulse relative overflow-hidden"
              >
                <div className="shimmer absolute inset-0" />
                <div className="text-3xl font-bold text-gradient mb-2 relative z-10">10+</div>
                <div className="text-sm text-slate-400 relative z-10">Projects Completed</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05, y: -5, rotateZ: 2 }}
                className="neon-glass rounded-xl p-6 text-center card-3d glow-pulse relative overflow-hidden"
              >
                <div className="shimmer absolute inset-0" />
                <div className="text-3xl font-bold text-gradient mb-2 relative z-10">15+</div>
                <div className="text-sm text-slate-400 relative z-10">Technologies</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05, y: -5, rotateZ: -2 }}
                className="neon-glass rounded-xl p-6 text-center card-3d glow-pulse relative overflow-hidden"
              >
                <div className="shimmer absolute inset-0" />
                <div className="text-3xl font-bold text-gradient mb-2 relative z-10">100%</div>
                <div className="text-sm text-slate-400 relative z-10">Commitment</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <HiAcademicCap className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gradient-2">Education</h3>
            </div>

            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="neon-glass rounded-2xl p-6 hover:border-purple-500/50 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <HiCheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-1">
                        {edu.degree}
                      </h4>
                      {edu.field && (
                        <p className="text-sm text-purple-300 mb-2">{edu.field}</p>
                      )}
                      <p className="text-sm text-slate-400 mb-1">{edu.institution}</p>
                      <div className="flex items-center gap-3 text-xs text-slate-500">
                        <span>{edu.duration}</span>
                        {edu.grade && (
                          <>
                            <span>•</span>
                            <span className="text-purple-400 font-medium">{edu.grade}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
