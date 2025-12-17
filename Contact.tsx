
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulate API call with a realistic delay
    setTimeout(() => {
      setFormState('success');
      setFormData({ name: '', email: '', subject: 'general', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Layout image="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=1200&h=1600">
      <div className="space-y-16 pb-20">
        <header>
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-savvy-lavender font-bold uppercase tracking-[0.6em] text-[9px] block mb-4"
          >
            GET SAVVY
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif italic text-white leading-tight tracking-tighter"
          >
            Human support <br />is a <span className="text-savvy-blue">click</span> away.
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3 text-zinc-500 text-sm mt-8 font-light bg-white/5 border border-white/5 w-fit px-4 py-2 rounded-full"
          >
            <Clock size={14} className="text-savvy-purple" />
            Response time: Usually within 4 business hours.
          </motion.div>
        </header>

        <div className="relative">
          <AnimatePresence mode="wait">
            {formState === 'success' ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-savvy-blue/10 border border-savvy-blue/20 p-12 rounded-[2.5rem] text-center space-y-6"
              >
                <div className="w-20 h-20 bg-savvy-blue rounded-full flex items-center justify-center text-white mx-auto shadow-xl shadow-savvy-blue/30">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-serif text-white italic">Transmission Received.</h3>
                <p className="text-zinc-400 text-sm max-w-xs mx-auto font-light leading-relaxed">
                  Thank you for reaching out. A technical strategist will contact you shortly to discuss your needs.
                </p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="text-[10px] font-black uppercase tracking-[0.4em] text-white hover:text-savvy-purple transition-colors pt-4 block mx-auto underline underline-offset-8"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-12"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="group relative">
                    <label className="absolute -top-6 left-0 text-[9px] font-black uppercase tracking-[0.3em] text-zinc-600 group-focus-within:text-savvy-blue transition-colors">Your Name</label>
                    <input 
                      required
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/10 py-4 text-white font-light focus:outline-none focus:border-savvy-blue transition-all placeholder:text-zinc-800" 
                      placeholder="e.g. Renee" 
                    />
                  </div>
                  <div className="group relative">
                    <label className="absolute -top-6 left-0 text-[9px] font-black uppercase tracking-[0.3em] text-zinc-600 group-focus-within:text-savvy-blue transition-colors">Email Address</label>
                    <input 
                      required
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/10 py-4 text-white font-light focus:outline-none focus:border-savvy-blue transition-all placeholder:text-zinc-800" 
                      placeholder="e.g. you@example.com" 
                    />
                  </div>
                </div>
                
                <div className="group relative">
                  <label className="absolute -top-6 left-0 text-[9px] font-black uppercase tracking-[0.3em] text-zinc-600 group-focus-within:text-savvy-blue transition-colors">Service Interest</label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white font-light focus:outline-none focus:border-savvy-blue transition-all appearance-none cursor-pointer"
                  >
                    <option className="bg-zinc-950 text-white" value="general">Book a Tech Tune-Up</option>
                    <option className="bg-zinc-950 text-white" value="coaching">Training & Coaching Sessions</option>
                    <option className="bg-zinc-950 text-white" value="ai">AI & Automation Audit</option>
                    <option className="bg-zinc-950 text-white" value="question">Ask a Quick Question</option>
                  </select>
                </div>

                <div className="group relative">
                  <label className="absolute -top-6 left-0 text-[9px] font-black uppercase tracking-[0.3em] text-zinc-600 group-focus-within:text-savvy-blue transition-colors">Details</label>
                  <textarea 
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4} 
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white font-light focus:outline-none focus:border-savvy-blue transition-all resize-none placeholder:text-zinc-800" 
                    placeholder="Tell us about your tech challenges..."
                  ></textarea>
                </div>

                <button 
                  disabled={formState === 'submitting'}
                  className="group relative overflow-hidden bg-white text-black w-full py-6 rounded-2xl font-black uppercase tracking-[0.5em] text-[10px] transition-all duration-500 disabled:opacity-50 shadow-xl shadow-white/5"
                >
                  <div className="absolute inset-0 bg-savvy-blue translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500"></div>
                  <span className="relative z-10 flex items-center justify-center gap-4 group-hover:text-white transition-colors">
                    {formState === 'submitting' ? (
                      <><Loader2 className="animate-spin" size={18} /> Processing...</>
                    ) : (
                      <><Send size={18} /> Send Inquiry</>
                    )}
                  </span>
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-16 border-t border-white/5">
          <div className="flex flex-col gap-6 p-8 bg-zinc-900/30 rounded-3xl border border-white/5">
            <div className="w-12 h-12 bg-savvy-purple/10 rounded-2xl flex items-center justify-center text-savvy-purple border border-savvy-purple/10">
              <Phone size={20} />
            </div>
            <div>
              <p className="text-[9px] text-zinc-600 uppercase font-black tracking-[0.3em] mb-2">Direct Line</p>
              <p className="text-white text-lg font-light hover:text-savvy-blue transition-colors cursor-pointer">217-986-0873</p>
            </div>
          </div>
          <div className="flex flex-col gap-6 p-8 bg-zinc-900/30 rounded-3xl border border-white/5">
            <div className="w-12 h-12 bg-savvy-purple/10 rounded-2xl flex items-center justify-center text-savvy-purple border border-savvy-purple/10">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-[9px] text-zinc-600 uppercase font-black tracking-[0.3em] mb-2">Electronic Mail</p>
              <p className="text-white text-lg font-light hover:text-savvy-blue transition-colors cursor-pointer break-all">renee.i@Savvyhuman.tech</p>
            </div>
          </div>
          <div className="flex flex-col gap-6 p-8 bg-zinc-900/30 rounded-3xl border border-white/5">
            <div className="w-12 h-12 bg-savvy-purple/10 rounded-2xl flex items-center justify-center text-savvy-purple border border-savvy-purple/10">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-[9px] text-zinc-600 uppercase font-black tracking-[0.3em] mb-2">Operational Hub</p>
              <p className="text-white text-lg font-light uppercase tracking-widest">Taylorville, IL</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
