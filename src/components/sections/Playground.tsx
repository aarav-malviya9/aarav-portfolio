'use client';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import Radar from '../ui/Radar';

export default function Playground() {
  const constraintsRef = useRef<HTMLDivElement>(null);

  const playgroundTags = [
    'Next.js 15', 'AI Agents', 'n8n', 'LiteLLM', 'Gemini', 'Claude Code',
    'TypeScript', 'Figma', 'Supabase', 'Docker', 'Vercel', 'Tailwind 4'
  ];

  const timeline = [
    { year: '2024', title: 'The Spark', desc: 'Started learning frontend design, CSS layout grids, and core JavaScript scripting.' },
    { year: '2025', title: 'The AI Pivot', desc: 'Built custom API wrappers, discovered headless workflow setups in n8n, and developed first commercial automations.' },
    { year: '2026', title: 'Founding Blitzy', desc: 'Established Blitzy to productize business system integration, managing production code deployments.' },
    { year: 'Now', title: 'Scaling Work', desc: 'Engineering modular agent frameworks and refining clean responsive Next.js interfaces.' },
  ];

  return (
    <section id="playground" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 border-b border-zinc-900 bg-[#050505] relative z-10">
      <div className="max-w-5xl mx-auto space-y-24">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-yellow-electric font-semibold block mb-4">PLAYGROUND & TECH</span>
          <h2 className="text-4xl md:text-7xl font-display font-black text-white leading-tight uppercase select-none">
            INTERACTIVE<br />SANDBOX.
          </h2>
        </div>

        <div className="space-y-4">
          <h3 className="font-mono text-sm uppercase tracking-wider text-zinc-500 font-bold">physics-gravity sandbox (flick or drag tags)</h3>
          <div 
            ref={constraintsRef} 
            className="h-80 w-full rounded-lg border border-zinc-900 bg-zinc-950/40 relative overflow-hidden glass-panel select-none"
          >
            {playgroundTags.map((tag, idx) => (
              <motion.div
                key={idx}
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.1}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                whileDrag={{ scale: 1.1, cursor: 'grabbing' }}
                initial={{
                  x: 50 + (idx % 4) * 120,
                  y: 50 + Math.floor(idx / 4) * 70,
                }}
                className="absolute px-4 py-2 rounded-full border border-yellow-electric/25 bg-black text-yellow-electric text-xs font-mono font-medium hover:border-yellow-electric cursor-grab select-none z-10"
              >
                {tag}
              </motion.div>
            ))}
          </div>
        </div>

        <div id="radar" className="space-y-8">
          <h3 className="font-mono text-sm uppercase tracking-wider text-zinc-500 font-bold text-center">Tech Radar / Comfort Scales</h3>
          <Radar />
        </div>

        <div id="timeline" className="space-y-12">
          <h3 className="font-mono text-sm uppercase tracking-wider text-zinc-500 font-bold">The Journey Timeline</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {timeline.map((event, idx) => (
              <div key={idx} className="p-5 rounded border border-zinc-900 bg-zinc-950/40 glass-panel space-y-3 font-sans">
                <span className="font-mono text-lg font-bold text-yellow-electric block">{event.year}</span>
                <h4 className="font-display font-bold text-white text-lg uppercase tracking-tight">{event.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
