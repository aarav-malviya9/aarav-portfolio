'use client';

import { motion } from 'framer-motion';

const techStack = [
  'Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 
  'n8n', 'Make.com', 'Supabase', 'Python', 'OpenAI', 'Anthropic', 
  'Vercel', 'PostgreSQL', 'LangChain', 'React'
];

export default function TechPlayground() {
  return (
    <section className="w-full py-24 bg-[#050505] overflow-hidden flex flex-col items-center border-y border-white/[0.02]">
      <div className="w-full relative flex overflow-x-hidden">
        
        {/* Left/Right Gradients for smooth fade out */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

        <motion.div 
          className="flex whitespace-nowrap items-center gap-16 py-4"
          animate={{ x: [0, -1035] }} // Adjust based on content width roughly
          transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
        >
          {/* Double the array to make the infinite scroll seamless */}
          {[...techStack, ...techStack].map((tech, i) => (
            <div 
              key={i}
              className="text-[#3A3A38] font-syne font-bold text-4xl md:text-6xl hover:text-[#FFD400] transition-colors duration-300 cursor-default"
              style={{ WebkitTextStroke: '1px #3A3A38' }}
            >
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
