export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        canvas: '#FBFAFC',
        surface: '#FFFFFF',
        ink: {
          DEFAULT: '#14121A',
          soft: '#3C3948',
          mute: '#6B6779',
          faint: '#A3A0AE',
        },
        line: '#E8E5EF',
        violet: {
          50: '#F4F0FF',
          100: '#E9E1FF',
          200: '#D3C4FF',
          400: '#9F7AFF',
          500: '#7C3AED',
          600: '#6725D9',
          700: '#5119AE',
        },
        electric: {
          50: '#EFF4FF',
          100: '#DDE7FF',
          400: '#5C8BFF',
          500: '#2563EB',
          600: '#1D4FC4',
        },
        coral: {
          50: '#FFF2EE',
          100: '#FFE1D8',
          400: '#FF8A6B',
          500: '#FF5C33',
          600: '#E04520',
        },
        sun: {
          100: '#FFF3D1',
          400: '#FFC53D',
          500: '#F0A700',
        },
      },
      fontFamily: {
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.15rem, 6.5vw, 6.25rem)', { lineHeight: '0.98', letterSpacing: '-0.035em' }],
        'display-lg': ['clamp(1.85rem, 4.5vw, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-md': ['clamp(1.5rem, 3vw, 2.75rem)', { lineHeight: '1.12', letterSpacing: '-0.02em' }],
        label: ['0.75rem', { lineHeight: '1', letterSpacing: '0.14em' }],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(20,18,26,0.04), 0 12px 32px -18px rgba(20,18,26,0.18)',
        lift: '0 2px 4px rgba(20,18,26,0.04), 0 28px 56px -24px rgba(20,18,26,0.28)',
        float: '0 18px 40px -20px rgba(103,37,217,0.35)',
        nav: '0 1px 0 rgba(232,229,239,1), 0 10px 30px -22px rgba(20,18,26,0.35)',
      },
      maxWidth: {
        shell: '82rem',
      },
    },
  },
}
