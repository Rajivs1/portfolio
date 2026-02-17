import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { projects } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="projects" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <span className="text-sm text-purple-400">My Work</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Explore my latest work and creative solutions
          </p>
        </motion.div>

        {/* Project Showcase Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="relative rounded-3xl overflow-hidden h-72 mb-16 border-2 border-purple-500/30 shadow-2xl"
        >
          <motion.img
            animate={{ 
              scale: [1, 1.08, 1],
              x: [0, -30, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=400&fit=crop"
            alt="Project Development"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/30" />
          <motion.div
            animate={{ 
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-r from-purple-600/40 via-pink-600/30 to-cyan-600/40"
          />
          
          {/* Floating particles */}
          <div className="absolute inset-0">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -30, 0],
                  x: [0, Math.random() * 20 - 10, 0],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
                className="absolute w-2 h-2 bg-purple-400 rounded-full blur-sm"
                style={{
                  left: `${15 + i * 15}%`,
                  top: `${30 + (i % 3) * 20}%`
                }}
              />
            ))}
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="text-center px-4"
            >
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg"
              >
                Building <span className="text-gradient">Innovative</span> Solutions
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.7 }}
                className="text-slate-200 text-lg"
              >
                Transforming ideas into reality with cutting-edge technologies
              </motion.p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group perspective-container"
            >
              <div className={`relative h-full neon-glass rounded-3xl overflow-hidden transition-all duration-500 hover:border-purple-500/60 hover:shadow-2xl hover:shadow-purple-500/20 ${project.isComingSoon ? 'border-cyan-500/40' : ''}`}>
                {/* Project Number Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
                  className={`absolute top-4 left-4 z-10 w-10 h-10 glass-strong rounded-full flex items-center justify-center font-bold border ${project.isComingSoon ? 'text-cyan-300 border-cyan-500/30' : 'text-purple-300 border-purple-500/30'}`}
                >
                  {project.isComingSoon ? '🚀' : String(project.id).padStart(2, '0')}
                </motion.div>

                {/* Coming Soon Badge */}
                {project.isComingSoon && (
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                    className="absolute top-4 right-4 z-10 px-4 py-2 glass-strong rounded-full border border-cyan-500/50 backdrop-blur-md"
                  >
                    <motion.span
                      animate={{ 
                        opacity: [0.5, 1, 0.5],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-xs font-bold text-cyan-300"
                    >
                      COMING SOON
                    </motion.span>
                  </motion.div>
                )}

                {/* Project Image */}
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <motion.img
                    whileHover={{ scale: 1.15, rotate: 2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Special overlay for Coming Soon */}
                  {project.isComingSoon && (
                    <>
                      <motion.div
                        animate={{
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute inset-0 bg-gradient-to-br from-cyan-600/40 via-purple-600/30 to-pink-600/40"
                      />
                      
                      {/* Animated stars */}
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0],
                            rotate: [0, 180, 360]
                          }}
                          transition={{
                            duration: 2 + i * 0.3,
                            repeat: Infinity,
                            delay: i * 0.3
                          }}
                          className="absolute w-1 h-1 bg-white rounded-full"
                          style={{
                            left: `${10 + i * 12}%`,
                            top: `${20 + (i % 4) * 20}%`
                          }}
                        />
                      ))}
                    </>
                  )}
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent ${project.isComingSoon ? 'opacity-80' : 'opacity-70'} group-hover:opacity-50 transition-opacity`} />
                  
                  {/* Animated Border on Hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className={`absolute inset-0 border-2 transition-all duration-300 ${project.isComingSoon ? 'border-cyan-500/0 group-hover:border-cyan-500/50' : 'border-purple-500/0 group-hover:border-purple-500/50'}`}
                  />
                  
                  {/* Hover Links */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center gap-4 bg-slate-950/40 backdrop-blur-sm"
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className={`w-14 h-14 glass-strong rounded-full flex items-center justify-center text-white transition-colors shadow-lg ${project.isComingSoon ? 'hover:text-cyan-400' : 'hover:text-purple-400'}`}
                    >
                      <FaGithub size={24} />
                    </motion.a>
                    
                    {!project.isComingSoon && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: -360 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="w-14 h-14 glass-strong rounded-full flex items-center justify-center text-white hover:text-cyan-400 transition-colors shadow-lg"
                      >
                        <FaExternalLinkAlt size={20} />
                      </motion.a>
                    )}
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4 bg-gradient-to-b from-slate-900/50 to-slate-950/80">
                  <motion.h3 
                    className={`text-2xl font-bold text-white group-hover:text-gradient transition-all duration-300 ${project.isComingSoon ? 'text-gradient' : ''}`}
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <p className={`text-sm leading-relaxed line-clamp-3 transition-colors ${project.isComingSoon ? 'text-slate-300 italic' : 'text-slate-400 group-hover:text-slate-300'}`}>
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.4 + index * 0.1 + techIndex * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className={`px-3 py-1.5 text-xs glass rounded-full border transition-all cursor-default ${project.isComingSoon ? 'text-cyan-300 border-cyan-500/30 hover:border-cyan-500/60 hover:bg-cyan-500/10' : 'text-purple-300 border-purple-500/30 hover:border-purple-500/60 hover:bg-purple-500/10'}`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute inset-0 rounded-3xl blur-2xl ${project.isComingSoon ? 'bg-gradient-to-br from-cyan-600/30 via-purple-600/20 to-pink-600/30' : 'bg-gradient-to-br from-purple-600/30 via-pink-600/20 to-cyan-600/30'}`} />
                </div>

                {/* Corner Accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity ${project.isComingSoon ? 'from-cyan-500/20' : 'from-purple-500/20'}`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Rajivs1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-xl border border-purple-500/30 hover:border-purple-500/60 transition-all"
          >
            <FaGithub size={20} />
            <span>View More on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
