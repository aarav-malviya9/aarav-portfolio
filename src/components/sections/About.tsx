'use client';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const buildingNow = [
    'Autonomous Multi-Agent AI schedulers',
    'Blitzy Automation Platform upgrades',
    'Custom LiteLLM provider integrations',
    'Modern Next.js 15 + Tailwind 4 sites',
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 border-b border-zinc-900 bg-[#050505] relative z-10">
      <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-5">
          <span className="font-mono text-xs uppercase tracking-widest text-yellow-electric font-semibold block mb-4">WHO I AM</span>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white leading-tight uppercase select-none">
            BUILDER.<br />FOUNDER.<br />CURIOSITY DRIVEN.
          </h2>
        </div>

        <div className="md:col-span-7 space-y-8 font-sans">
          <p className="text-zinc-300 text-lg md:text-xl leading-relaxed font-light">
            I'm <strong className="text-white font-semibold">Aarav Malviya</strong>, a 15-year-old self-taught developer and builder based in India. I specialize in designing and engineering AI agents, automation pipelines, and modern web systems. 
          </p>
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-light">
            As the founder of <strong className="text-white font-semibold">Blitzy</strong>, I collaborate directly with growing companies to replace repetitive business tasks with smart workflows, build high-performance products, and establish premium brand systems. I don't write boilerplate code; I engineer digital infrastructure that drives revenue.
          </p>

          <div id="mission" className="p-6 rounded-lg border border-yellow-electric/15 bg-yellow-electric/5 glass-panel select-none">
            <span className="font-mono text-[10px] uppercase tracking-wider text-yellow-electric block mb-2 font-bold">CURRENT MISSION</span>
            <p className="text-white text-base font-medium mb-0">
              Architecting advanced multi-agent workflows and helping businesses automate operations at scale using custom LLM pipelines.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500 font-bold">CURRENTLY BUILDING</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {buildingNow.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded bg-zinc-950 border border-zinc-900/60 text-zinc-300 text-sm">
                  <CheckCircle2 className="w-4.5 h-4.5 text-yellow-electric flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
