'use client';

import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    title: 'AI Automation Systems',
    desc: 'Bespoke workflows and intelligent agents that replace hours of manual labor with autonomous, scalable logic.',
    features: ['n8n / Make.com Workflows', 'Custom AI Agents', 'CRM Integrations', 'Data Pipelines']
  },
  {
    id: 2,
    title: 'Premium Web Applications',
    desc: 'High-performance, beautifully designed platforms engineered to convert and scale.',
    features: ['Next.js / React', 'Tailwind & Framer Motion', 'Full-Stack Architecture', 'Awwwards-Level UI/UX']
  }
];

export default function Services() {
  return (
    <section className="w-full py-32 bg-[#050505] px-[7vw]">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-syne font-bold text-[clamp(32px,5vw,56px)] text-[#F2EFE8] mb-16 tracking-tight text-center">
          What I Do
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group relative rounded-3xl p-[1px] bg-white/[0.05] hover:bg-[#FFD400]/50 transition-colors duration-500 overflow-hidden"
            >
              {/* Gradient border effect achieved by inner background */}
              <div className="relative h-full bg-[#0a0a0a] rounded-[23px] p-8 md:p-12 flex flex-col">
                <h3 className="font-syne font-bold text-2xl md:text-3xl text-[#F2EFE8] mb-4 group-hover:text-[#FFD400] transition-colors">
                  {service.title}
                </h3>
                <p className="font-sans text-[#B8B8B4] text-[16px] leading-[1.6] mb-8">
                  {service.desc}
                </p>

                <ul className="mt-auto flex flex-col gap-3">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 font-mono text-[12px] text-[#B8B8B4]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400]/50" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
