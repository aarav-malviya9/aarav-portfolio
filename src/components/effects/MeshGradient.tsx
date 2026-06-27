'use client';
import { motion } from 'framer-motion';

export default function MeshGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[-2]">
      <motion.div
        className="absolute w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,rgba(255,212,0,0.06)_0%,rgba(0,0,0,0)_70%)]"
        animate={{
          x: ['-20%', '10%', '-20%'],
          y: ['-10%', '20%', '-10%'],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ top: '5%', left: '5%' }}
      />
      <motion.div
        className="absolute w-[70vw] h-[70vw] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.02)_0%,rgba(0,0,0,0)_80%)]"
        animate={{
          x: ['10%', '-20%', '10%'],
          y: ['20%', '-10%', '20%'],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ bottom: '10%', right: '10%' }}
      />
      <motion.div
        className="absolute w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(255,212,0,0.04)_0%,rgba(0,0,0,0)_60%)]"
        animate={{
          x: ['15%', '-5%', '15%'],
          y: ['-15%', '10%', '-15%'],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ top: '40%', right: '15%' }}
      />
    </div>
  );
}
