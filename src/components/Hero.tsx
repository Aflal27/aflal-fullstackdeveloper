import React, { useRef } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { ArrowDownRightIcon, CodeIcon, ServerIcon, SmartphoneIcon, GitBranchIcon } from 'lucide-react';
import { MagneticLink } from './ui/Buttons';
import { photos, profile } from '../data/site';

const EASE = [0.23, 1, 0.32, 1] as const;

const floatingCards = [
  {
    id: 'frontend',
    icon: CodeIcon,
    tag: 'FRONTEND',
    title: 'React · Next.js',
    value: 'TypeScript',
    caption: 'Tailwind CSS · shadcn/ui',
    accentText: 'text-violet-600',
    accentBg: 'bg-violet-50',
    position: 'left-[-6%] top-[18%]',
    depth: 22,
  },
  {
    id: 'backend',
    icon: ServerIcon,
    tag: 'BACKEND',
    title: 'Node.js · Express',
    value: 'REST APIs',
    caption: 'MySQL · Prisma · Supabase',
    accentText: 'text-electric-600',
    accentBg: 'bg-electric-50',
    position: 'right-[-4%] top-[8%]',
    depth: -18,
  },
  {
    id: 'mobile',
    icon: SmartphoneIcon,
    tag: 'MOBILE',
    title: 'React Native',
    value: 'Expo',
    caption: 'Cross-platform apps',
    accentText: 'text-coral-600',
    accentBg: 'bg-coral-50',
    position: 'right-[-8%] bottom-[12%]',
    depth: 26,
  },
  {
    id: 'devops',
    icon: GitBranchIcon,
    tag: 'DEVOPS',
    title: '4 Apps in Production',
    value: 'Docker · CI/CD',
    caption: 'VPS · Vercel · GitHub',
    accentText: 'text-amber-600',
    accentBg: 'bg-amber-50',
    position: 'left-[-6%] bottom-[10%]',
    depth: -20,
  },
];

