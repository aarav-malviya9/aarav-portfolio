'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronDown, ChevronUp } from 'lucide-react';

interface Article {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
}

export default function Garden() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  const articles: Article[] = [
    {
      slug: 'n8n-vs-zapier',
      title: 'Why n8n beats Zapier for heavy AI agent chains',
      date: 'June 20, 2026',
      readTime: '3 min read',
      excerpt: 'For complex multi-step pipelines and agent workflows, Zapier quickly becomes cost-prohibitive and structurally limited. Here is why self-hosted or cloud n8n is the actual standard.',
      content: `Zapier is excellent for simple, linear automations (e.g., "when a lead fills this form, email them"). But as soon as you require recursive loops, conditional AI decision trees, or deep payload enrichment, Zapier breaks.\n\n### Structural Differences:\n- **Infinite Loops & Error Paths:** n8n allows you to link outputs directly back into inputs, resolving retries or multi-turn agent conversations without complex scripting.\n- **Pricing Model:** Zapier charges per execution step ("tasks"). A single AI pipeline enriched via multiple agents can consume 20-30 tasks per run. n8n charges per overall workflow run, making it 10x-50x cheaper at scale.\n- **Custom Code Integration:** n8n nodes natively support JavaScript and Python code blocks with clean input/output references. You don't have to worry about isolated virtual environments.`,
    },
    {
      slug: 'litellm-standard',
      title: 'Standardizing LLM schemas with LiteLLM middleware',
      date: 'May 12, 2026',
      readTime: '4 min read',
      excerpt: 'Routing dynamic user prompts across Claude and Gemini can cause structured JSON outputs to break. LiteLLM provides a clean provider translation layer.',
      content: `Structured JSON outputs (e.g., using tool calling) are highly sensitive to provider schemas. Google Gemini expects structured content inputs in one format, whereas Anthropic Claude expects it in another.\n\n### The LiteLLM Solution:\n- **Standardized API Request Blocks:** LiteLLM translates OpenAI-formatted JSON bodies to matching parameters for 100+ endpoints.\n- **Structured Output Fail-Safes:** By implementing schema-validation checks using Pydantic schemas, you can catch formatting deviations and trigger fallback prompts instantly.\n- **Uniform System Prompts:** Maintain a single base prompt, and let the middleware automatically handle role mapping (e.g., system vs developer role in newer Gemini APIs).`,
    },
    {
      slug: 'nextjs-custom-frontends',
      title: 'The case for custom Next.js frontends over visual builders',
      date: 'April 05, 2026',
      readTime: '3 min read',
      excerpt: 'Visual no-code web tools like Framer and Webflow are beautiful for static landing pages, but fail as interface layers for complex AI pipelines.',
      content: `When building AI products, the frontend isn't just a static template; it's a dynamic data wrapper that needs to handle server-sent events (SSE) for streaming text, manage WebSockets for live voice agents, and coordinate localized browser caching.\n\n### Why Next.js Wins:\n- **Server Actions & Route Handlers:** Execute secure API requests directly from Next.js server files without spinning up separate backend ports.\n- **Component Reusability:** Easily import custom libraries like Framer Motion or Lucide icons, keeping codebase structures completely reusable.\n- **Perfect SEO & SSR:** Deliver server-rendered static layouts for marketing, while mounting Client-Side React rendering for the interactive dashboards.`,
    },
  ];

  return (
    <section id="garden" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 border-b border-zinc-900 bg-[#050505] relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-yellow-electric font-semibold block mb-4">DIGITAL GARDEN</span>
          <h2 className="text-4xl md:text-7xl font-display font-black text-white leading-tight uppercase select-none">
            LEARNING<br />IN PUBLIC.
          </h2>
        </div>

        <div className="space-y-4">
          {articles.map((article, idx) => {
            const isActive = activeSlug === article.slug;
            return (
              <div
                key={idx}
                className="rounded-lg border border-zinc-900 bg-[#0a0a0a]/45 overflow-hidden glass-panel-hover"
              >
                <button
                  onClick={() => setActiveSlug(isActive ? null : article.slug)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left hover-trigger"
                >
                  <div className="space-y-2 flex-1 pr-6">
                    <div className="flex items-center gap-4 text-xs font-mono text-zinc-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {article.date}
                      </span>
                      <span>✦</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-lg md:text-2xl font-display font-bold text-white uppercase group-hover:text-yellow-electric transition-colors">
                      {article.title}
                    </h3>
                    {!isActive && (
                      <p className="text-zinc-400 text-sm md:text-base leading-relaxed line-clamp-2 pt-2 font-sans">
                        {article.excerpt}
                      </p>
                    )}
                  </div>
                  <div>
                    {isActive ? (
                      <ChevronUp className="w-6 h-6 text-yellow-electric" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-zinc-500" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="border-t border-zinc-900"
                    >
                      <div className="p-6 md:p-8 bg-zinc-950/40 text-zinc-300 font-sans text-base md:text-lg space-y-6 whitespace-pre-wrap leading-relaxed">
                        {article.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
