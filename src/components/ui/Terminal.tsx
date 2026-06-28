'use client';
import { useEffect, useRef, useState } from 'react';
import { Terminal as TerminalIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LogLine {
  text: string;
  type: 'input' | 'output' | 'error' | 'success';
}

export default function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<LogLine[]>([
    { text: 'AaravOS [Version 2.6.0]', type: 'success' },
    { text: 'Type "help" to see available commands.', type: 'output' },
  ]);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }

      if (e.key === konami[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konami.length) {
          setIsOpen(true);
          setHistory((prev) => [
            ...prev,
            { text: '>> SECRET OVERRIDE ENABLED: KONAMI CODE DETECTED <<', type: 'success' },
            { text: 'Aarav is a developer obsessed with making AI agents and premium code.', type: 'output' },
          ]);
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newHistory = [...history, { text: `blitzy@aarav:~$ ${cmd}`, type: 'input' as const }];

    if (!trimmed) {
      setHistory(newHistory);
      return;
    }

    switch (trimmed) {
      case 'help':
        setHistory([
          ...newHistory,
          { text: 'Available commands:', type: 'success' },
          { text: '  about      - Who is Aarav Malviya?', type: 'output' },
          { text: '  projects   - Show Aarav\'s selected portfolio work', type: 'output' },
          { text: '  garden     - Read brief articles / concepts from the Digital Garden', type: 'output' },
          { text: '  contact    - Retrieve contact methods & socials', type: 'output' },
          { text: '  clear      - Clear console history', type: 'output' },
          { text: '  exit       - Close the OS console overlay', type: 'output' },
        ]);
        break;
      case 'about':
        setHistory([
          ...newHistory,
          { text: 'Aarav Malviya is a self-taught AI automation developer & engineer from India.', type: 'output' },
          { text: 'Founder of Blitzy, helping companies replace manual, repetitive workflows with scalable AI agents.', type: 'output' },
          { text: 'Comfortable stack: TypeScript, Next.js, Framer Motion, Python, n8n, OpenAI, Gemini API, Vercel, Supabase.', type: 'output' },
          { text: 'Email:             27aaravmalviya@gmail.com', type: 'output' },
        ]);
        break;
      case 'projects':
        setHistory([
          ...newHistory,
          { text: 'Featured Work:', type: 'success' },
          { text: '  1. Blitzy Platform: AI automation hub for scheduling, reporting, and workflows.', type: 'output' },
          { text: '  2. LiteLLM + Gemini Sync: Middleware package resolving schema differences across AI engines.', type: 'output' },
          { text: '  3. n8n Enterprise Workflows: Production CRM databases hooked up to custom scraping agents.', type: 'output' },
          { text: '  4. Space-Awwwards Portfolio: Next.js 15 + Tailwind CSS v4 editorial portfolio.', type: 'output' },
        ]);
        break;
      case 'garden':
        setHistory([
          ...newHistory,
          { text: 'Digital Garden Snippets:', type: 'success' },
          { text: '  - "Why n8n beats Zapier for heavy AI agent chains (unlimited loops)"', type: 'output' },
          { text: '  - "LiteLLM vs building custom provider wrappers from scratch"', type: 'output' },
          { text: '  - "The death of visual builders: why custom Next.js frontends rule"', type: 'output' },
        ]);
        break;
      case 'contact':
        setHistory([
          ...newHistory,
          { text: 'Contact Systems:', type: 'success' },
          { text: '  Email:    27aaravmalviya@gmail.com', type: 'output' },
          { text: '  GitHub:   github.com/aarav-malviya', type: 'output' },
          { text: '  LinkedIn: linkedin.com/in/aarav-malviya', type: 'output' },
        ]);
        break;
      case 'clear':
        setHistory([]);
        break;
      case 'exit':
        setIsOpen(false);
        break;
      default:
        setHistory([
          ...newHistory,
          { text: `aaravOS: command not found: "${cmd}". Type "help" for a list of commands.`, type: 'error' },
        ]);
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setInput('');
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 p-3 rounded-full border border-cyan-electric/20 bg-black/80 backdrop-blur-md text-cyan-electric hover:border-cyan-electric/50 transition-all flex items-center justify-center hover:scale-105 hover-trigger"
        title="Open Terminal (Press /)"
      >
        <TerminalIcon className="w-5 h-5" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="w-full max-w-2xl h-[450px] rounded-lg border border-cyan-electric/25 bg-black/90 flex flex-col overflow-hidden shadow-[0_0_50px_rgba(0,255,255,0.1)] font-mono text-sm"
            >
              <div className="flex justify-between items-center px-4 py-3 border-b border-cyan-electric/10 bg-zinc-900/50">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-cyan-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-zinc-400 text-xs ml-2">aarav-os -- terminal</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-zinc-400 hover:text-white transition-colors hover-trigger"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div
                ref={containerRef}
                className="flex-1 p-4 overflow-y-auto space-y-1.5 scrollbar-thin scrollbar-thumb-zinc-800"
              >
                {history.map((line, idx) => (
                  <div
                    key={idx}
                    className={`whitespace-pre-wrap ${
                      line.type === 'input'
                        ? 'text-zinc-200'
                        : line.type === 'error'
                        ? 'text-red-500'
                        : line.type === 'success'
                        ? 'text-cyan-electric'
                        : 'text-zinc-400'
                    }`}
                  >
                    {line.text}
                  </div>
                ))}
              </div>

              <form onSubmit={onSubmit} className="flex border-t border-cyan-electric/10 p-3 bg-black/50">
                <span className="text-cyan-electric mr-2">blitzy@aarav:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent text-white border-none outline-none caret-cyan-electric"
                  placeholder="type help..."
                  autoComplete="off"
                />
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
