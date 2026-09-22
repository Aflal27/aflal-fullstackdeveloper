import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuIcon, XIcon, ArrowUpRightIcon } from 'lucide-react';
import { navLinks, profile } from '../data/site';

const EASE = [0.23, 1, 0.32, 1] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    // Close menu and restore scroll lock before navigating
    setOpen(false);
    document.body.style.overflow = '';
    // Wait for the menu close animation + overflow restore, then scroll
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
      scrolled || open ? 'border-b border-line/80 bg-white/80 shadow-nav backdrop-blur-xl' : 'bg-transparent'}`
      }>
      
      <div className="mx-auto flex h-[4.5rem] max-w-shell items-center justify-between gap-6 px-5 sm:px-8">
        <a href="#home" className="group flex items-center gap-3" aria-label="Aflal — home">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-sm font-extrabold text-white transition-colors duration-200 group-hover:bg-violet-600">
            A
          </span>
          <span className="leading-none">
            <span className="block font-display text-base font-extrabold tracking-tight text-ink">AFLAL</span>
            <span className="mt-1 block text-[0.68rem] font-medium uppercase tracking-[0.16em] text-ink-mute">
              {profile.role.replace(' Executive', '')}
            </span>
          </span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
          <a
            key={link.href}
            href={link.href}
            className="rounded-full px-3.5 py-2 text-sm font-medium text-ink-soft transition-colors duration-200 hover:bg-violet-50 hover:text-violet-600">
            
              {link.label}
            </a>
          )}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-violet-600 sm:inline-flex">
            
            Let&apos;s Talk
            <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/70 text-ink transition-colors duration-200 hover:border-ink lg:hidden">
            
            {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ?
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25, ease: EASE }}
          className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-line bg-white/95 backdrop-blur-xl lg:hidden">
          
            <nav aria-label="Mobile" className="mx-auto max-w-shell px-5 py-5 sm:px-8">
              <ul className="divide-y divide-line">
                {navLinks.map((link, i) =>
              <motion.li
                key={link.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.22, delay: 0.04 * i, ease: EASE }}>
                
                    <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between py-3.5 font-display text-xl font-bold text-ink">
                  
                      {link.label}
                      <ArrowUpRightIcon className="h-4 w-4 text-ink-faint" aria-hidden="true" />
                    </a>
                  </motion.li>
              )}
              </ul>
              <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="mt-5 flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white">
              
                Let&apos;s Talk
                <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
              </a>
            </nav>
          </motion.div> :
        null}
      </AnimatePresence>
    </header>);

}