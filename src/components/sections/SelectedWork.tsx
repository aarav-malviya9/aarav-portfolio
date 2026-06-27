'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
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
    gradient: 'from-blue-600/20 via-indigo-900/40 to-black',
    glow: 'bg-blue-500/20'
  },
  {
    id: '02',
    title: '3D WEBGL PORTFOLIO',
    role: 'Frontend Developer',
    year: '2024',
    tech: ['TypeScript', 'Three.js', 'React Three Fiber'],
    stat: '60fps',
    statDesc: 'real-time 3D rendering',
    link: 'https://github.com/aarav-malviya9/portfolio-3D',
    gradient: 'from-emerald-500/20 via-teal-900/40 to-black',
    glow: 'bg-emerald-500/20'
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
    gradient: 'from-orange-500/20 via-red-900/40 to-black',
    glow: 'bg-orange-500/20'
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
    gradient: 'from-zinc-500/20 via-zinc-800/40 to-black',
    glow: 'bg-zinc-500/20'
  }
];

function ProjectCard({ 
  project, 
  index, 
  activeFloat 
}: { 
  project: typeof projects[0]; 
  index: number; 
  activeFloat: MotionValue<number>;
}) {
  // distance from center (0 = center, -1 = one step left, 1 = one step right)
  const distance = useTransform(activeFloat, (v) => index - v);
  
  // Create smooth springs for the transforms so they don't stutter if scrolling is chunky
  const smoothDistance = useSpring(distance, { damping: 25, stiffness: 150 });

  // Math mappings for the Coverflow 3D effect
  const rotateY = useTransform(smoothDistance, [-2, -1, 0, 1, 2], [60, 45, 0, -45, -60]);
  const scale = useTransform(smoothDistance, [-2, -1, 0, 1, 2], [0.6, 0.75, 1, 0.75, 0.6]);
  const x = useTransform(smoothDistance, [-2, -1, 0, 1, 2], ["-60%", "-30%", "0%", "30%", "60%"]);
  const z = useTransform(smoothDistance, [-2, -1, 0, 1, 2], [-500, -200, 0, -200, -500]);
  const opacity = useTransform(smoothDistance, [-2, -1, 0, 1, 2], [0, 0.3, 1, 0.3, 0]);
  const blur = useTransform(smoothDistance, [-2, -1, 0, 1, 2], ["blur(10px)", "blur(4px)", "blur(0px)", "blur(4px)", "blur(10px)"]);

  // We only want the card to be fully interactive (pointer events) if it's currently at the center
  const pointerEvents = useTransform(distance, (d) => Math.abs(d) < 0.2 ? "auto" : "none");

  return (
    <motion.div
      style={{
        rotateY,
        scale,
        x,
        z,
        opacity,
        filter: blur,
        pointerEvents: pointerEvents as any,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 'auto',
        transformOrigin: 'center center',
      }}
      className="w-[90vw] md:w-[60vw] h-[65vh] md:h-[70vh] rounded-2xl overflow-hidden shrink-0"
    >
      {/* Container to handle dynamic X offset while maintaining true absolute centering */}
      <motion.div 
        style={{ x }} 
        className="w-full h-full relative"
      >
        <div
          className={`w-full h-full bg-gradient-to-br ${project.gradient} border border-white/5 rounded-2xl p-8 md:p-12 flex flex-col justify-between backdrop-blur-3xl shadow-[0_0_80px_rgba(0,0,0,0.5)]`}
        >
          {/* Top Layer */}
          <div className="flex justify-between items-start">
            <div className="font-syne font-black text-white/10 text-[80px] md:text-[120px] leading-[0.8] select-none">
              {project.id}
            </div>
            
            <Link 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-black/50 border border-white/10 px-4 py-2 rounded-full font-mono text-[11px] text-white/70 hover:text-[#C8FF00] hover:border-[#C8FF00]/50 transition-all hover-trigger backdrop-blur-md"
            >
              VIEW REPO <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Center Layer */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-4">
            <h3 className="font-syne font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30 text-center uppercase tracking-tighter" style={{ fontSize: 'clamp(40px, 6vw, 100px)' }}>
              {project.title}
            </h3>
          </div>

          {/* Bottom Layer */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 relative z-10">
            <div className="space-y-4">
              <div className="font-mono text-[11px] text-[#F2EFE8]/70 uppercase tracking-widest">
                {project.role} · {project.year}
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <div key={i} className="bg-black/40 border border-white/5 font-mono text-[10px] text-white/60 px-3 py-1.5 rounded-full uppercase backdrop-blur-md">
                    {t}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-right">
              <div className="font-syne font-black text-[#C8FF00] text-[48px] md:text-[64px] leading-none tracking-tighter">
                {project.stat}
              </div>
              <div className="font-mono text-[11px] text-white/50 uppercase tracking-wider mt-2 max-w-[150px] ml-auto">
                {project.statDesc}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function SelectedWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // Maps the entire scroll progress (0 to 1) to an active index float (0 to 3)
  const activeFloat = useTransform(scrollYProgress, [0, 1], [0, projects.length - 1]);
  
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    return activeFloat.onChange((latest) => {
      setActiveIndex(Math.round(latest));
    });
  }, [activeFloat]);

  return (
    <section ref={containerRef} id="work" className="relative h-[400vh] bg-[#050505]">
      {/* Sticky Viewport */}
      <div 
        className="sticky top-0 h-screen w-full overflow-hidden bg-[#050505] flex items-center justify-center"
        style={{ perspective: '1200px' }}
      >
        
        {/* Dynamic Background Glows based on active index */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div className="w-[80vw] h-[80vh] rounded-full blur-[150px] transition-colors duration-1000 bg-white/5" />
        </div>
        
        {/* Header (Overlayed) */}
        <div className="absolute top-[12vh] left-[7vw] z-50 w-[86vw] flex justify-between items-end pointer-events-none">
          <div>
            <div className="font-mono text-[#6B6B67] text-[11px] tracking-widest uppercase mb-4">
              SELECTED WORK
            </div>
            <h2 className="font-syne font-black text-[#F2EFE8] leading-[0.9]" style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}>
              REAL PRODUCTS.
            </h2>
          </div>
          <div className="font-syne font-black text-[#1E1E1C] text-[64px] leading-[0.8]">
            04
          </div>
        </div>

        {/* 3D Coverflow Container */}
        <div 
          className="relative w-full h-full flex items-center justify-center z-10"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {projects.map((project, idx) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={idx} 
              activeFloat={activeFloat} 
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none opacity-50 z-50">
          <div className="font-mono text-[10px] text-white tracking-widest uppercase">Scroll</div>
          <div className="w-[1px] h-[40px] bg-gradient-to-b from-white/50 to-transparent" />
        </div>

      </div>
    </section>
  );
}
