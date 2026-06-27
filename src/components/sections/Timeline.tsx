'use client';

import { motion } from 'framer-motion';

const timeline = [
  {
    year: '2024',
    title: 'Founded Blitzy',
    desc: 'Scaled to multiple B2B clients, deploying autonomous AI agents that save hundreds of hours weekly.'
  },
  {
    year: '2023',
    title: 'Mastered Full-Stack',
    desc: 'Transitioned from simple websites to complex Next.js applications and advanced n8n workflow systems.'
  },
  {
    year: '2022',
    title: 'The Beginning',
    desc: 'Wrote my first lines of code. Obsessed over design, UI/UX, and how technology can solve real problems.'
  }
];

export default function Timeline() {
  return (
    <section className="relative w-full py-32 bg-[#050505] px-[7vw]">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <h2 className="font-syne font-bold text-[clamp(32px,5vw,56px)] text-[#F2EFE8] tracking-tight sticky top-32">
            The Journey
          </h2>
        </div>

        <div className="md:w-2/3 relative">
          {/* Vertical Line */}
          <div className="absolute left-[7px] top-4 bottom-0 w-[1px] bg-white/[0.05]" />

          <div className="flex flex-col gap-16">
            {timeline.map((item, i) => (
              <motion.div 
                key={item.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative pl-12"
              >
                {/* Glowing Dot */}
                <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-[#FFD400] shadow-[0_0_15px_rgba(255,212,0,0.5)]" />
                
                <span className="font-mono text-[#FFD400] text-[12px] tracking-widest block mb-2">
                  {item.year}
                </span>
                <h3 className="font-syne font-bold text-2xl md:text-3xl text-[#F2EFE8] mb-4">
                  {item.title}
                </h3>
                <p className="font-sans text-[#B8B8B4] text-[16px] leading-[1.6]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
