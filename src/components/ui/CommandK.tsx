'use client';
import { useEffect, useState } from 'react';
import { Search, Command, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Option {
  label: string;
  category: string;
  action: () => void;
  shortcut?: string;
}

export default function CommandK() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const options: Option[] = [
    { label: 'Navigate: Hero / Start', category: 'Navigation', action: () => scrollTo('hero'), shortcut: 'H' },
    { label: 'Navigate: Who I Am', category: 'Navigation', action: () => scrollTo('about'), shortcut: 'A' },
    { label: 'Navigate: Current Mission', category: 'Navigation', action: () => scrollTo('mission'), shortcut: 'M' },
    { label: 'Navigate: Selected Work', category: 'Navigation', action: () => scrollTo('work'), shortcut: 'W' },
    { label: 'Navigate: How I Build', category: 'Navigation', action: () => scrollTo('process'), shortcut: 'P' },
    { label: 'Navigate: Tech Playground', category: 'Navigation', action: () => scrollTo('playground'), shortcut: 'G' },
    { label: 'Navigate: Tech Radar', category: 'Navigation', action: () => scrollTo('radar'), shortcut: 'R' },
    { label: 'Navigate: Timeline / History', category: 'Navigation', action: () => scrollTo('timeline'), shortcut: 'T' },
    { label: 'Navigate: Digital Garden', category: 'Navigation', action: () => scrollTo('garden'), shortcut: 'D' },
    { label: 'Navigate: Services', category: 'Navigation', action: () => scrollTo('services'), shortcut: 'S' },
    { label: 'Navigate: Get in Touch', category: 'Navigation', action: () => scrollTo('contact'), shortcut: 'C' },
    {
      label: 'System: Trigger Console / Terminal',
      category: 'System',
      action: () => {
        setIsOpen(false);
        const event = new KeyboardEvent('keydown', { key: '/' });
        window.dispatchEvent(event);
      },
      shortcut: '/',
    },
  ];

  const filtered = options.filter((opt) =>
    opt.label.toLowerCase().includes(search.toLowerCase()) ||
    opt.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="fixed top-6 right-6 z-40 hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-cyan-electric/10 bg-black/60 backdrop-blur-md text-xs text-zinc-400 select-none">
        <Command className="w-3.5 h-3.5" />
        <span>K to navigate</span>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-xl rounded-lg border border-cyan-electric/20 bg-[#0c0c0c] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] font-sans"
            >
              <div className="flex items-center gap-3 px-4 py-3.5 border-b border-zinc-900 bg-black/30">
                <Search className="w-4 h-4 text-zinc-500" />
                <input
                  type="text"
                  placeholder="Search commands or sections..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-1 bg-transparent text-white placeholder-zinc-500 border-none outline-none text-sm"
                  autoFocus
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-zinc-500 hover:text-white transition-colors hover-trigger"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="max-h-[300px] overflow-y-auto p-2 space-y-0.5">
                {filtered.length === 0 ? (
                  <div className="text-center py-8 text-zinc-500 text-sm">No commands matching your search.</div>
                ) : (
                  filtered.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={opt.action}
                      className="w-full flex items-center justify-between px-3 py-2.5 rounded-md hover:bg-cyan-electric/5 text-left text-zinc-300 hover:text-white transition-colors text-sm hover-trigger group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] uppercase tracking-wider text-zinc-600 bg-zinc-950 border border-zinc-900 px-1.5 py-0.5 rounded">
                          {opt.category}
                        </span>
                        <span>{opt.label}</span>
                      </div>
                      {opt.shortcut && (
                        <span className="text-[10px] text-zinc-500 bg-zinc-900 group-hover:text-cyan-electric px-1.5 py-0.5 rounded font-mono">
                          {opt.shortcut}
                        </span>
                      )}
                    </button>
                  ))
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
