import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiCode, HiServer, HiTerminal } from 'react-icons/hi';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { skills } = portfolioData;
  const { isDark } = useTheme();

  const SkillBar = ({ skill, index }) => (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <span className={`font-semibold text-base ${isDark ? 'text-white' : 'text-slate-900'}`}>{skill.name}</span>
        <span className="text-purple-400 font-bold text-lg">{skill.level}%</span>
      </div>
      <div className={`h-4 rounded-full overflow-hidden border ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-slate-200 border-slate-300'}`}>
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 rounded-full relative"
          style={{ boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)' }}
        >
          <motion.div
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
          />
        </motion.div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 relative bg-gradient-to-br from-indigo-950/30 via-purple-950/30 to-pink-950/30 dark:from-indigo-950/30 dark:via-purple-950/30 dark:to-pink-950/30 overflow-hidden" ref={ref}>
      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      
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
            <span className="text-sm text-purple-400">My Expertise</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical proficiency across various technologies
          </p>
        </motion.div>

        {/* Tech Background Images */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.05, rotateZ: 2 }}
            className="relative rounded-xl overflow-hidden h-32 border-2 border-purple-500/30 card-3d glow-pulse"
          >
            <div className="scan-line" />
            <motion.img
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 8, repeat: Infinity }}
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop"
              alt="Code Editor"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05, rotateZ: -2 }}
            className="relative rounded-xl overflow-hidden h-32 border-2 border-cyan-500/30 card-3d glow-pulse"
          >
            <div className="scan-line" />
            <motion.img
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 9, repeat: Infinity }}
              src="https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=400&h=300&fit=crop"
              alt="Server Technology"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 to-transparent" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05, rotateZ: 2 }}
            className="relative rounded-xl overflow-hidden h-32 border-2 border-pink-500/30 card-3d glow-pulse"
          >
            <div className="scan-line" />
            <motion.img
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 7, repeat: Infinity }}
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&h=300&fit=crop"
              alt="Programming"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 to-transparent" />
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="neon-glass rounded-2xl p-8 hover:border-purple-500/50 transition-all"
            style={{ backgroundColor: isDark ? 'rgba(15, 23, 42, 0.8)' : 'rgba(255, 255, 255, 0.95)' }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/50">
                <HiCode className="text-white" size={28} />
              </div>
              <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Frontend</h3>
            </div>

            <div className="space-y-6">
              {skills.frontend.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Backend Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="neon-glass rounded-2xl p-8 hover:border-cyan-500/50 transition-all card-3d relative overflow-hidden"
            style={{ backgroundColor: isDark ? 'rgba(15, 23, 42, 0.8)' : 'rgba(255, 255, 255, 0.95)' }}
          >
            <div className="scan-line" />
            <div className="flex items-center gap-3 mb-8 relative z-10">
              <motion.div 
                className="w-14 h-14 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/50"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <HiServer className="text-white" size={28} />
              </motion.div>
              <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Backend</h3>
            </div>

            <div className="space-y-6">
              {skills.backend.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Programming Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="neon-glass rounded-2xl p-8 hover:border-pink-500/50 transition-all card-3d relative overflow-hidden"
            style={{ backgroundColor: isDark ? 'rgba(15, 23, 42, 0.8)' : 'rgba(255, 255, 255, 0.95)' }}
          >
            <div className="scan-line" />
            <div className="flex items-center gap-3 mb-8 relative z-10">
              <motion.div 
                className="w-14 h-14 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-pink-500/50"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <HiTerminal className="text-white" size={28} />
              </motion.div>
              <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Programming</h3>
            </div>

            <div className="space-y-6">
              {skills.programming.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-slate-400 text-sm">
            Continuously learning and expanding my skill set to stay current with industry trends
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
