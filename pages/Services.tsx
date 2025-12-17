
import React from 'react';
import Layout from '../components/Layout';
import CostEstimator from '../components/CostEstimator';
import { Monitor, Shield, Zap, Cpu } from 'lucide-react';

const Services: React.FC = () => {
  const serviceList = [
    {
      title: 'Computer Checkups',
      icon: <Monitor />,
      desc: 'Complete hardware and software health assessment to identify issues before they become disasters.'
    },
    {
      title: 'Performance Optimization',
      icon: <Zap />,
      desc: 'Expert tuning to make your systems fast again. No magic — just methodical, expert optimization.'
    },
    {
      title: 'Security Hardening',
      icon: <Shield />,
      desc: 'Protecting your personal and business data from evolving digital threats.'
    },
    {
      title: 'Hardware Overhauls',
      icon: <Cpu />,
      desc: 'Strategic upgrades that extend the life of your equipment and maximize your ROI.'
    }
  ];

  return (
    <Layout image="https://picsum.photos/id/2/1200/1600">
      <div className="space-y-12">
        <header>
          <span className="text-indigo-400 font-bold uppercase tracking-[0.4em] text-[10px] block mb-4">TECHNICAL SERVICES</span>
          <h2 className="text-4xl md:text-5xl font-serif italic text-white mb-6">Transparent pricing, <br />tangible results.</h2>
          <p className="text-zinc-500 text-sm max-w-md">Detailed breakdown of our technical services and what each one includes. We don't hide behind technical jargon.</p>
        </header>

        <CostEstimator />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceList.map((item, i) => (
            <div key={i} className="group p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-white font-bold mb-2 uppercase tracking-wider text-xs">{item.title}</h4>
              <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Services;