export function Hero() {
  const reduce = useReducedMotion();
  const frameRef = useRef<HTMLDivElement>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 90, damping: 18 });
  const smoothY = useSpring(pointerY, { stiffness: 90, damping: 18 });
  const imageX = useTransform(smoothX, [-1, 1], [-14, 14]);
  const imageY = useTransform(smoothY, [-1, 1], [-10, 10]);
  const cardX0 = useTransform(smoothX, [-1, 1], [-floatingCards[0].depth, floatingCards[0].depth]);
  const cardX1 = useTransform(smoothX, [-1, 1], [-floatingCards[1].depth, floatingCards[1].depth]);
  const cardX2 = useTransform(smoothX, [-1, 1], [-floatingCards[2].depth, floatingCards[2].depth]);
  const cardX3 = useTransform(smoothX, [-1, 1], [-floatingCards[3].depth, floatingCards[3].depth]);
  const cardOffsets = [cardX0, cardX1, cardX2, cardX3];

  function handlePointer(event: React.MouseEvent<HTMLDivElement>) {
    if (reduce || !frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    pointerX.set(((event.clientX - rect.left) / rect.width) * 2 - 1);
    pointerY.set(((event.clientY - rect.top) / rect.height) * 2 - 1);
  }

  function resetPointer() {
    pointerX.set(0);
    pointerY.set(0);
  }

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.07, delayChildren: 0.05 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
  };

  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(60rem_34rem_at_18%_-6%,#E9E1FF,transparent_62%),radial-gradient(48rem_30rem_at_88%_4%,#DDE7FF,transparent_60%)]"
      />

      <div className="relative mx-auto max-w-shell px-5 pb-16 sm:px-8 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.p
              variants={item}
              className="flex items-center gap-2.5 text-label font-semibold uppercase text-violet-600"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-coral-500" aria-hidden="true" />
              Full Stack Developer · {profile.location}
            </motion.p>

            <h1 className="mt-6 font-display text-display-xl font-extrabold text-ink">
              <motion.span variants={item} className="block">
                I build things
              </motion.span>
              <motion.span variants={item} className="block">
                for the <span className="text-gradient">web & mobile.</span>
              </motion.span>
            </h1>

            <motion.p variants={item} className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
              Full Stack Developer with 2+ years building and shipping production applications - e-commerce,
              booking systems, POS and more - using Next.js, React, TypeScript, Node.js and MySQL.
            </motion.p>

            <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
              <MagneticLink href="#projects">
                View My Work
                <ArrowDownRightIcon className="h-4 w-4" aria-hidden="true" />
              </MagneticLink>
              <MagneticLink href="#contact" variant="ghost">
                Let&apos;s Talk
              </MagneticLink>
            </motion.div>

            <motion.ul
              variants={item}
              className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium text-ink-mute"
            >
              {profile.disciplines.map((discipline, i) => (
                <li key={discipline} className="flex items-center gap-3">
                  {i > 0 ? (
                    <span className="text-ink-faint" aria-hidden="true">
                      ·
                    </span>
                  ) : null}
                  {discipline}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          <div
            ref={frameRef}
            onMouseMove={handlePointer}
            onMouseLeave={resetPointer}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <motion.div
              initial={{ opacity: 0, scale: reduce ? 1 : 0.96, y: reduce ? 0 : 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
              className="relative"
            >
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[3rem] bg-[conic-gradient(from_180deg,#E9E1FF,#DDE7FF,#FFE1D8,#FFF3D1,#E9E1FF)] opacity-70 blur-xl sm:-inset-6 sm:blur-2xl"
              />
              <div className="grain relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-violet-100 shadow-lift">
                <motion.img
                  src={photos.hero}
                  alt={`${profile.name}, Full Stack Developer based in Sri Lanka`}
                  style={reduce ? undefined : { x: imageX, y: imageY }}
                  className="aspect-[4/5] w-full scale-[1.06] object-cover object-top"
                  loading="eager"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink/35 to-transparent"
                />
                <div className="absolute bottom-5 left-5 rounded-2xl bg-white/90 px-4 py-3 backdrop-blur">
                  <p className="font-display text-sm font-extrabold text-ink">{profile.name}</p>
                  <p className="mt-0.5 text-xs text-ink-mute">{profile.role}</p>
                </div>
              </div>
            </motion.div>

            {/* Mobile metric cards */}
            <div className="mt-5 grid grid-cols-2 gap-2.5 md:hidden">
              {floatingCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={`mobile-${card.id}`}
                    className="rounded-2xl border border-line bg-white/95 p-3.5 shadow-card backdrop-blur"
                  >
                    <div className="flex items-center gap-1.5">
                      <span className={`flex h-6 w-6 items-center justify-center rounded-lg ${card.accentBg}`}>
                        <Icon className={`h-3 w-3 ${card.accentText}`} aria-hidden="true" />
                      </span>
                      <span
                        className={`text-[0.62rem] font-bold uppercase tracking-[0.12em] ${card.accentText}`}
                      >
                        {card.tag}
                      </span>
                    </div>
                    <p className="mt-2 font-display text-base font-extrabold leading-tight text-ink">
                      {card.value}
                    </p>
                    <p className="mt-0.5 truncate text-[0.7rem] text-ink-mute">{card.title}</p>
                  </div>
                );
              })}
            </div>

            {/* Desktop floating cards */}
            {floatingCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.id}
                  className={`absolute hidden w-52 rounded-2xl border border-line bg-white/95 p-4 shadow-float backdrop-blur md:block ${card.position}`}
                  initial={{ opacity: 0, y: reduce ? 0 : 16, scale: reduce ? 1 : 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.4 + i * 0.12 }}
                  style={reduce ? undefined : { x: cardOffsets[i] }}
                >
                  <motion.div
                    animate={reduce ? undefined : { y: [0, -7, 0] }}
                    transition={{ duration: 6 + i, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`flex h-7 w-7 items-center justify-center rounded-lg ${card.accentBg}`}
                      >
                        <Icon className={`h-3.5 w-3.5 ${card.accentText}`} aria-hidden="true" />
                      </span>
                      <span
                        className={`text-[0.65rem] font-bold uppercase tracking-[0.14em] ${card.accentText}`}
                      >
                        {card.tag}
                      </span>
                    </div>
                    <p className="mt-3 text-sm font-semibold text-ink">{card.title}</p>
                    <p className="mt-2 font-display text-lg font-extrabold text-ink">{card.value}</p>
                    <p className="mt-0.5 text-xs text-ink-mute">{card.caption}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
