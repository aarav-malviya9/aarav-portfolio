'use client';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  status: 'Expert' | 'Comfortable' | 'Learning';
}

export default function Radar() {
  const skills: Skill[] = [
    { name: 'Claude Code & API', level: 9.5, status: 'Expert' },
    { name: 'n8n & Make Automations', level: 9.0, status: 'Expert' },
    { name: 'React & Next.js 15', level: 8.5, status: 'Expert' },
    { name: 'TypeScript', level: 8.5, status: 'Expert' },
    { name: 'OpenAI & Gemini API', level: 8.0, status: 'Expert' },
    { name: 'Tailwind CSS 4', level: 8.0, status: 'Expert' },
    { name: 'Figma UI/UX Design', level: 7.5, status: 'Comfortable' },
    { name: 'Framer Motion', level: 7.0, status: 'Comfortable' },
    { name: 'Supabase & databases', level: 7.0, status: 'Comfortable' },
    { name: 'LiteLLM Integrations', level: 7.5, status: 'Comfortable' },
    { name: 'AI Agents Architecting', level: 8.5, status: 'Expert' },
    { name: 'Python Backend Dev', level: 6.5, status: 'Comfortable' },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 w-full max-w-4xl mx-auto">
      {skills.map((skill, idx) => (
        <div key={idx} className="flex flex-col gap-2">
          <div className="flex justify-between text-sm">
            <span className="font-tech text-white font-medium">{skill.name}</span>
            <span className={`text-xs uppercase px-2 py-0.5 rounded border border-yellow-electric/15 ${
              skill.status === 'Expert' 
                ? 'text-yellow-electric bg-yellow-electric/5' 
                : skill.status === 'Comfortable' 
                ? 'text-zinc-300 bg-zinc-800/40' 
                : 'text-zinc-500 bg-zinc-900/40'
            }`}>
              {skill.status}
            </span>
          </div>
          <div className="h-2 w-full bg-zinc-950 border border-zinc-900 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level * 10}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeOut', delay: idx * 0.05 }}
              className="h-full bg-yellow-electric rounded-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
