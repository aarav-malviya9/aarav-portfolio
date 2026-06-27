import type { Metadata } from 'next';
import './globals.css';
import CustomCursor from '@/components/effects/CustomCursor';
import LenisScroll from '@/components/effects/LenisScroll';
import Terminal from '@/components/ui/Terminal';
import CommandK from '@/components/ui/CommandK';

export const metadata: Metadata = {
  title: 'Aarav Malviya | AI Automation & Web Developer',
  description: '15-year-old AI Automation Developer helping businesses build modern websites, AI systems, and automation workflows.',
  metadataBase: new URL('https://aarav-malviya.vercel.app'),
  openGraph: {
    title: 'Aarav Malviya | AI Automation & Web Developer',
    description: '15-year-old AI Automation Developer helping businesses build modern websites, AI systems, and automation workflows.',
    url: 'https://aarav-malviya.vercel.app',
    siteName: 'Aarav Malviya Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aarav Malviya | AI Automation & Web Developer',
    description: '15-year-old AI Automation Developer helping businesses build modern websites, AI systems, and automation workflows.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="canonical" href="https://aarav-malviya.vercel.app" />
      </head>
      <body className="antialiased bg-[#050505] text-white">
        <LenisScroll />
        <CustomCursor />
        <Terminal />
        <CommandK />
        {children}
      </body>
    </html>
  );
}

