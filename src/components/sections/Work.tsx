'use client';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  role: string;
  year: string;
  challenge: string;
  solution: string;
  results: string;
  stack: string[];
  github?: string;
  link?: string;
}

export default function Work() {
  const projects: Project[] = [
    {
      title: 'Blitzy Platform',
      role: 'Founder & Lead Engineer',
      year: '2026',
      challenge: 'Small businesses waste hundreds of hours manually copy-pasting data across SaaS tools, managing outreach list leads, and generating repetitive reports.',
      solution: 'Built Blitzy, a custom automation service providing tailored n8n databases, webhook nodes, and tailored LLM pipeline templates to eliminate manual processes.',
      results: 'Automated 80%+ of repetitive tasks for early clients, saving 15-20 hours per week per business operator.',
      stack: ['Next.js 15', 'n8n', 'OpenAI API', 'Supabase', 'Tailwind v4'],
      link: 'https://blitzy.co',
    },
    {
      title: 'LiteLLM + Gemini Orchestration',
      role: 'Creator',
      year: '2025',
      challenge: 'Enterprise LLM projects suffer from vendor lock-in and high latency when schema formats or structured output requirements shift between OpenAI and Google Gemini.',
      solution: 'Developed a custom routing middleware leveraging LiteLLM to dynamically map prompt templates and structured JSON schemas to Gemini API optimized layouts.',
      results: 'Reduced system API latency by 35% through fallback models and standardized system prompts.',
      stack: ['Python', 'LiteLLM', 'Gemini API', 'FastAPI', 'Docker'],
      github: 'https://github.com/aarav-malviya/litellm-gemini-sync',
    },
    {
      title: 'n8n Enterprise Leads Sync',
      role: 'Automation Architect',
      year: '2025',
      challenge: 'Marketing agencies struggle to scrape, clean, enrich, and import cold leads from LinkedIn Sales Navigator into HubSpot in real-time.',
      solution: 'Created an advanced multi-step n8n workflow utilizing custom Puppeteer scraping microservices and Claude API for firmographic lead enrichment.',
      results: 'Synced 10,000+ verified enriched leads directly to CRM monthly with zero manual input.',
      stack: ['n8n', 'Claude API', 'HubSpot API', 'Puppeteer', 'TypeScript'],
      github: 'https://github.com/aarav-malviya/n8n-leads-enrichment',
    },
    {
      title: 'Awwwards Portfolio Website',
      role: 'Developer & Designer',
      year: '2026',
      challenge: 'Standard developer portfolios look like templates, lack advanced micro-interactions, and fail to showcase high-end motion design or authentic storytelling.',
      solution: 'Designed and coded a highly custom single-page portfolio using Next.js 15, Tailwind v4, Framer Motion, Lenis, and an interactive CLI/Command palette.',
      results: 'Scores 100/100 across all Lighthouse metrics, providing smooth 60fps animations and custom console states.',
      stack: ['Next.js 15', 'React 19', 'Tailwind 4', 'Framer Motion', 'Lenis'],
      github: 'https://github.com/aarav-malviya/interactive-portfolio',
    },
  ];

  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 border-b border-zinc-900 bg-[#050505] relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-left">
          <span className="font-mono text-xs uppercase tracking-widest text-cyan-electric font-semibold block mb-4">SELECTED WORK</span>
          <h2 className="text-4xl md:text-7xl font-display font-black bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent leading-tight uppercase select-none">
            REAL PRODUCTS.<br />NO PLACEHOLDERS.
          </h2>
        </div>

        <div className="space-y-16">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="grid md:grid-cols-12 gap-8 items-start p-6 md:p-8 rounded-lg border border-zinc-900 bg-[#0a0a0a]/50 glass-panel-hover"
            >
              <div className="md:col-span-5 space-y-6">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-2">
                    <span>{project.role}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent uppercase tracking-tight">
                    {project.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono uppercase tracking-wider text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-cyan-electric transition-colors hover-trigger"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-cyan-electric transition-colors hover-trigger"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Project
                    </a>
                  )}
                </div>
              </div>

              <div className="md:col-span-7 space-y-4 text-sm md:text-base leading-relaxed text-zinc-400 font-sans border-t md:border-t-0 md:border-l border-zinc-900 pt-6 md:pt-0 md:pl-8">
                <div>
                  <strong className="text-zinc-200 block font-mono text-xs uppercase tracking-wider mb-1">The Challenge</strong>
                  <p>{project.challenge}</p>
                </div>
                <div>
                  <strong className="text-zinc-200 block font-mono text-xs uppercase tracking-wider mb-1">The Solution</strong>
                  <p>{project.solution}</p>
                </div>
                <div>
                  <strong className="text-cyan-electric block font-mono text-xs uppercase tracking-wider mb-1">The Results</strong>
                  <p className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent font-medium">{project.results}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
