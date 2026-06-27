'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function LetsBuild() {
  const [showToast, setShowToast] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('hello@blitzy.co');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <motion.section 
      id="contact" 
      className="relative w-full h-screen bg-[#080808] flex flex-col justify-between"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      
      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="fixed top-8 right-8 z-[999] bg-[#C8FF00] text-[#080808] font-mono text-[11px] px-[16px] py-[8px] pointer-events-none"
          >
            ✓ Copied
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Section */}
      <div className="flex-1 flex flex-col md:flex-row w-full px-[7vw] pt-[15vh]">
        
        {/* Left Column (55%) */}
        <div className="w-full md:w-[55%] flex flex-col items-start pr-0 md:pr-16 mb-16 md:mb-0">
          <div className="font-mono text-[#6B6B67] text-[11px] uppercase tracking-widest mb-8">
            GET IN TOUCH
          </div>
          
          <h2 className="font-syne font-black leading-[0.9]" style={{ fontSize: 'clamp(56px, 8vw, 120px)' }}>
            <div className="text-[#F2EFE8]">LET'S BUILD</div>
            <div style={{ WebkitTextStroke: '1.5px #F2EFE8', color: 'transparent' }}>SOMETHING.</div>
          </h2>

          <div className="mt-[40px]">
            <button 
              onClick={handleCopy}
              className="font-mono text-[#C8FF00] text-[18px] hover:opacity-70 transition-opacity hover-trigger text-left"
            >
              hello@blitzy.co
            </button>
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
            className="group block w-full h-full min-h-[300px] border border-[#2A2A27] bg-[#0A0A0A] hover:border-[#C8FF00] hover:bg-[#0E0E0C] transition-all duration-250 ease-in-out flex flex-col items-center justify-center p-8 text-center hover-trigger cursor-none"
          >
            <div className="font-syne font-bold text-[#6B6B67] text-[28px] leading-none mb-2">
              BOOK A
            </div>
            <div className="font-syne font-black text-[#F2EFE8] text-[40px] leading-none mb-6">
              30-MIN CALL
            </div>
            <div className="font-syne font-black text-[#C8FF00] text-[80px] leading-none mb-8 group-hover:translate-x-4 transition-transform duration-300">
              →
            </div>
            <div className="font-mono text-[#6B6B67] text-[11px]">
              Free · No commitment
            </div>
          </Link>
        </div>

      </div>

      {/* Footer Bar */}
      <footer className="w-full h-[64px] border-t border-[#1E1E1C] px-[7vw] flex flex-col md:flex-row justify-between items-center bg-[#080808]">
        <div className="font-mono text-[#3A3A38] text-[10px]">
          Aarav Malviya © {new Date().getFullYear()}
        </div>
        
        <div className="hidden md:block font-mono text-[#3A3A38] text-[10px]">
          Engineered in India · Built with Next.js 15
        </div>
        
        <div className="flex gap-6">
          <Link href="https://github.com/aarav-malviya" className="font-mono text-[#3A3A38] text-[10px] hover:text-[#F2EFE8] transition-colors hover-trigger">
            GitHub
          </Link>
          <Link href="https://linkedin.com/in/aarav-malviya" className="font-mono text-[#3A3A38] text-[10px] hover:text-[#F2EFE8] transition-colors hover-trigger">
            LinkedIn
          </Link>
        </div>
      </footer>

      </motion.section>
  );
}
