import React from 'react';
import { useSeoMeta } from './hooks/useSeoMeta';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustMetrics } from './components/TrustMetrics';
import { Brands } from './components/Brands';
import { Results } from './components/Results';
import { CampaignShowcase } from './components/CampaignShowcase';
import { PaidAdvertising } from './components/PaidAdvertising';
import { SocialMedia } from './components/SocialMedia';
import { CreativeToolkit } from './components/CreativeToolkit';
import { SeoSection } from './components/SeoSection';
import { Analytics } from './components/Analytics';
import { MarketingTechnology } from './components/MarketingTechnology';
import { Experience } from './components/Experience';
import { Process } from './components/Process';
import { CaseStudies } from './components/CaseStudies';
import { About } from './components/About';
import { Education } from './components/Education';
import { BrandStatement } from './components/BrandStatement';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  useSeoMeta();

  return (
    <div className="min-h-full w-full max-w-full overflow-x-hidden bg-canvas font-sans text-ink">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white">
        
        Skip to content
      </a>

      <Navbar />

      <main className="w-full max-w-full overflow-x-hidden">
        <Hero />
        <TrustMetrics />
        <Brands />
        <Results />
        <CampaignShowcase />
        <PaidAdvertising />
        <SocialMedia />
        <CreativeToolkit />
        <SeoSection />
        <Analytics />
        <MarketingTechnology />
        <CaseStudies />
        <Experience />
        <Process />
        <About />
        <Education />
        <BrandStatement />
        <Contact />
      </main>

      <Footer />
    </div>);

}