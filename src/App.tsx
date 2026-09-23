import React from 'react';
import { useSeoMeta } from './hooks/useSeoMeta';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { About } from './components/About';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  useSeoMeta();

  return (
    <div className="min-h-full w-full max-w-full overflow-x-hidden bg-canvas font-sans text-ink">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <Navbar />

      <main className="w-full max-w-full overflow-x-hidden">
        <Hero />
        <TechStack />
        <Projects />
        <Experience />
        <About />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
