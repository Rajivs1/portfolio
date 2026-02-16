import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';
import { HiSparkles, HiCode } from 'react-icons/hi';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const { name, role, bio, social } = portfolioData;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4 py-20 overflow-hidden">
      {/* Animated Particles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, -200, -300],
              x: [0, Math.random() * 50 - 25],
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 border-2 border-purple-500/20 rounded-3xl morph-shape"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 border-2 border-pink-500/20 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 glass-ultra rounded-full glow-pulse relative overflow-hidden"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <HiSparkles className="text-purple-400" />
              </motion.div>
              <span className="text-sm text-slate-300">Available for work</span>
              <div className="scan-line" />
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold"
              >
                Hi, I'm{' '}
                <span className="text-gradient inline-block">{name}</span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-3"
              >
                <HiCode className="text-purple-400 text-3xl" />
                <h2 className="text-2xl md:text-4xl text-slate-300 font-semibold">
                  {role}
                </h2>
              </motion.div>
            </div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-slate-400 leading-relaxed max-w-xl"
            >
              {bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all gradient-animate relative overflow-hidden ripple-effect"
              >
                <span className="relative z-10">View My Work</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass-ultra rounded-xl font-semibold border border-purple-500/30 hover:border-purple-500/60 transition-all neon-border-animate ripple-effect relative"
              >
                <span className="relative z-10">Get In Touch</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-4"
            >
              <motion.a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 glass rounded-full flex items-center justify-center text-slate-300 hover:text-purple-400 transition-colors"
              >
                <FaGithub size={24} />
              </motion.a>
              
              <motion.a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 glass rounded-full flex items-center justify-center text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <FaLinkedin size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative perspective-container"
          >
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotateY: [0, 5, 0],
                rotateX: [0, 5, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-3xl opacity-30" />
              
              {/* Developer Image with Effects */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -top-20 -right-10 w-64 h-64 rounded-2xl overflow-hidden border-4 border-purple-500/30 shadow-2xl shadow-purple-500/50"
              >
                <motion.img
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop"
                  alt="Coding"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent" />
              </motion.div>
              
              {/* Main Card */}
              <div className="relative neon-glass rounded-3xl p-8 space-y-6 card-3d holographic">
                {/* Scan Line Effect */}
                <div className="scan-line" />
                {/* Code Block */}
                <div className="space-y-2 font-mono text-sm">
                  <div className="text-purple-400">
                    <span className="text-slate-500">const</span> developer = {'{'}
                  </div>
                  <div className="ml-4 space-y-1 text-slate-300">
                    <div>
                      <span className="text-cyan-400">name:</span> <span className="text-green-400">"{name}"</span>,
                    </div>
                    <div>
                      <span className="text-cyan-400">role:</span> <span className="text-green-400">"{role}"</span>,
                    </div>
                    <div>
                      <span className="text-cyan-400">skills:</span> [
                      <div className="ml-4">
                        <span className="text-green-400">"React"</span>,
                        <span className="text-green-400"> "Node.js"</span>,
                        <span className="text-green-400"> "MongoDB"</span>
                      </div>
                      ],
                    </div>
                    <div>
                      <span className="text-cyan-400">available:</span> <span className="text-orange-400">true</span>
                    </div>
                  </div>
                  <div className="text-purple-400">{'}'}</div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-700/50">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient">5+</div>
                    <div className="text-xs text-slate-400">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient">2+</div>
                    <div className="text-xs text-slate-400">Years Exp</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient">10+</div>
                    <div className="text-xs text-slate-400">Skills</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-slate-400"
        >
          <span className="text-xs">Scroll Down</span>
          <FaArrowDown size={20} className="text-purple-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
