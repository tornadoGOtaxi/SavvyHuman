
import React from 'react';
import Layout from '../components/Layout';
import { Bot, Code, Settings, Workflow, CheckCircle2 } from 'lucide-react';

const AIAutomation: React.FC = () => {
  const platforms = [
    { name: 'ChatGPT', sub: 'OpenAI Conversational AI' },
    { name: 'Claude', sub: 'Anthropic\'s Assistant' },
    { name: 'Google AI', sub: 'Gemini and Google Tools' },
    { name: 'Microsoft Copilot', sub: 'AI integrated with Office' },
    { name: 'Custom GPTs', sub: 'Specialized AI Assistants' },
    { name: 'Automation', sub: 'Zapier, Make, Power Automate' }
  ];

  const services = [
    {
      title: 'AI Tool Setup & Training',
      icon: <Bot className="text-indigo-400" />,
      desc: 'Get ChatGPT, Claude, or Copilot configured for your specific business needs.'
    },
    {
      title: 'Custom Workflows',
      icon: <Workflow className="text-indigo-400" />,
      desc: 'Connect your apps, automate repetitive tasks, and build workflows that run without you.'
    },
    {
      title: 'Process Streamlining',
      icon: <Settings className="text-indigo-400" />,
      desc: 'Audit your current processes to identify automation opportunities and implement improvements.'
    },
    {
      title: 'Custom Scripting',
      icon: <Code className="text-indigo-400" />,
      desc: 'SQL, PowerShell, Python, or JavaScript solutions for when off-the-shelf tools aren\'t enough.'
    }
  ];

  return (
    <Layout image="https://picsum.photos/id/10/1200/1600">
      <div className="space-y-12">
        <header>
          <span className="text-indigo-400 font-bold uppercase tracking-[0.4em] text-[10px] block mb-4">INTELLIGENT SYSTEMS</span>
          <h2 className="text-4xl md:text-5xl font-serif italic text-white mb-6">Future-proof your <br />daily operations.</h2>
          <p className="text-zinc-500 text-sm max-w-md">We're tool-agnostic. We help you find and implement the right AI for your specific constraints and goals.</p>
        </header>

        <section>
          <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6 border-b border-white/5 pb-2">Platforms We Master</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {platforms.map((p, i) => (
              <div key={i} className="bg-zinc-900 border border-white/5 p-4 rounded-xl flex flex-col justify-center">
                <span className="text-white font-bold text-sm block mb-1">{p.name}</span>
                <span className="text-zinc-600 text-[10px] uppercase tracking-tighter">{p.sub}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4 border-b border-white/5 pb-2">What We Deliver</h3>
          <div className="space-y-4">
            {services.map((s, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group">
                <div className="mt-1 group-hover:scale-110 transition-transform">{s.icon}</div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">{s.title}</h4>
                  <p className="text-zinc-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-indigo-600/10 border border-indigo-500/20 p-6 rounded-2xl flex items-center justify-between">
          <div className="flex items-center gap-4">
            <CheckCircle2 className="text-indigo-400" />
            <span className="text-zinc-300 text-sm">Ready to automate your first workflow?</span>
          </div>
          <button className="text-xs font-bold uppercase tracking-widest text-white hover:text-indigo-400 transition-colors">Start Discovery &rarr;</button>
        </div>
      </div>
    </Layout>
  );
};

export default AIAutomation;
