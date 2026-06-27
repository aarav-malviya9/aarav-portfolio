'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function WhoIAm() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      id="about" 
      ref={containerRef} 
      className="relative w-full min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden py-32"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FFD400]/5 rounded-full blur-[120px]" />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 max-w-5xl mx-auto px-[7vw]"
      >
        <h2 className="font-syne font-bold text-[clamp(40px,6vw,80px)] text-[#F2EFE8] leading-[1.1] tracking-tight mb-12">
          I don't just build websites. <br />
          <span className="text-[#FFD400]">I engineer systems that scale.</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 text-[17px] text-[#B8B8B4] leading-[1.75] font-sans">
          <p>
            My name is Aarav Malviya. I am a 15-year-old builder, founder, and automation expert based in India. 
            I founded Blitzy because I saw a massive gap between what companies are doing and what they <i>could</i> be doing with modern technology.
          </p>
          <p>
            I specialize in bridging the gap between raw AI capabilities and tangible business value. Whether it's crafting 
            premium digital experiences, building autonomous agents, or developing high-converting systems—my obsession is quality. 
            No templates. No fluff. Just ruthless execution.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
