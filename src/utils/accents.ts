export type Accent = 'violet' | 'electric' | 'coral' | 'sun';

interface AccentTokens {
  text: string;
  bg: string;
  softBg: string;
  border: string;
  solid: string;
  dot: string;
}

const map: Record<Accent, AccentTokens> = {
  violet: {
    text: 'text-violet-600',
    bg: 'bg-violet-50',
    softBg: 'bg-violet-100',
    border: 'border-violet-200',
    solid: 'bg-violet-600',
    dot: 'bg-violet-500'
  },
  electric: {
    text: 'text-electric-600',
    bg: 'bg-electric-50',
    softBg: 'bg-electric-100',
    border: 'border-electric-100',
    solid: 'bg-electric-500',
    dot: 'bg-electric-500'
  },
  coral: {
    text: 'text-coral-600',
    bg: 'bg-coral-50',
    softBg: 'bg-coral-100',
    border: 'border-coral-100',
    solid: 'bg-coral-500',
    dot: 'bg-coral-500'
  },
  sun: {
    text: 'text-sun-500',
    bg: 'bg-sun-100',
    softBg: 'bg-sun-100',
    border: 'border-sun-100',
    solid: 'bg-sun-400',
    dot: 'bg-sun-400'
  }
};

export function accent(name: Accent): AccentTokens {
  return map[name];
}