'use client';
import { motion } from 'framer-motion';

interface TickerProps {
  items: string[];
  speed?: number;
  reverse?: boolean;
}

export default function Ticker({ items, speed = 25, reverse = false }: TickerProps) {
  return (
    <div className="w-full overflow-hidden flex bg-transparent py-4 select-none">
      <motion.div
        className="flex whitespace-nowrap gap-8 pr-8"
        animate={{
          x: reverse ? ['-50%', '0%'] : ['0%', '-50%'],
        }}
        transition={{
          ease: 'linear',
          duration: speed,
          repeat: Infinity,
        }}
      >
        {[...items, ...items].map((item, idx) => (
          <span
            key={idx}
            className="flex items-center gap-4 text-xs font-mono tracking-widest text-zinc-400 uppercase"
          >
            {item}
            <span className="text-cyan-electric font-bold text-sm">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
