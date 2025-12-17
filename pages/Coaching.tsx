
import React from 'react';
import Layout from '../components/Layout';
import { UserCheck, BookOpen, MessageSquare, TrendingUp } from 'lucide-react';

const Coaching: React.FC = () => {
  const pillars = [
    { title: 'Technical Literacy', desc: 'Understanding the tools you use every day without the fear of breaking them.', icon: <BookOpen /> },
    { title: 'Strategic Planning', desc: 'Mapping out your digital growth and technology roadmap for the next 5 years.', icon: <TrendingUp /> },
    { title: 'Empowered Usage', desc: 'Moving from reactive troubleshooting to proactive mastery of your systems.', icon: <UserCheck /> },
    { title: 'Ongoing Support', desc: 'A dedicated coach available to answer questions as your business evolves.', icon: <MessageSquare /> }
  ];

  return (
    <Layout image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200&h=1600">
      <div className="space-y-12 pb-20">
        <header>
          <span className="text-savvy-lavender font-bold uppercase tracking-[0.4em] text-[10px] block mb-4">DIGITAL EMPOWERMENT</span>
          <h2 className="text-4xl md:text-5xl font-serif italic text-white mb-6">Don't just use tech. <br />Master it.</h2>
          <p className="text-zinc-500 text-sm max-w-md">Our coaching isn't about teaching you to code—it's about teaching you to think like a digital strategist.</p>
        </header>

        <div className="grid grid-cols-1 gap-6">
          {pillars.map((p, i) => (
            <div key={i} className="flex gap-6 items-start p-6 bg-zinc-900 border border-white/5 rounded-2xl hover:border-savvy-purple/40 transition-all group">
              <div className="w-12 h-12 flex-shrink-0 bg-savvy-blue/10 rounded-xl flex items-center justify-center text-savvy-blue group-hover:bg-savvy-blue group-hover:text-white transition-all duration-500">
                {p.icon}
              </div>
              <div>
                <h3 className="text-white font-bold text-base uppercase tracking-widest mb-2 group-hover:text-savvy-blue transition-colors">{p.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-8">
          <button className="w-full md:w-auto px-10 py-4 bg-white text-black font-bold uppercase tracking-widest text-[10px] rounded-full hover:bg-savvy-lavender transition-all">
            Inquire About Coaching Spots
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Coaching;
