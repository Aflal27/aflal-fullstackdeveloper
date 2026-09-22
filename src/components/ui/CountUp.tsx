import React, { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

interface CountUpProps {
  /** Full display string, e.g. "LKR 2M–5M" or "3". Digits animate, text stays. */
  value: string;
  duration?: number;
}

/**
 * Counts up the first numeric run inside a label while leaving the rest of the
 * string intact, so ranges like "5.5K–12.5K" stay truthful and readable.
 */
export function CountUp({ value, duration = 900 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const reduce = useReducedMotion();
  const match = value.match(/\d+(\.\d+)?/);
  const target = match ? parseFloat(match[0]) : null;
  const [current, setCurrent] = useState(target ?? 0);

  useEffect(() => {
    if (reduce || target === null) return;
    if (!inView) {
      setCurrent(0);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(target * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target, duration, reduce]);

  if (target === null || !match) return <span ref={ref}>{value}</span>;

  const decimals = match[0].includes('.') ? 1 : 0;
  const rendered = reduce ? match[0] : current.toFixed(decimals);

  return (
    <span ref={ref}>
      {value.slice(0, match.index)}
      {rendered}
      {value.slice((match.index ?? 0) + match[0].length)}
    </span>);

}