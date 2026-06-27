'use client';

import { motion } from 'framer-motion';

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
  return (
    <section className="relative w-full py-32 bg-[#050505] px-[7vw] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-syne font-bold text-[clamp(32px,5vw,56px)] text-[#F2EFE8] mb-24 tracking-tight text-center">
          The Methodology
        </h2>

        <div className="relative flex flex-col md:flex-row justify-between items-start gap-12 md:gap-4 mt-16">
          
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#FFD400]/30 to-transparent" />
          
          {steps.map((step, i) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative flex flex-col items-center text-center w-full md:w-1/3 z-10"
            >
              {/* Glowing Node */}
              <div className="relative w-14 h-14 mb-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-[#FFD400] rounded-full blur-[20px] opacity-20" />
                <div className="w-14 h-14 rounded-full bg-[#0a0a0a] border border-[#FFD400]/30 flex items-center justify-center font-mono text-[#FFD400] text-sm">
                  {step.id}
                </div>
              </div>
              
              <h3 className="font-syne font-bold text-2xl text-[#F2EFE8] mb-4">
                {step.title}
              </h3>
              <p className="font-sans text-[#B8B8B4] text-[16px] leading-[1.6] max-w-[280px]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
