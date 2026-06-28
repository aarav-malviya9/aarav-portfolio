'use client';
import { motion } from 'framer-motion';

interface Step {
  num: string;
  title: string;
  desc: string;
}

export default function Process() {
  const steps: Step[] = [
    { num: '01', title: 'Discovery', desc: 'Identify critical bottlenecks in current business operations. We outline every manual step to map an ideal data flow.' },
    { num: '02', title: 'Research', desc: 'Select the optimal open-source tools, select between Gemini/Claude, and inspect latency/cost limits.' },
    { num: '03', title: 'Design', desc: 'Wireframe user interfaces in Figma and architect backend pipeline schemas before writing any production lines.' },
    { num: '04', title: 'Development', desc: 'Code custom Next.js endpoints, build robust n8n sub-nodes, and bind state hooks using TypeScript.' },
    { num: '05', title: 'Optimization', desc: 'Perform strict auditing, clean up bundle compilation steps, and verify 100/100 Lighthouse performance bounds.' },
    { num: '06', title: 'Launch', desc: 'Deploy assets to Vercel/Docker pipelines and initialize active metrics monitoring dashboards.' },
  ];

  return (
    <section id="process" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 border-b border-zinc-900 bg-[#050505] relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-cyan-electric font-semibold block mb-4">HOW I BUILD</span>
          <h2 className="text-4xl md:text-7xl font-display font-black text-white leading-tight uppercase select-none">
            A SYSTEMATIC<br />FLOW.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative p-8 rounded-2xl border border-zinc-900 bg-[#0a0a0a]/50 hover:bg-[#0f0f0f] glass-panel-hover overflow-hidden flex flex-col justify-between min-h-[280px]"
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-cyan-electric/5 rounded-full blur-2xl group-hover:bg-cyan-electric/10 transition-colors duration-500" />
              
              <div className="relative z-10">
                <span className="font-mono text-5xl text-zinc-800/50 font-black group-hover:text-cyan-electric/20 transition-colors duration-500">
                  {step.num}
                </span>
              </div>
              
              <div className="relative z-10 mt-8">
                <h3 className="text-xl font-display font-bold text-white uppercase group-hover:text-cyan-electric transition-colors duration-300 mb-3">
                  {step.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-sans">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
