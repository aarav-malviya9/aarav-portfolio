'use client';
import { useState } from 'react';
import { Mail, Github, Linkedin, Calendar, Check, Copy } from 'lucide-react';
import Magnetic from '../ui/Magnetic';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('hello@blitzy.co');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 md:py-36 px-6 md:px-12 lg:px-24 bg-[#050505] relative z-10">
      <div className="max-w-4xl mx-auto text-center space-y-16">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-cyan-electric font-semibold block mb-4">GET IN TOUCH</span>
          <h2 className="text-4xl md:text-8xl font-display font-black text-white leading-none uppercase select-none">
            LET'S BUILD<br />SOMETHING.
          </h2>
        </div>

        <div className="p-8 md:p-12 rounded-xl border border-zinc-900 bg-[#0a0a0a]/60 backdrop-blur-md glass-panel text-center max-w-2xl mx-auto space-y-8">
          <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-sans max-w-md mx-auto">
            Looking to automate operations, set up LLM structures, or craft modern web products? Let's connect.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Magnetic>
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-zinc-800 bg-zinc-950/40 text-zinc-300 hover:text-white transition-all text-sm font-mono uppercase tracking-wider hover-trigger"
              >
                {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                {copied ? 'Copied Email' : 'Copy Email'}
              </button>
            </Magnetic>

            <Magnetic>
              <a
                href="https://calendly.com/placeholder"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-cyan-electric text-black transition-all text-sm font-semibold hover-trigger"
              >
                <Calendar className="w-4 h-4" />
                Book Meeting
              </a>
            </Magnetic>
          </div>

          <div className="flex justify-center items-center gap-8 pt-6 border-t border-zinc-900">
            <a
              href="mailto:hello@blitzy.co"
              className="text-zinc-400 hover:text-cyan-electric transition-colors hover-trigger flex items-center gap-2 text-sm font-mono"
            >
              <Mail className="w-4 h-4" />
              hello@blitzy.co
            </a>
            <a
              href="https://github.com/aarav-malviya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-cyan-electric transition-colors hover-trigger flex items-center gap-2 text-sm font-mono"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/aarav-malviya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-cyan-electric transition-colors hover-trigger flex items-center gap-2 text-sm font-mono"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center gap-2.5 text-zinc-600 text-xs font-mono uppercase tracking-widest">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-electric animate-pulse" />
          <span>Response within 24h ✦ No agencies</span>
        </div>
      </div>
    </section>
  );
}
