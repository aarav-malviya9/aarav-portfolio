import Hero from '@/components/sections/Hero';
import WhoIAm from '@/components/sections/WhoIAm';
import WhatIBelieve from '@/components/sections/WhatIBelieve';
import SelectedWork from '@/components/sections/SelectedWork';
import HowIBuild from '@/components/sections/HowIBuild';
import TechPlayground from '@/components/sections/TechPlayground';
import Timeline from '@/components/sections/Timeline';
import Services from '@/components/sections/Services';
import LetsBuild from '@/components/sections/LetsBuild';

export default function Home() {
  const jsonLdPerson = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Aarav Malviya',
    jobTitle: 'AI Automation & Web Developer',
    url: 'https://aarav-malviya.vercel.app',
    sameAs: [
      'https://github.com/aarav-malviya',
      'https://linkedin.com/in/aarav-malviya'
    ]
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-[#00FFFF] selection:text-[#050505]">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
      />

      <main className="relative z-10 flex flex-col">
        <Hero />
        <SelectedWork />
        <WhoIAm />
        <WhatIBelieve />
        <HowIBuild />
        <TechPlayground />
        <Timeline />
        <Services />
        <LetsBuild />
      </main>
    </div>
  );
}
