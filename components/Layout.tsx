
import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';
import { X, ArrowRight, Instagram, Linkedin, Twitter, Phone, Mail, MapPin, Globe, Monitor } from 'lucide-react';
import CustomCursor from './CustomCursor';
import Logo from './Logo';
import LiveChat from './LiveChat';

interface LayoutProps {
  children: React.ReactNode;
  image: string;
}

const Layout: React.FC<LayoutProps> = ({ children, image }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const menuContentRef = useRef<HTMLDivElement>(null);
  const [metadataVisible, setMetadataVisible] = useState(false);

  // Reset scroll on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location.pathname]);

  // IntersectionObserver to reveal footer content within the menu
  useEffect(() => {
    if (!isMenuOpen) {
      setMetadataVisible(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMetadataVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const timer = setTimeout(() => {
      const target = document.querySelector('#menu-footer');
      if (target) observer.observe(target);
    }, 1000);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [isMenuOpen]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/coaching', label: 'Coaching' },
    { path: '/ai-automation', label: 'AI & Automation' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className={`relative min-h-screen flex flex-col md:flex-row overflow-hidden bg-zinc-950 text-white selection:bg-savvy-blue selection:text-white ${isMenuOpen ? 'is-open' : ''}`}>
      <CustomCursor />
      <LiveChat />
      
      {/* Persistent Navbar */}
      <header className="fixed top-0 left-0 w-full z-[80] p-6 md:p-10 flex justify-between items-center pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="pointer-events-auto"
        >
          <NavLink to="/" className="group" aria-label="Savvy IT - Go to home page">
            <Logo className="flex-row items-center gap-4 text-left" />
          </NavLink>
        </motion.div>
        
        <motion.button 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="pointer-events-auto w-16 h-16 flex flex-col items-center justify-center bg-white/5 backdrop-blur-xl rounded-full border border-white/10 text-white hover:bg-savvy-blue hover:border-savvy-blue transition-all duration-500 z-[90] group"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
        >
          <div className="relative w-6 h-5 flex flex-col justify-between">
            <motion.span 
              animate={isMenuOpen ? { rotate: 45, y: 9, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
              className="h-0.5 bg-white block transition-all duration-500"
            />
            <motion.span 
              animate={isMenuOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0, width: "70%" }}
              className="h-0.5 bg-white block ml-auto transition-all duration-500"
            />
            <motion.span 
              animate={isMenuOpen ? { rotate: -45, y: -9, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
              className="h-0.5 bg-white block transition-all duration-500"
            />
          </div>
        </motion.button>
      </header>

      {/* Split Slider Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[70] flex flex-col pointer-events-none"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Panels Reveal Animation */}
            <motion.div 
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="absolute inset-x-0 top-0 h-1/2 bg-zinc-950 pointer-events-auto border-b border-white/5"
            />
            <motion.div 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="absolute inset-x-0 bottom-0 h-1/2 bg-zinc-950 pointer-events-auto"
            />

            {/* Menu Scrollable Content */}
            <div className="relative z-10 h-full w-full overflow-y-auto pointer-events-auto custom-scrollbar">
              <div className="flex flex-col items-start justify-center min-h-screen w-full max-w-screen-xl mx-auto px-10 md:px-24 py-32">
                
                {/* Visual Label */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-6 mb-16"
                >
                  <div className="w-12 h-[1px] bg-savvy-blue"></div>
                  <span className="text-savvy-lavender font-bold uppercase tracking-[0.5em] text-[10px]">MAIN NAVIGATION</span>
                </motion.div>

                {/* Nav Links */}
                <nav className="flex flex-col gap-6 md:gap-8 text-left" aria-label="Main navigation">
                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        delay: 0.5 + idx * 0.1, 
                        duration: 0.8, 
                        ease: [0.215, 0.61, 0.355, 1] 
                      }}
                      className="group relative"
                    >
                      <NavLink
                        to={link.path}
                        className={({ isActive }) => 
                          `flex items-baseline gap-6 transition-all duration-700 relative pb-2 ${
                            isActive ? 'text-savvy-purple italic translate-x-6' : 'text-zinc-800 hover:text-white hover:italic hover:translate-x-4'
                          }`
                        }
                      >
                        <span className="text-xs md:text-sm font-black font-sans opacity-40 group-hover:opacity-100 transition-opacity">
                          0{idx + 1}.
                        </span>
                        <span className="text-5xl md:text-9xl font-serif tracking-tighter leading-none relative">
                          {link.label}
                          <span className="nav-underline"></span>
                        </span>
                      </NavLink>
                    </motion.div>
                  ))}
                </nav>

                {/* Menu Meta Footer - Observed for visibility */}
                <motion.div 
                  id="menu-footer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={metadataVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8 }}
                  className="mt-32 flex flex-col md:flex-row gap-16 md:gap-32 text-zinc-600 border-t border-white/5 pt-16 w-full"
                >
                  <div className="space-y-6">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] block text-white/40">Connect</span>
                    <div className="flex gap-10">
                      <a href="#" className="hover:text-savvy-pink transition-colors flex items-center gap-2 group">
                        <Instagram size={20} />
                        <span className="text-[9px] uppercase font-bold tracking-widest hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity">Instagram</span>
                      </a>
                      <a href="#" className="hover:text-savvy-blue transition-colors flex items-center gap-2 group">
                        <Linkedin size={20} />
                        <span className="text-[9px] uppercase font-bold tracking-widest hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity">LinkedIn</span>
                      </a>
                      <a href="#" className="hover:text-savvy-purple transition-colors flex items-center gap-2 group">
                        <Twitter size={20} />
                        <span className="text-[9px] uppercase font-bold tracking-widest hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity">Twitter</span>
                      </a>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] block text-white/40">Say Hello</span>
                    <div className="space-y-2">
                      <a href="mailto:renee.i@Savvyhuman.tech" className="text-sm md:text-xl font-light hover:text-white transition-colors block border-b border-white/10 pb-2">renee.i@Savvyhuman.tech</a>
                      <a href="tel:217-986-0863" className="text-sm md:text-xl font-light hover:text-white transition-colors block">217-986-0863</a>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] block text-white/40">Availability</span>
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                      <span className="text-sm font-light uppercase tracking-widest text-zinc-400">Taking New Clients</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Side */}
      <main className="w-full md:w-1/2 min-h-screen pt-32 pb-12 px-6 md:px-16 lg:px-24 flex flex-col relative z-10 overflow-y-auto overflow-x-hidden bg-zinc-950">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="flex-grow"
          >
            {children}
          </motion.div>
        </AnimatePresence>

        {/* Standard Footer */}
        <footer className="mt-32 pt-20 border-t border-white/5" aria-label="Site footer">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
            <div className="lg:col-span-5 space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-savvy-blue/10 rounded-2xl flex items-center justify-center text-savvy-blue border border-savvy-blue/20">
                  <Monitor size={28} />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-black uppercase tracking-[0.3em] text-2xl leading-none">SAVVY IT</span>
                  <span className="text-serif italic text-xs text-savvy-lavender mt-1">Technology, made simple.</span>
                </div>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-sm font-light">
                Human-friendly tech support, strategy, and automation. We don't just fix problems; we empower you to master your digital world with confidence and clarity.
              </p>
            </div>

            <div className="lg:col-span-3 space-y-6">
              <h4 className="text-white font-black text-[10px] uppercase tracking-[0.5em] mb-8">Navigation</h4>
              <nav className="flex flex-col gap-4" aria-label="Footer main navigation">
                {navLinks.map(link => (
                  <NavLink key={link.path} to={link.path} className="text-zinc-500 hover:text-savvy-blue text-xs font-medium transition-colors w-fit">
                    {link.label}
                  </NavLink>
                ))}
              </nav>
            </div>

            <div className="lg:col-span-4 space-y-8">
              <h4 className="text-white font-black text-[10px] uppercase tracking-[0.5em] mb-8">Connect</h4>
              <div className="space-y-6">
                <a href="tel:217-986-0863" className="flex items-center gap-4 group w-fit" aria-label="Call Savvy IT at 217-986-0863">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-savvy-purple group-hover:bg-savvy-purple group-hover:text-white transition-all">
                    <Phone size={16} />
                  </div>
                  <span className="text-zinc-400 text-sm font-light group-hover:text-white transition-colors">217-986-0863</span>
                </a>
                <a href="mailto:renee.i@Savvyhuman.tech" className="flex items-center gap-4 group w-fit" aria-label="Email Savvy IT at renee.i@Savvyhuman.tech">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-savvy-purple group-hover:bg-savvy-purple group-hover:text-white transition-all">
                    <Mail size={16} />
                  </div>
                  <span className="text-zinc-400 text-sm font-light group-hover:text-white transition-colors break-all">renee.i@Savvyhuman.tech</span>
                </a>
                <div className="flex items-center gap-4 group w-fit">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-zinc-600">
                    <MapPin size={16} />
                  </div>
                  <span className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">Taylorville, IL & Beyond</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 pb-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-black">
                © 2025 SAVVY IT TECHNICAL SOLUTIONS.
              </p>
              <div className="flex gap-8" aria-label="Legal links">
                <NavLink to="/contact" className="text-[10px] text-zinc-700 hover:text-zinc-400 uppercase tracking-widest font-bold transition-colors">Privacy</NavLink>
                <NavLink to="/contact" className="text-[10px] text-zinc-700 hover:text-zinc-400 uppercase tracking-widest font-bold transition-colors">Terms</NavLink>
              </div>
            </div>
            <div className="flex items-center gap-6 text-[10px] text-zinc-700 uppercase tracking-[0.4em] font-black">
              <span className="flex items-center gap-2">
                <Globe size={12} className="text-savvy-blue/40" />
                GLOBAL EXPERTISE
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-800"></span>
              <span className="text-savvy-lavender/30">HUMAN DELIVERED</span>
            </div>
          </div>
        </footer>
      </main>

      {/* Right Visual Side */}
      <div className="w-full md:w-1/2 h-[60vh] md:h-screen relative overflow-hidden group border-l border-white/5 bg-zinc-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={image}
            initial={{ opacity: 0, scale: 1.2, filter: 'blur(30px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
            transition={{ duration: 2.5, ease: [0.19, 1, 0.22, 1] }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-savvy-deep/30 mix-blend-multiply z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-20 md:hidden"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/20 to-transparent z-20 hidden md:block"></div>
            <img 
              src={image} 
              alt="Contextual background"
              className="w-full h-full object-cover grayscale brightness-50 contrast-110 transition-transform duration-[20s] ease-linear group-hover:scale-110"
            />
            
            <div className="absolute bottom-12 right-12 z-30 hidden lg:block">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col items-end text-right gap-4 bg-zinc-950/20 backdrop-blur-sm p-6 rounded-2xl border border-white/5"
              >
                <div className="w-16 h-[2px] bg-savvy-blue mb-2"></div>
                <span className="text-savvy-lavender font-bold uppercase tracking-[1em] text-[10px]">EST. MMXXIII</span>
                <span className="text-zinc-400 text-xs max-w-[240px] uppercase leading-relaxed font-light">
                  Strategic technical diagnostics and workflow automation.
                </span>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Global CTA Overlay */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="fixed bottom-10 left-6 md:left-auto md:right-[50%] md:translate-x-[50%] z-40"
      >
        <NavLink 
          to="/contact" 
          className="group relative overflow-hidden bg-white text-black px-10 py-5 rounded-full flex items-center gap-6 transition-all duration-700 hover:pr-14 shadow-2xl shadow-savvy-blue/30"
        >
          <div className="absolute inset-0 bg-savvy-blue translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.19,1,0.22,1]"></div>
          <span className="relative z-10 text-[11px] font-black uppercase tracking-[0.3em] group-hover:text-white transition-colors">Get Started</span>
          <ArrowRight size={18} className="relative z-10 group-hover:text-white group-hover:translate-x-2 transition-all duration-700" />
        </NavLink>
      </motion.div>
    </div>
  );
};

export default Layout;
