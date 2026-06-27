'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate, useScroll } from 'framer-motion';
import Link from 'next/link';

// True Matrix Rain Background Component
const AsciiBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    
    // Array of drops - one per column
    const drops: number[] = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = Math.random() * -100; // start offscreen randomly
    }

    const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const draw = () => {
      // Translucent black to create trail effect
      ctx.fillStyle = 'rgba(8, 8, 8, 0.05)';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = '#1A1A1A'; // Default dim color
      ctx.font = `${fontSize}px monospace`;
      ctx.textAlign = 'center';

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        
        // Randomly highlight some drops
        if (Math.random() > 0.95) {
          ctx.fillStyle = '#C8FF00'; // Acid yellow highlight
        } else {
          ctx.fillStyle = '#2A2A2A'; // Dim grey normal
        }

        ctx.fillText(text, i * fontSize + fontSize/2, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    let intervalId = setInterval(draw, 33); // ~30fps

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none opacity-50"
    />
  );
};

// Top Navigation Bar
const TopBar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'work', 'about', 'contact'];
      let current = 'hero';
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="fixed top-0 left-0 w-full z-50 border-b border-[#1E1E1C] bg-[#080808]/80 backdrop-blur-sm"
    >
      <div className="flex justify-between md:justify-center items-center px-[7vw] h-16 relative">
        <div className="text-[#C8FF00] font-mono text-[13px] tracking-wider absolute left-[7vw]">
          AM
        </div>
        <div className="flex gap-4 md:gap-6 font-mono text-[11px] ml-auto md:ml-0">
          <Link 
            href="#work" 
            className={`transition-colors hover-trigger ${activeSection === 'work' ? 'text-[#C8FF00]' : 'text-[#6B6B67] hover:text-[#F2EFE8]'}`}
          >
            Work
          </Link>
          <span className="text-[#6B6B67]">·</span>
          <Link 
            href="#about" 
            className={`transition-colors hover-trigger ${activeSection === 'about' ? 'text-[#C8FF00]' : 'text-[#6B6B67] hover:text-[#F2EFE8]'}`}
          >
            About
          </Link>
          <span className="text-[#6B6B67]">·</span>
          <Link 
            href="#contact" 
            className={`transition-colors hover-trigger ${activeSection === 'contact' ? 'text-[#C8FF00]' : 'text-[#6B6B67] hover:text-[#F2EFE8]'}`}
          >
            Contact
          </Link>
        </div>
      </div>
      
      {/* Scroll Progress Bar */}
      <motion.div 
        style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
        className="absolute bottom-[-1px] left-0 w-full h-[1px] bg-[#C8FF00]"
      />
    </motion.div>
  );
};

// Animated Typewriter Text
const TypewriterText = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = '> AI systems. Automation. Things that think.';

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    // Start after 1.2s delay
    const startTimeout = setTimeout(() => {
      let currentIndex = 0;
      
      const typeNextChar = () => {
        if (currentIndex < fullText.length) {
          setText(fullText.slice(0, currentIndex + 1));
          currentIndex++;
          timeout = setTimeout(typeNextChar, 50);
        } else {
          setTimeout(() => setShowCursor(false), 2000);
        }
      };
      
      typeNextChar();
    }, 1200);

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      className="font-mono text-[15px] text-[#6B6B67] mt-[32px] h-[24px]"
    >
      {text}
      <motion.span
        animate={{ opacity: showCursor ? [1, 0] : 0 }}
        transition={{ repeat: showCursor ? Infinity : 0, duration: 0.8 }}
        className="text-[#C8FF00] ml-1"
      >
        |
      </motion.span>
    </motion.div>
  );
};

// Stat Block
const StatBlock = ({ value, label, delay = 0 }: { value: number; label: string; delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        animate(0, value, {
          duration: 2,
          ease: "easeOut",
          onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
        });
      }, delay);
    }
  }, [isInView, value, delay]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, x: 20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      className="flex flex-col gap-1"
    >
      <div className="font-mono text-[#F2EFE8] text-[24px] tracking-tight">
        {displayValue}{value > 80 ? '+' : ''}
      </div>
      <div className="font-mono text-[#6B6B67] text-[11px] uppercase tracking-widest max-w-[120px] leading-relaxed">
        {label}
      </div>
    </motion.div>
  );
};

export default function Hero() {
  return (
    <section id="hero" className="relative w-full h-screen bg-[#080808] overflow-hidden">
      <AsciiBackground />
      <TopBar />

      {/* Main Content Area */}
      <div className="relative z-10 w-full h-full">
        
        {/* Left Aligned Content */}
        <div className="absolute top-[22vh] left-[7vw]">
          {/* LINE 1: AARAV */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="font-syne font-black text-[#F2EFE8] leading-[0.9]"
            style={{ 
              fontSize: 'clamp(80px, 13vw, 180px)', 
              letterSpacing: '-0.03em' 
            }}
          >
            AARAV
          </motion.div>
          
          {/* LINE 2: MALVIYA */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
            className="font-syne font-black leading-[0.9] hover-trigger"
            style={{ 
              fontSize: 'clamp(80px, 13vw, 180px)', 
              letterSpacing: '-0.03em',
              WebkitTextStroke: '1.5px #F2EFE8',
              color: 'transparent'
            }}
            whileHover={{
              color: '#C8FF00',
              transition: { duration: 0.3 }
            }}
          >
            MALVIYA
          </motion.div>

          <TypewriterText />
        </div>

        {/* Right Side Stats (hidden on mobile) */}
        <div className="hidden md:flex absolute right-[7vw] top-1/2 -translate-y-1/2 flex-col gap-[32px]">
          <StatBlock value={80} label="tasks automated" delay={800} />
          <StatBlock value={15} label="hours saved/wk" delay={900} />
          <StatBlock value={100} label="percent focused" delay={1000} />
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-[40px] left-[7vw] right-[7vw] flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
        >
          <div className="font-mono text-[#6B6B67] text-[10px] tracking-[0.2em] uppercase">
            BASED IN INDIA · ACTIVE GLOBALLY
          </div>
          
          <div className="flex gap-4">
            <Link 
              href="#contact"
              className="bg-[#C8FF00] hover:bg-[#F2EFE8] text-[#080808] font-mono font-bold text-[12px] px-[28px] py-[14px] transition-colors hover-trigger"
            >
              BOOK A CALL
            </Link>
            <Link 
              href="#work"
              className="bg-transparent border border-[#3A3A38] hover:border-[#F2EFE8] text-[#F2EFE8] font-mono font-bold text-[12px] px-[28px] py-[14px] transition-colors hover-trigger"
            >
              VIEW WORK
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
