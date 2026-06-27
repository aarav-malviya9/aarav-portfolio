'use client';

import { motion } from 'framer-motion';

const philosophies = [
  {
    id: 1,
    title: 'Velocity over perfection.',
    desc: 'Shipping fast beats slow perfection. I build rapidly, iterate ruthlessly, and refine in production.',
    colSpan: 'md:col-span-2'
  },
  {
    id: 2,
    title: 'AI as a lever.',
    desc: 'Not a crutch. Systems that think act as a multiplier for human creativity and output.',
    colSpan: 'md:col-span-1'
  },
  {
    id: 3,
    title: 'Design is how it works.',
    desc: 'Aesthetics matter, but a beautiful product that is frustrating to use is a failure. Function dictates form.',
    colSpan: 'md:col-span-1'
  },
  {
    id: 4,
    title: 'Radical ownership.',
    desc: 'From the first line of code to the final deployment, I take absolute responsibility for the end result.',
    colSpan: 'md:col-span-2'
  }
];

export default function WhatIBelieve() {
  return (
    <section className="relative w-full py-32 bg-[#050505] px-[7vw]">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-syne font-bold text-[clamp(32px,5vw,56px)] text-[#F2EFE8] mb-16 tracking-tight">
          Core Principles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {philosophies.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden bg-white/[0.02] border border-white/[0.05] p-8 md:p-12 backdrop-blur-md hover:bg-white/[0.04] transition-colors ${item.colSpan}`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
              {/* Subtle grain overlay */}
              <div 
                className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
              />
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <h3 className="font-syne font-bold text-2xl md:text-3xl text-[#F2EFE8] mb-6 group-hover:text-[#FFD400] transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans text-[#B8B8B4] text-[16px] leading-[1.6]">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
