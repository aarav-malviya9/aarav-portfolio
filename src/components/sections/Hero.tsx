'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import Link from 'next/link';

// ASCII Canvas Background Component
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

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    const fontSize = 10;
    const columns = Math.ceil(width / fontSize);
    const rows = Math.ceil(height / fontSize) + 1; // +1 to allow smooth scrolling

    // Store state for each character cell
    // Flash values go from 1 to 0 over 800ms
    type Cell = { char: string; flash: number };
    const grid: Cell[][] = [];
    for (let c = 0; c < columns; c++) {
      grid[c] = [];
      for (let r = 0; r < rows; r++) {
        grid[c][r] = {
          char: Math.random() > 0.5 ? '0' : '1',
          flash: 0,
        };
      }
    }

    let scrollOffset = 0;
    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;
    let lastTime = performance.now();

    const draw = (time: number) => {
      const dt = time - lastTime;
      lastTime = time;

      ctx.fillStyle = '#080808';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      scrollOffset -= 0.3; // 0.3px per frame roughly
      if (scrollOffset <= -fontSize) {
        scrollOffset += fontSize;
        // Shift grid down, generate new row at bottom
        for (let c = 0; c < columns; c++) {
          grid[c].shift(); // remove top
          grid[c].push({
            char: Math.random() > 0.5 ? '0' : '1',
            flash: 0,
          });
        }
      }

      for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows; r++) {
          const x = c * fontSize + fontSize / 2;
          const y = r * fontSize + scrollOffset + fontSize / 2;

          // Check distance to mouse
          const dx = x - mouseX;
          const dy = y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            grid[c][r].flash = 1; // trigger flash
          } else {
            // decay flash over 800ms roughly
            // 800ms = 0.8s. dt is in ms. decay amount = dt / 800
            grid[c][r].flash = Math.max(0, grid[c][r].flash - dt / 800);
          }

          if (grid[c][r].flash > 0) {
            // Interpolate color between #1A1A1A and #00FFFF based on flash
            ctx.fillStyle = `rgba(200, 255, 0, ${grid[c][r].flash})`; 
          } else {
            ctx.fillStyle = '#1A1A1A';
          }
          
          ctx.fillText(grid[c][r].char, x, y);
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw(performance.now());

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
};

// Top Navigation Bar
const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 border-b border-[#1E1E1C] bg-[#080808]/80 backdrop-blur-sm">
      <div className="flex justify-between md:justify-center items-center px-[7vw] h-16 relative">
        <div className="text-[#00FFFF] font-mono text-[13px] tracking-wider absolute left-[7vw]">
          AM
        </div>
        <div className="flex gap-4 md:gap-6 font-mono text-[11px] text-[#6B6B67] ml-auto md:ml-0">
          <Link href="#work" className="hover:text-[#F2EFE8] transition-colors hover-trigger">Work</Link>
          <span>·</span>
          <Link href="#about" className="hover:text-[#F2EFE8] transition-colors hover-trigger">About</Link>
          <span>·</span>
          <Link href="#contact" className="hover:text-[#F2EFE8] transition-colors hover-trigger">Contact</Link>
        </div>
      </div>
    </div>
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
          timeout = setTimeout(typeNextChar, 50); // Typing speed
        } else {
          // Fade cursor after complete
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
    <div className="font-mono text-[15px] text-[#6B6B67] mt-[32px] h-[24px]">
      {text}
      <motion.span
        animate={{ opacity: showCursor ? [1, 0] : 0 }}
        transition={{ repeat: showCursor ? Infinity : 0, duration: 0.8 }}
        className="text-[#00FFFF] ml-1"
      >
        |
      </motion.span>
    </div>
  );
};

// Stat Block
const StatBlock = ({ value, label, delay = 0 }: { value: number; label: string; delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
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
    <div ref={ref} className="flex flex-col gap-1">
      <div className="font-mono text-[#F2EFE8] text-[24px] tracking-tight">
        {displayValue}{value > 80 ? '+' : ''}
      </div>
      <div className="font-mono text-[#6B6B67] text-[11px] uppercase tracking-widest max-w-[120px] leading-relaxed">
        {label}
      </div>
    </div>
  );
};

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-[#080808] overflow-hidden">
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
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
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
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="font-syne font-black leading-[0.9] hover-trigger"
            style={{ 
              fontSize: 'clamp(80px, 13vw, 180px)', 
              letterSpacing: '-0.03em',
              WebkitTextStroke: '1.5px #F2EFE8',
              color: 'transparent'
            }}
            whileHover={{
              color: '#00FFFF',
              transition: { duration: 0.3 }
            }}
          >
            MALVIYA
          </motion.div>

          <TypewriterText />
        </div>

        {/* Right Side Stats (hidden on mobile) */}
        <div className="hidden md:flex absolute right-[7vw] top-1/2 -translate-y-1/2 flex-col gap-[32px]">
          <StatBlock value={80} label="tasks automated" delay={200} />
          <StatBlock value={15} label="hours saved/wk" delay={400} />
          <StatBlock value={100} label="percent focused" delay={600} />
        </div>

        {/* Bottom Bar */}
        <div className="absolute bottom-[40px] left-[7vw] right-[7vw] flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="font-mono text-[#6B6B67] text-[10px] tracking-[0.2em] uppercase">
            BASED IN INDIA • ACTIVE GLOBALLY
          </div>
          
          <div className="flex gap-4">
            <Link 
              href="#contact"
              className="bg-[#00FFFF] hover:bg-[#F2EFE8] text-[#080808] font-mono font-bold text-[12px] px-[28px] py-[14px] transition-colors hover-trigger"
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
        </div>
      </div>
    </section>
  );
}
