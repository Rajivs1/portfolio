import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiCheckCircle } from 'react-icons/hi';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 relative" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="font-mono text-gray-500 mb-2">{'// Career Path'}</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            <span className="text-gray-500">{'<'}</span>
            Work <span className="text-gradient">Experience</span>
            <span className="text-gray-500">{' />'}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Git-style timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 via-cyan-400 to-blue-500" />

          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              {/* Git commit dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-green-400 rounded-full transform -translate-x-1/2 shadow-lg shadow-green-400/50 border-2 border-[#0d1117]" />

              {/* Content card */}
              <div className="ml-16 md:ml-0 md:w-11/12">
                <div className="terminal hover:border-green-500/50 transition-all">
                  {/* Terminal Header */}
                  <div className="terminal-header">
                    <div className="terminal-dot bg-red-500"></div>
                    <div className="terminal-dot bg-yellow-500"></div>
                    <div className="terminal-dot bg-green-500"></div>
                    <span className="text-xs text-gray-400 ml-2 font-mono">experience_{exp.id}.log</span>
                  </div>

                  <div className="p-6">
                    {/* Job info as code */}
                    <div className="mb-4 font-mono text-sm">
                      <div className="mb-2">
                        <span className="syntax-keyword">class</span>{' '}
                        <span className="text-cyan-400 text-lg font-semibold">{exp.title}</span>{' '}
                        <span className="text-gray-400">{'{'}</span>
                      </div>
                      <div className="ml-4 space-y-1">
                        <div>
                          <span className="text-gray-500">company:</span>{' '}
                          <span className="syntax-string">"{exp.company}"</span>
                          <span className="text-gray-400">,</span>
                        </div>
                        <div>
                          <span className="text-gray-500">duration:</span>{' '}
                          <span className="syntax-string">"{exp.duration}"</span>
                          <span className="text-gray-400">,</span>
                        </div>
                        <div>
                          <span className="text-gray-500">achievements:</span>{' '}
                          <span className="text-gray-400">[</span>
                        </div>
                      </div>
                    </div>

                    {/* Achievements as array items */}
                    <ul className="space-y-2 ml-8 mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-gray-400 text-sm font-mono"
                        >
                          <HiCheckCircle className="text-green-400 mt-0.5 flex-shrink-0" size={18} />
                          <span>
                            <span className="text-gray-600">// </span>
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Closing brackets */}
                    <div className="font-mono text-sm">
                      <div className="ml-4">
                        <span className="text-gray-400">]</span>
                      </div>
                      <div>
                        <span className="text-gray-400">{'}'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Git log style footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12 font-mono text-sm text-gray-500"
        >
          <span className="text-green-400">$</span> git log --oneline --graph
          <div className="text-xs mt-2">
            {experience.length} commits • {experience.length} companies • Continuous growth
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
