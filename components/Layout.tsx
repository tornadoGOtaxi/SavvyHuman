
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Instagram, Linkedin, Twitter, Phone, Mail, MapPin, Globe, Monitor } from 'lucide-react';
import CustomCursor from './CustomCursor';
import Logo from './Logo';
import LiveChat from './LiveChat';

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
      <LiveChat />
      
      {/* Header / Logo */}
      <header className="fixed top-0 left-0 w-full z-50 p-6 md:p-10 flex justify-between items-center pointer-events-none">
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
          className="pointer-events-auto w-12 h-12 flex items-center justify-center bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-white hover:bg-savvy-blue transition-all duration-300 z-[70]"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </header>

      {/* Menu Overlay - Split Slider Effect */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col pointer-events-none"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Split Panels */}
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

            {/* Content Container - Items aligned to the left */}
            <div className="relative z-10 flex flex-col items-start justify-center h-full w-full max-w-screen-xl mx-auto px-10 md:px-24 pointer-events-none">
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                   style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

              <div className="flex items-center gap-6 mb-12 pointer-events-auto">
                <div className="w-12 h-[1px] bg-savvy-blue"></div>
                <span className="text-savvy-lavender font-bold uppercase tracking-[0.5em] text-[10px]">NAVIGATION INDEX</span>
              </div>

              <nav className="flex flex-col gap-6 text-left z-10 pointer-events-auto" aria-label="Main navigation">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30, transition: { duration: 0.3 } }}
                    transition={{ 
                      delay: 0.2 + idx * 0.08, 
                      duration: 0.7, 
                      ease: [0.215, 0.61, 0.355, 1] 
                    }}
                    className="group"
                  >
                    <NavLink
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      aria-label={`Go to ${link.label} page`}
                      className={({ isActive }) => 
                        `flex items-baseline gap-6 transition-all duration-500 ${
                          isActive ? 'text-savvy-purple italic translate-x-4' : 'text-zinc-800 hover:text-white hover:italic hover:translate-x-2'
                        }`
                      }
                    >
                      <span className="text-xs font-black font-sans opacity-30 group-hover:opacity-100 transition-opacity">
                        0{idx + 1}.
                      </span>
                      <span className="text-5xl md:text-8xl font-serif tracking-tight leading-none">
                        {link.label}
                      </span>
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-20 flex flex-col md:flex-row gap-12 text-zinc-600 z-10 pointer-events-auto border-t border-white/5 pt-12 w-full max-w-lg"
              >
                <div className="space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] block">Connect</span>
                  <div className="flex gap-6">
                    <Instagram className="hover:text-savvy-pink cursor-pointer transition-colors" size={20} />
                    <Linkedin className="hover:text-savvy-blue cursor-pointer transition-colors" size={20} />
                    <Twitter className="hover:text-savvy-purple cursor-pointer transition-colors" size={20} />
                  </div>
                </div>
                <div className="space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] block">Inquiries</span>
                  <a href="mailto:renee.i@Savvyhuman.tech" className="text-xs font-light hover:text-white transition-colors block">renee.i@Savvyhuman.tech</a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Left Content Side */}
      <main className="w-full md:w-1/2 min-h-screen pt-32 pb-12 px-6 md:px-16 lg:px-24 flex flex-col relative z-10 overflow-y-auto overflow-x-hidden bg-zinc-950">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
            className="flex-grow"
          >
            {children}
          </motion.div>
        </AnimatePresence>

        {/* Global Footer */}
        <footer className="mt-24 pt-20 border-t border-white/5" aria-label="Site footer">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
            {/* Column 1: Brand */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-savvy-blue/10 rounded-xl flex items-center justify-center text-savvy-blue border border-savvy-blue/20">
                  <Monitor size={24} />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-black uppercase tracking-[0.2em] text-xl leading-none">SAVVY IT</span>
                  <span className="text-serif italic text-[10px] text-savvy-lavender mt-1">Technology, made simple.</span>
                </div>
              </div>
              <p className="text-zinc-500 text-xs leading-relaxed max-w-xs font-light">
                Human-friendly tech support, strategy, and automation. We don't just fix problems; we empower you to master your digital world with confidence and clarity.
              </p>
              <div className="flex gap-4 pt-2">
                <a href="#" aria-label="Visit our Instagram profile" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-zinc-600 hover:text-savvy-pink hover:bg-savvy-pink/10 transition-all">
                  <Instagram size={16} />
                </a>
                <a href="#" aria-label="Connect with us on LinkedIn" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-zinc-600 hover:text-savvy-blue hover:bg-savvy-blue/10 transition-all">
                  <Linkedin size={16} />
                </a>
                <a href="#" aria-label="Follow us on Twitter" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-zinc-600 hover:text-savvy-purple hover:bg-savvy-purple/10 transition-all">
                  <Twitter size={16} />
                </a>
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-white font-black text-[9px] uppercase tracking-[0.4em] mb-6">Explore</h4>
              <nav className="flex flex-col gap-3" aria-label="Footer main navigation">
                {navLinks.map(link => (
                  <NavLink key={link.path} to={link.path} aria-label={`Go to ${link.label} page`} className="text-zinc-500 hover:text-savvy-blue text-[11px] font-medium transition-colors">
                    {link.label}
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Column 3: Expertise */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-white font-black text-[9px] uppercase tracking-[0.4em] mb-6">Expertise</h4>
              <nav className="flex flex-col gap-3" aria-label="Footer services navigation">
                <NavLink to="/services" aria-label="View Technical Diagnostics services" className="text-zinc-500 hover:text-savvy-blue text-[11px] font-medium transition-colors">Technical Diagnostics</NavLink>
                <NavLink to="/ai-automation" aria-label="View Workflow Automation services" className="text-zinc-500 hover:text-savvy-blue text-[11px] font-medium transition-colors">Workflow Automation</NavLink>
                <NavLink to="/coaching" aria-label="View 1:1 Digital Strategy coaching" className="text-zinc-500 hover:text-savvy-blue text-[11px] font-medium transition-colors">1:1 Digital Strategy</NavLink>
                <NavLink to="/about" aria-label="Read The Manifesto" className="text-zinc-500 hover:text-savvy-blue text-[11px] font-medium transition-colors">The Manifesto</NavLink>
              </nav>
            </div>

            {/* Column 4: Contact */}
            <div className="lg:col-span-3 space-y-6">
              <h4 className="text-white font-black text-[9px] uppercase tracking-[0.4em] mb-6">Connect</h4>
              <div className="space-y-4">
                <a href="tel:217-986-0863" className="flex items-center gap-3 group" aria-label="Call Savvy IT at 217-986-0863">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-savvy-purple group-hover:bg-savvy-purple group-hover:text-white transition-all">
                    <Phone size={14} />
                  </div>
                  <span className="text-zinc-400 text-xs font-light group-hover:text-white transition-colors">217-986-0863</span>
                </a>
                <a href="mailto:renee.i@Savvyhuman.tech" className="flex items-center gap-3 group" aria-label="Email Savvy IT at renee.i@Savvyhuman.tech">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-savvy-purple group-hover:bg-savvy-purple group-hover:text-white transition-all">
                    <Mail size={14} />
                  </div>
                  <span className="text-zinc-400 text-xs font-light group-hover:text-white transition-colors break-all">renee.i@Savvyhuman.tech</span>
                </a>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-zinc-600">
                    <MapPin size={14} />
                  </div>
                  <span className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">Taylorville, IL & Beyond</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 pb-12">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <p className="text-[9px] text-zinc-600 uppercase tracking-widest font-black">
                © 2025 SAVVY IT TECHNICAL SOLUTIONS.
              </p>
              <div className="flex gap-6" aria-label="Legal links">
                <NavLink to="/contact" aria-label="Read our Privacy Policy" className="text-[9px] text-zinc-700 hover:text-zinc-400 uppercase tracking-widest font-bold transition-colors">Privacy Policy</NavLink>
                <NavLink to="/contact" aria-label="Read our Terms of Service" className="text-[9px] text-zinc-700 hover:text-zinc-400 uppercase tracking-widest font-bold transition-colors">Terms of Service</NavLink>
              </div>
            </div>
            <div className="flex items-center gap-4 text-[9px] text-zinc-700 uppercase tracking-[0.3em] font-black">
              <span className="flex items-center gap-2">
                <Globe size={10} className="text-savvy-blue/40" />
                GLOBAL EXPERTISE
              </span>
              <span className="w-1 h-1 rounded-full bg-zinc-800"></span>
              <span className="text-savvy-lavender/30">HUMAN DELIVERED</span>
            </div>
          </div>
        </footer>
      </main>

      {/* Right Visual Side */}
      <div className="w-full md:w-1/2 h-[60vh] md:h-screen relative overflow-hidden group border-l border-white/5">
        <AnimatePresence mode="wait">
          <motion.div
            key={image}
            initial={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
            transition={{ duration: 2.5, ease: [0.19, 1, 0.22, 1] }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-savvy-deep/20 mix-blend-overlay z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-20 md:hidden"></div>
            <img 
              src={image} 
              alt="Contextual background reflecting the current page topic"
              className="w-full h-full object-cover grayscale brightness-50 contrast-125 transition-transform duration-[10s] ease-linear"
              style={{ transform: 'scale(1.05)' }}
            />
            
            {/* Split Decorative Elements */}
            <div className="absolute bottom-12 right-12 z-30 hidden lg:block">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col items-end text-right gap-3"
              >
                <div className="w-12 h-[1px] bg-savvy-blue mb-2"></div>
                <span className="text-savvy-lavender font-bold uppercase tracking-[0.8em] text-[8px]">ESTABLISHED MMXXIII</span>
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
          aria-label="Start your technical transformation - Contact us"
          className="group relative overflow-hidden bg-white text-black px-8 py-4 rounded-full flex items-center gap-4 transition-all duration-500 hover:pr-12 shadow-2xl shadow-savvy-blue/20"
        >
          <div className="absolute inset-0 bg-savvy-blue translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.2em] group-hover:text-white transition-colors">Start Your Transformation</span>
          <ArrowRight size={16} className="relative z-10 group-hover:text-white group-hover:translate-x-2 transition-all duration-500" />
        </NavLink>
      </motion.div>
    </div>
  );
};

export default Layout;
