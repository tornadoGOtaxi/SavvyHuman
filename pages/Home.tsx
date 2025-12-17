
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Monitor, 
  GraduationCap, 
  Zap, 
  CheckCircle2, 
  Star, 
  MessageSquare,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const heroImages = [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200&h=1600",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200&h=1600",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200&h=1600",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200&h=1600"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const waysToGetSavvy = [
    {
      icon: <Monitor className="text-savvy-lavender" />,
      title: "Technical Services",
      desc: "Diagnostics, optimization, cleanup, troubleshooting. We make your devices run like they should have from day one.",
      features: ["Computer Checkups", "Performance Optimization", "Software Management", "Data Organization"],
      path: "/services"
    },
    {
      icon: <GraduationCap className="text-savvy-lavender" />,
      title: "Coaching & Training",
      desc: "Learn to use your own tech with confidence. Personal sessions, family programs, business training.",
      features: ["1:1 Coaching", "Device Training", "AI Literacy", "Digital Skills"],
      path: "/coaching"
    },
    {
      icon: <Zap className="text-savvy-lavender" />,
      title: "AI & Automation",
      desc: "Set up AI tools, build automated workflows, and finally make technology work for you instead of against you.",
      features: ["AI Tool Setup", "Custom Workflows", "Process Automation", "Script Development"],
      path: "/ai-automation"
    }
  ];

  const testimonials = [
    {
      name: "Michael R.",
      role: "Retired Teacher",
      text: "I went from 'what's a cloud?' to setting up my own automated backup system. The patience and clarity were incredible.",
      stars: 5
    },
    {
      name: "Jennifer L.",
      role: "Freelance Designer",
      text: "They didn't just clean up my laptop — they showed me why it got slow in the first place. Haven't had an issue since.",
      stars: 5
    },
    {
      name: "David K.",
      role: "Real Estate Agent",
      text: "The AI training session paid for itself in the first week. I'm saving 3 hours a day on email alone.",
      stars: 5
    }
  ];

  return (
    <Layout image={heroImages[bgIndex]}>
      <div className="space-y-24">
        {/* Hero Section */}
        <section className="space-y-8 min-h-[70vh] flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-savvy-lavender font-bold uppercase tracking-[0.4em] text-[10px] px-4 py-1.5 bg-savvy-lavender/10 rounded-full border border-savvy-lavender/20 inline-flex items-center gap-2">
              <Zap size={10} /> Tech help that actually helps
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Fast. Clean. <br />
            <span className="text-savvy-purple">Human-friendly</span> <br />
            tech support.
          </h1>
          
          <p className="text-zinc-400 text-lg md:text-xl max-w-lg leading-relaxed font-light">
            We fix your tech, optimize your workflow, and teach you to actually understand it. 
            <span className="text-savvy-pink font-medium italic"> No jargon. No judgment. Just solutions.</span>
          </p>
          
          <div className="pt-4 flex flex-wrap gap-4">
            <NavLink 
              to="/contact" 
              className="bg-savvy-blue hover:bg-savvy-purple text-white px-8 py-4 rounded-xl font-bold text-sm transition-all shadow-xl shadow-savvy-blue/20 flex items-center gap-2"
            >
              Book a Tech Tune-Up <ArrowUpRight size={16} />
            </NavLink>
            <NavLink 
              to="/coaching" 
              className="bg-transparent border border-white/20 hover:border-savvy-pink text-white px-8 py-4 rounded-xl font-bold text-sm transition-all"
            >
              Explore Training Sessions
            </NavLink>
          </div>

          <div className="pt-8 flex flex-wrap gap-3">
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold border border-white/5 px-3 py-1 rounded-full">🔧 Tech Services</span>
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold border border-white/5 px-3 py-1 rounded-full">🎓 Coaching & Training</span>
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold border border-white/5 px-3 py-1 rounded-full">✨ AI & Automation</span>
          </div>
        </section>

        {/* Three ways to get savvy */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <span className="text-savvy-purple font-bold uppercase tracking-[0.5em] text-[9px]">WHAT WE DO</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Three ways to get savvy</h2>
            <p className="text-zinc-500 text-sm max-w-md mx-auto">Whether you need a fix, want to learn, or dream of automation — we've got you covered.</p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {waysToGetSavvy.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="group p-8 bg-zinc-900 border border-white/5 rounded-3xl hover:border-savvy-purple/30 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  <div className="w-14 h-14 shrink-0 bg-white/5 rounded-2xl flex items-center justify-center border border-white/5 group-hover:bg-savvy-deep transition-all duration-500">
                    {item.icon}
                  </div>
                  <div className="flex-1 space-y-4">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 pt-2">
                      {item.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2 text-[11px] text-zinc-500 uppercase tracking-wider">
                          <div className="w-1.5 h-1.5 rounded-full bg-savvy-blue"></div>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <NavLink to={item.path} className="inline-flex items-center gap-2 text-savvy-lavender hover:text-white text-xs font-bold uppercase tracking-widest pt-4 group">
                      Learn more <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </NavLink>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Our Philosophy Section */}
        <section className="relative overflow-hidden bg-savvy-deep rounded-[2.5rem] p-8 md:p-16">
          <div className="absolute top-0 right-0 w-64 h-64 bg-savvy-pink/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="space-y-8 relative z-10">
            <span className="text-white/60 font-bold uppercase tracking-[0.5em] text-[9px]">OUR PHILOSOPHY</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              We don't just fix it. <br />
              <span className="opacity-50 italic text-savvy-pink">We teach it.</span>
            </h2>
            <p className="text-savvy-lavender text-lg max-w-xl font-light leading-relaxed">
              Most tech support leaves you right where you started — waiting for the next thing to break. 
              We believe you should understand your technology, not fear it. That's why coaching is core to everything we do.
            </p>
            <div className="space-y-4 pt-4">
              {[
                "You shouldn't need a PhD to use your own laptop",
                "AI tools are only useful if you actually know how to use them",
                "The best tech support makes itself unnecessary",
                "Understanding beats dependency every time"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 text-white/80 font-medium text-sm">
                  <CheckCircle2 size={18} className="text-savvy-lavender" />
                  {text}
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 max-w-md">
              <MessageSquare className="text-savvy-pink mb-4" size={24} />
              <p className="text-white font-serif italic text-lg leading-relaxed mb-6">
                "After one session, I actually understood what all those icons meant. Now I fix half the problems myself."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-savvy-blue/50 flex items-center justify-center font-bold text-white">SM</div>
                <div>
                  <p className="text-white font-bold text-sm">Sarah M.</p>
                  <p className="text-white/60 text-[10px] uppercase tracking-widest font-bold">Small Business Owner</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <span className="text-savvy-purple font-bold uppercase tracking-[0.5em] text-[9px]">TESTIMONIALS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">People seem to like us</h2>
            <p className="text-zinc-500 text-sm max-w-md mx-auto">Don't take our word for it. Here's what our clients have to say.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className="p-8 bg-zinc-900/50 border border-white/5 rounded-3xl flex flex-col justify-between h-full">
                <div className="space-y-6">
                  <div className="flex gap-1">
                    {[...Array(t.stars)].map((_, i) => <Star key={i} size={14} className="fill-savvy-purple text-savvy-purple" />)}
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed font-light italic">"{t.text}"</p>
                </div>
                <div className="pt-8 border-t border-white/5 mt-8">
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="text-center space-y-8 py-20 relative overflow-hidden rounded-[2.5rem] bg-zinc-900 border border-white/5">
           <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          <span className="relative z-10 text-savvy-lavender font-bold uppercase tracking-[0.5em] text-[9px] px-3 py-1 bg-savvy-lavender/10 rounded-full">READY TO GET STARTED?</span>
          <h2 className="relative z-10 text-4xl md:text-6xl font-bold text-white tracking-tighter">
            Let's make your tech <br />
            <span className="text-savvy-blue italic">actually work for you.</span>
          </h2>
          <p className="relative z-10 text-zinc-500 text-lg max-w-xl mx-auto font-light">
            Whether you need a quick fix or a full training program, we're here to help. <br className="hidden md:block" />
            No sales pitch. Just solutions.
          </p>
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <NavLink 
              to="/contact" 
              className="w-full sm:w-auto bg-savvy-blue hover:bg-savvy-purple text-white px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] transition-all"
            >
              Schedule a Session
            </NavLink>
            <NavLink 
              to="/contact" 
              className="w-full sm:w-auto bg-transparent border border-white/10 hover:border-savvy-pink text-white px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare size={14} /> Ask a Question
            </NavLink>
          </div>
          <p className="relative z-10 text-zinc-600 text-[10px] uppercase tracking-widest font-bold">Response time: Usually within a few hours. We're real humans.</p>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
