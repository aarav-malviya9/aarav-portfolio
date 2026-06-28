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

        <div className="relative border-l border-zinc-900 ml-4 md:ml-12 space-y-12 py-4">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative pl-8 md:pl-16 group"
            >
              <div className="absolute -left-[9px] top-1.5 w-4.5 h-4.5 rounded-full border-2 border-zinc-800 bg-[#050505] group-hover:border-cyan-electric transition-colors flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-cyan-electric transition-colors" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-sm text-cyan-electric font-bold">{step.num}</span>
                  <h3 className="text-xl md:text-2xl font-display font-extrabold text-white uppercase group-hover:text-cyan-electric transition-colors">
                    {step.title}
                  </h3>
                </div>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl font-sans">
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
