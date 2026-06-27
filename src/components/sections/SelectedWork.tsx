'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: '01',
    title: 'JARVIS VOICE ASSISTANT',
    role: 'AI Developer',
    year: '2024',
    tech: ['Python', 'SpeechRecognition', 'Automation'],
    stat: '100%',
    statDesc: 'hands-free desktop control',
    link: 'https://github.com/aarav-malviya9/Jarvis-Desktop-Voice-Assistant',
    fullWidth: true
  },
  {
    id: '02',
    title: '3D WEBGL PORTFOLIO',
    role: 'Frontend Developer',
    year: '2024',
    tech: ['TypeScript', 'Three.js', 'React Three Fiber'],
    stat: '60',
    statDesc: 'frames per second render',
    link: 'https://github.com/aarav-malviya9/portfolio-3D',
    fullWidth: false
  },
  {
    id: '03',
    title: 'TECHYBLITZ',
    role: 'Full Stack Developer',
    year: '2024',
    tech: ['Next.js', 'TailwindCSS', 'Vercel'],
    stat: '10x',
    statDesc: 'faster content delivery',
    link: 'https://github.com/aarav-malviya9/Techyblitz',
    fullWidth: false
  },
  {
    id: '04',
    title: 'AWWWARDS PORTFOLIO',
    role: 'Design Engineer',
    year: '2026',
    tech: ['Next.js 15', 'Framer Motion', 'Tailwind'],
    stat: '100',
    statDesc: 'Lighthouse performance score',
    link: 'https://github.com/aarav-malviya9/aarav-portfolio',
    fullWidth: true
  }
];

export default function SelectedWork() {
  return (
    <motion.section 
      id="work" 
      className="w-full bg-[#050505] px-[7vw] pt-[120px] pb-[80px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Opener */}
        <div className="w-full mb-16 relative">
          <div className="font-mono text-[#6B6B67] text-[11px] tracking-widest uppercase mb-6">
            SELECTED WORK
          </div>
          
          <div className="flex justify-between items-end">
            <h2 className="font-syne font-black text-[#F2EFE8] leading-[0.9]" style={{ fontSize: 'clamp(48px, 7vw, 96px)' }}>
              <div>REAL PRODUCTS.</div>
              <div style={{ WebkitTextStroke: '1.5px #F2EFE8', color: 'transparent' }}>
                NO PLACEHOLDERS.
              </div>
            </h2>
            
            <div className="hidden md:block font-syne font-black text-[#1E1E1C] text-[96px] leading-[0.8] select-none">
              04
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#1E1E1C] border border-[#1E1E1C]">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial="initial"
              whileHover="hover"
              className={`group relative bg-[#0E0E0C] hover:bg-[#111110] transition-colors duration-300 flex ${
                project.fullWidth ? 'md:col-span-2 min-h-[380px] flex-col md:flex-row' : 'col-span-1 min-h-[300px] flex-col'
              }`}
            >
              {/* Sweeping Top Border */}
              <motion.div 
                className="absolute top-0 left-0 right-0 h-[2px] bg-[#C8FF00] z-10 origin-left"
                variants={{
                  initial: { clipPath: 'inset(0 100% 0 0)' },
                  hover: { clipPath: 'inset(0 0% 0 0)' }
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />

              {project.fullWidth ? (
                // Full Width Layout
                <>
                  <div className="flex-1 p-10 md:p-14 flex flex-col justify-between relative border-b border-[#1E1E1C] md:border-b-0 md:border-r">
                    <div className="absolute top-8 left-10 md:left-14 font-syne font-black text-[#1A1A1A] text-[80px] leading-[0.8] select-none pointer-events-none">
                      {project.id}
                    </div>
                    
                    <div className="relative z-10 mt-16 md:mt-12">
                      <h3 className="font-syne font-bold text-[36px] text-[#F2EFE8] leading-[1.1] mb-2 uppercase tracking-tight">
                        {project.title}
                      </h3>
                      <div className="font-mono text-[11px] text-[#6B6B67] mb-8">
                        {project.role} · {project.year}
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-10">
                        {project.tech.map((t, idx) => (
                          <div key={idx} className="border border-[#2A2A27] font-mono text-[10px] text-[#6B6B67] px-[10px] py-[4px] uppercase">
                            {t}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link href={project.link} target="_blank" rel="noopener noreferrer" className="relative z-10 inline-flex items-center text-[#C8FF00] font-mono text-[12px] group/link w-fit hover-trigger">
                      <span>Live Project</span>
                      <ArrowUpRight className="w-3 h-3 ml-1" />
                      <span className="absolute left-0 bottom-[-2px] w-full h-[1px] bg-[#C8FF00] origin-left scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 ease-out" />
                    </Link>
                  </div>
                  
                  <div className="flex-1 p-10 md:p-14 flex flex-col justify-center">
                    <motion.div 
                      variants={{
                        initial: { scale: 1 },
                        hover: { scale: 1.05 }
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="font-syne font-black text-[#C8FF00] text-[64px] md:text-[96px] leading-[0.9] tracking-tighter"
                    >
                      {project.stat}
                    </motion.div>
                    <div className="font-mono text-[13px] text-[#6B6B67] max-w-[200px] mt-4 leading-relaxed">
                      {project.statDesc}
                    </div>
                  </div>
                </>
              ) : (
                // Half Width Layout
                <div className="flex-1 p-10 flex flex-col justify-between relative">
                  <div className="absolute top-8 right-10 font-syne font-black text-[#1A1A1A] text-[64px] leading-[0.8] select-none pointer-events-none text-right">
                    {project.id}
                  </div>
                  
                  <div className="relative z-10">
                    <motion.div 
                      variants={{
                        initial: { scale: 1 },
                        hover: { scale: 1.05 }
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="font-syne font-black text-[#C8FF00] text-[64px] leading-[0.9] tracking-tighter origin-left"
                    >
                      {project.stat}
                    </motion.div>
                    <div className="font-mono text-[12px] text-[#6B6B67] max-w-[200px] mt-2 mb-10 leading-relaxed">
                      {project.statDesc}
                    </div>
                  </div>

                  <div className="relative z-10 mt-auto">
                    <h3 className="font-syne font-bold text-[24px] text-[#F2EFE8] leading-[1.1] mb-2 uppercase tracking-tight">
                      {project.title}
                    </h3>
                    <div className="font-mono text-[11px] text-[#6B6B67] mb-6">
                      {project.role} · {project.year}
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((t, idx) => (
                        <div key={idx} className="border border-[#2A2A27] font-mono text-[10px] text-[#6B6B67] px-[10px] py-[4px] uppercase">
                          {t}
                        </div>
                      ))}
                    </div>

                    <Link href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#C8FF00] font-mono text-[12px] group/link w-fit hover-trigger">
                      <span>Live Project</span>
                      <ArrowUpRight className="w-3 h-3 ml-1" />
                      <span className="absolute left-0 bottom-[-2px] w-full h-[1px] bg-[#C8FF00] origin-left scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 ease-out" />
                    </Link>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}
