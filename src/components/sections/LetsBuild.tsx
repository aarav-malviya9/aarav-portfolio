'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function LetsBuild() {
  return (
    <motion.section 
      id="contact" 
      className="relative w-full min-h-screen bg-[#080808] flex flex-col justify-between"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex-1 flex flex-col md:flex-row w-full px-[7vw] pt-[15vh]">
        
        {/* Left Column (55%) */}
        <div className="w-full md:w-[55%] flex flex-col items-start pr-0 md:pr-8 mb-16 md:mb-0">
          <div className="font-mono text-[#6B6B67] text-[11px] uppercase tracking-widest mb-8">
            GET IN TOUCH
          </div>
          
          <h2 className="font-syne font-black leading-[0.9] flex flex-wrap break-words overflow-wrap-normal" style={{ fontSize: 'clamp(48px, 6.5vw, 100px)' }}>
            <div className="text-[#F2EFE8] w-full shrink-0">LET'S BUILD</div>
            <div className="w-full shrink-0" style={{ WebkitTextStroke: '1.5px #F2EFE8', color: 'transparent' }}>SOMETHING.</div>
          </h2>

          <div className="mt-[40px]">
            <a 
              href="mailto:27aaravmalviya@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[#C8FF00] text-[18px] hover:opacity-70 transition-opacity hover-trigger text-left break-all"
            >
              27aaravmalviya@gmail.com
            </a>
          </div>

          <div className="mt-[24px] font-mono text-[#6B6B67] text-[11px]">
            Response within 24h · No agencies
          </div>
        </div>

        {/* Right Column (45%) */}
        <div className="w-full md:w-[45%] h-full pb-[4vh]">
          <Link 
            href="https://calendly.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full h-[300px] md:h-full max-h-[400px] border border-[#1A1A1A] rounded-[24px] flex flex-col items-center justify-center gap-6 overflow-hidden hover-trigger hover:border-[#333333] transition-all bg-[#0a0a0a]"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#C8FF00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="text-center z-10">
              <div className="font-mono text-[#6B6B67] text-[14px] uppercase tracking-widest mb-2 transition-colors group-hover:text-white">
                BOOK A
              </div>
              <div className="font-syne font-black text-[#F2EFE8] text-[32px] md:text-[48px]">
                30-MIN CALL
              </div>
            </div>
            
            {/* Animated Arrow */}
            <div className="text-[#C8FF00] z-10 flex items-center justify-center transform group-hover:translate-x-4 transition-transform duration-300">
              <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12H46M46 12L36 2M46 12L36 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square"/>
              </svg>
            </div>

            <div className="absolute bottom-6 font-mono text-[10px] text-[#444444] tracking-widest uppercase z-10">
              Free · No commitment
            </div>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full px-[7vw] py-8 border-t border-[#1a1a1a] flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-[#6B6B67] bg-[#050505]">
        <div>
          © {new Date().getFullYear()} Aarav Malviya. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="https://github.com/aarav-malviya9" target="_blank" className="hover:text-white transition-colors">GITHUB</a>
          <a href="https://linkedin.com/in/aarav-malviya" target="_blank" className="hover:text-white transition-colors">LINKEDIN</a>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-[#C8FF00] transition-colors">
            BACK TO TOP ↑
          </button>
        </div>
      </footer>
    </motion.section>
  );
}
