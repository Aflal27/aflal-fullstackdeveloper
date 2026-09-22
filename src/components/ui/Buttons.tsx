import React, { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface MagneticLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'ghost' | 'light';
  className?: string;
  onClick?: () => void;
}

const EASE = [0.23, 1, 0.32, 1] as const;

const styles: Record<NonNullable<MagneticLinkProps['variant']>, string> = {
  primary:
  'bg-ink text-white hover:bg-violet-600 border border-transparent shadow-card',
  ghost:
  'bg-transparent text-ink border border-line hover:border-ink hover:bg-white',
  light: 'bg-white text-ink border border-transparent hover:bg-violet-50'
};

export function MagneticLink({
  href,
  children,
  variant = 'primary',
  className = '',
  onClick
}: MagneticLinkProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  function handleMove(event: React.MouseEvent<HTMLAnchorElement>) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (event.clientX - (rect.left + rect.width / 2)) * 0.18;
    const y = (event.clientY - (rect.top + rect.height / 2)) * 0.28;
    setOffset({ x, y });
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ duration: 0.22, ease: EASE }}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-colors duration-200 ${styles[variant]} ${className}`}>
      
      {children}
    </motion.a>);

}