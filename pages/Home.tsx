
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
import { motion } from 'framer-motion';
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
      desc: "Expert diagnostics and software tuning to make your devices run like they should have from day one.",
      features: ["Computer Checkups", "Security Hardening", "Hardware Overhauls"],
      path: "/services",
      color: "group-hover:text-savvy-blue"
    },
    {
      icon: <GraduationCap className="text-savvy-lavender" />,
      title: "Coaching & Training",
      desc: "Learn to use your own tech with confidence through personal sessions and strategic training.",
      features: ["1:1 Strategy", "Digital Literacy", "AI Empowerment"],
      path: "/coaching",
      color: "group-hover:text-savvy-purple"
    },
    {
      icon: <Zap className="text-savvy-lavender" />,
      title: "AI & Automation",
      desc: "Build automated workflows and implement AI tools that finally make technology work for you.",
      features: ["Custom GPTs", "Workflow Audits", "Zapier/Make Setup"],
      path: "/ai-automation",
      color: "group-hover:text-savvy-pink"
    }
  ];

  return (
    <Layout image={heroImages[bgIndex]}>
      <div className="space-y-32">
        {/* Hero Section */}
        <section className="space-y-12 min-h-[75vh] flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-savvy-lavender font-bold uppercase tracking-[0.5em] text-[11px] px-5 py-2 bg-savvy-lavender/10 rounded-full border border-savvy-lavender/20 inline-flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-savvy-blue animate-pulse" />
              Technology, Made Simple.
            </span>
          </motion.div>
          
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.9] uppercase italic font-serif">
              Fast. Clean. <br />
              <span className="text-savvy-purple not-italic font-sans tracking-tight">Human</span>-Friendly <br />
              Tech.
            </h1>
            
            <p className="text-zinc-500 text-xl md:text-2xl max-w-xl leading-relaxed font-light">
              We fix your tech, optimize your workflow, and teach you to actually understand it. 
              <span className="text-white font-medium italic"> No jargon. No judgment.</span>
            </p>
          </div>
          
          <div className="flex flex-wrap gap-6">
            <NavLink 
              to="/contact" 
              className="bg-white text-black px-10 py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] transition-all hover:bg-savvy-blue hover:text-white shadow-2xl shadow-white/5 flex items-center gap-3"
            >
              Book a Session <ArrowUpRight size={18} />
            </NavLink>
            <NavLink 
              to="/services" 
              className="bg-transparent border border-white/10 text-white px-10 py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] transition-all hover:border-white hover:bg-white/5"
            >
              Our Services
            </NavLink>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="space-y-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <span className="text-savvy-purple font-bold uppercase tracking-[0.6em] text-[10px]">EXPERTISE</span>
              <h2 className="text-4xl md:text-6xl font-serif italic text-white tracking-tight">Three ways to get savvy.</h2>
            </div>
            <p className="text-zinc-500 text-sm max-w-xs font-light leading-relaxed">
              Strategic support designed to move you from frustration to digital mastery.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {waysToGetSavvy.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-10 bg-zinc-900/40 border border-white/5 rounded-[2.5rem] hover:border-white/20 hover:bg-zinc-900 transition-all duration-700 flex flex-col justify-between"
              >
                <div className="space-y-8">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-savvy-blue transition-all duration-700">
                    <div className="text-zinc-400 group-hover:text-white group-hover:scale-110 transition-all duration-700">
                      {item.icon}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className={`text-2xl font-bold text-white transition-colors ${item.color}`}>{item.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed font-light">{item.desc}</p>
                  </div>
                  <ul className="space-y-3 pt-4 border-t border-white/5">
                    {item.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-3 text-[10px] text-zinc-400 uppercase tracking-widest font-black">
                        <span className="w-1.5 h-1.5 rounded-full bg-savvy-purple/30 group-hover:bg-savvy-purple transition-all" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <NavLink to={item.path} className="mt-12 inline-flex items-center gap-3 text-white text-[10px] font-black uppercase tracking-[0.4em] group/link">
                  Explore <ChevronRight size={14} className="group-hover/link:translate-x-2 transition-transform" />
                </NavLink>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Philosophy Block */}
        <section className="relative overflow-hidden bg-zinc-900 border border-white/5 rounded-[3rem] p-12 md:p-24 group">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-savvy-blue/10 blur-[120px] rounded-full group-hover:bg-savvy-blue/20 transition-all duration-1000"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <div className="space-y-12">
              <span className="text-savvy-pink font-bold uppercase tracking-[0.6em] text-[10px]">MANIFESTO</span>
              <h2 className="text-5xl md:text-7xl font-serif italic text-white leading-[1.1] tracking-tighter">
                We don't just fix it. <br />
                <span className="text-zinc-600 not-serif font-sans uppercase font-black text-4xl md:text-5xl">We teach it.</span>
              </h2>
              <div className="space-y-6 pt-8 border-t border-white/5">
                {[
                  "No Technical Jargon",
                  "Radical Transparency",
                  "Empowerment Over Dependency"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-5 text-white/90 font-bold text-xs uppercase tracking-[0.3em]">
                    <div className="w-10 h-10 rounded-xl bg-savvy-blue/20 flex items-center justify-center text-savvy-blue">
                      <CheckCircle2 size={20} />
                    </div>
                    {text}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-end space-y-8">
              <div className="p-10 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 relative">
                <MessageSquare className="text-savvy-pink absolute top-10 right-10 opacity-20" size={48} />
                <p className="text-white font-serif italic text-2xl leading-relaxed mb-8 relative z-10">
                  "Most tech support leaves you waiting for the next thing to break. Savvy IT showed me how to prevent it."
                </p>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-savvy-blue to-savvy-purple flex items-center justify-center font-black text-white text-xl">SM</div>
                  <div>
                    <p className="text-white font-black uppercase tracking-widest text-[11px]">Sarah Mitchell</p>
                    <p className="text-zinc-500 text-[9px] uppercase tracking-[0.4em] font-black mt-1">Creative Director</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center space-y-12 py-32 border-t border-white/5">
          <h2 className="text-5xl md:text-8xl font-serif italic text-white tracking-tighter leading-none">
            Ready to get <br />
            <span className="text-savvy-blue">savvy?</span>
          </h2>
          <p className="text-zinc-500 text-lg md:text-xl max-w-lg mx-auto font-light">
            No long-term contracts. No hidden fees. Just expert help when you need it most.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <NavLink 
              to="/contact" 
              className="w-full sm:w-auto bg-white text-black px-12 py-6 rounded-2xl font-black text-[12px] uppercase tracking-[0.4em] hover:bg-savvy-blue hover:text-white transition-all shadow-2xl"
            >
              Book Your Session
            </NavLink>
            <NavLink 
              to="/about" 
              className="w-full sm:w-auto bg-transparent border border-white/10 text-white px-12 py-6 rounded-2xl font-black text-[12px] uppercase tracking-[0.4em] hover:border-white transition-all"
            >
              The Manifesto
            </NavLink>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
