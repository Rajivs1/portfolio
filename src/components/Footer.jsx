import { motion } from 'framer-motion';
import { HiArrowUp, HiHeart } from 'react-icons/hi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-8 border-t border-slate-800/50 bg-[#0a0e27]/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm flex items-center gap-2">
            © {new Date().getFullYear()} Rajiv Ranjan. Made with <HiHeart className="text-red-500" /> and code
          </p>

          <p className="text-slate-500 text-sm">
            <span className="text-purple-400">React</span> • <span className="text-blue-400">Tailwind</span> • <span className="text-pink-400">Framer Motion</span>
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 neon-glass rounded-xl flex items-center justify-center hover:bg-purple-500/10 transition-all"
            aria-label="Scroll to top"
          >
            <HiArrowUp size={20} className="text-purple-400" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
