
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Instagram, Linkedin, Twitter } from 'lucide-react';
import CustomCursor from './CustomCursor';

interface LayoutProps {
  children: React.ReactNode;
  image: string;
}

const Layout: React.FC<LayoutProps> = ({ children, image }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  // Reset scroll on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/coaching', label: 'Coaching' },
    { path: '/ai-automation', label: 'AI & Automation' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className="relative min-h-screen flex flex-col md:flex-row overflow-hidden bg-zinc-950">
      <CustomCursor />
      
      {/* Header / Logo */}
      <header className="fixed top-0 left-0 w-full z-50 p-6 md:p-10 flex justify-between items-center pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="pointer-events-auto"
        >
          <NavLink to="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2 group">
            <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:rotate-[360deg]">
              <span className="text-sm text-white font-bold">S</span>
            </div>
            <div className="flex flex-col -gap-1">
              <span className="text-white uppercase tracking-[0.3em] text-[10px] font-bold">Savvy IT</span>
              <span className="text-zinc-500 text-[8px] uppercase tracking-widest font-medium">Premium Solutions</span>
            </div>
          </NavLink>
        </motion.div>
        
        <motion.button 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="pointer-events-auto w-12 h-12 flex items-center justify-center bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-white hover:bg-indigo-600 transition-all duration-300"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </header>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 100 }}
            className="fixed inset-0 z-[60] bg-zinc-950 flex flex-col items-center justify-center p-12"
          >
            {/* Grid Pattern Background for Menu */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <nav className="flex flex-col gap-6 text-center z-10">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) => 
                      `text-5xl md:text-8xl font-serif tracking-tight transition-all duration-500 block ${
                        isActive ? 'text-indigo-500 italic translate-x-4' : 'text-zinc-800 hover:text-white hover:italic'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-20 flex gap-8 text-zinc-500 z-10"
            >
              <Instagram className="hover:text-white cursor-pointer transition-colors" size={24} />
              <Linkedin className="hover:text-white cursor-pointer transition-colors" size={24} />
              <Twitter className="hover:text-white cursor-pointer transition-colors" size={24} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Left Content Side */}
      <main className="w-full md:w-1/2 min-h-screen pt-32 pb-24 px-6 md:px-16 lg:px-24 flex flex-col relative z-10 overflow-y-auto overflow-x-hidden bg-zinc-950">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Right Visual Side */}
      <div className="w-full md:w-1/2 h-[60vh] md:h-screen relative overflow-hidden group border-l border-white/5">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ scale: 1.2, opacity: 0, filter: 'blur(10px)' }}
            animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
            exit={{ scale: 1.1, opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-indigo-900/10 mix-blend-overlay z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-20 md:hidden"></div>
            <img 
              src={image} 
              alt="Visual Representation"
              className="w-full h-full object-cover grayscale brightness-50 contrast-125 group-hover:scale-105 transition-transform duration-[3s]"
            />
            
            {/* Split Decorative Elements */}
            <div className="absolute bottom-12 right-12 z-30 hidden lg:block">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col items-end text-right gap-3"
              >
                <div className="w-12 h-[1px] bg-indigo-500 mb-2"></div>
                <span className="text-indigo-400 font-bold uppercase tracking-[0.8em] text-[8px]">ESTABLISHED MMXXIII</span>
                <span className="text-zinc-400 text-[10px] max-w-[200px] uppercase leading-relaxed font-light">
                  Specialized technical diagnostics and strategic automation for high-performing environments.
                </span>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating CTA Overlay */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="fixed bottom-10 left-6 md:left-auto md:right-[50%] md:translate-x-[50%] z-40"
      >
        <NavLink 
          to="/contact" 
          className="group relative overflow-hidden bg-white text-black px-8 py-4 rounded-full flex items-center gap-4 transition-all duration-500 hover:pr-12 shadow-2xl shadow-indigo-500/20"
        >
          <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.2em] group-hover:text-white transition-colors">Start Your Transformation</span>
          <ArrowRight size={16} className="relative z-10 group-hover:text-white group-hover:translate-x-2 transition-all duration-500" />
        </NavLink>
      </motion.div>
    </div>
  );
};

export default Layout;
