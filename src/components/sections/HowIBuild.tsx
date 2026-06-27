'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    id: '01',
    title: 'Architecture',
    desc: 'Map out the logic, data flow, and exact tools needed. No code until the blueprint is bulletproof.'
  },
  {
    id: '02',
    title: 'Automation',
    desc: 'Connect the APIs. Build the agents. Remove human bottlenecks to ensure the system runs autonomously.'
  },
  {
    id: '03',
    title: 'Scale',
    desc: 'Deploy to production with robust error handling. Monitor, refine, and handle exponential traffic.'
  }
];

export default function HowIBuild() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={sectionRef} className="relative w-full py-40 bg-[#050505] px-[7vw] overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-[#6B6B67] text-[11px] uppercase tracking-widest mb-8 text-center"
        >
          THE METHODOLOGY
        </motion.div>
        
        <h2 className="font-syne font-black text-[clamp(40px,6vw,80px)] leading-[0.9] text-center mb-32 tracking-tighter">
          <span className="text-[#F2EFE8]">HOW I </span>
          <span style={{ WebkitTextStroke: '1.5px #F2EFE8', color: 'transparent' }}>BUILD.</span>
        </h2>

        <div className="relative">
          {/* Vertical Track Base */}
          <div className="absolute left-[32px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/5" />
          
          {/* Vertical Track Fill */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-[32px] md:left-1/2 md:-translate-x-1/2 top-0 w-[2px] bg-gradient-to-b from-[#C8FF00]/0 via-[#C8FF00] to-[#C8FF00]/0 shadow-[0_0_15px_#C8FF00]"
          />
          
          {steps.map((step, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, x: isEven ? -50 : 50, rotateY: isEven ? -10 : 10 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: false, margin: "-150px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`relative flex items-center mb-24 last:mb-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
                style={{ perspective: '1000px' }}
              >
                {/* Center Node */}
                <div className="absolute left-[32px] md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#0a0a0a] border border-[#C8FF00]/30 flex items-center justify-center font-mono text-[#C8FF00] text-sm z-20 shadow-[0_0_20px_rgba(200,255,0,0.1)]">
                  <div className="absolute inset-0 bg-[#C8FF00] rounded-full blur-[10px] opacity-20" />
                  {step.id}
                </div>
                
                {/* Content Card */}
                <div className={`w-full md:w-[45%] pl-[80px] md:pl-0 ${isEven ? 'md:pr-[60px] md:text-right' : 'md:pl-[60px] md:text-left'}`}>
                  <div className="bg-[#0A0A0A] border border-white/5 p-8 rounded-2xl hover:border-[#C8FF00]/30 transition-colors duration-500 relative overflow-hidden group shadow-2xl">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#C8FF00]/5 blur-[60px] group-hover:bg-[#C8FF00]/10 transition-colors duration-500 rounded-full" />
                    <h3 className="font-syne font-black text-2xl text-[#F2EFE8] mb-4 uppercase tracking-tighter">
                      {step.title}
                    </h3>
                    <p className="font-sans text-[#8A8A86] text-[15px] leading-[1.6]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
