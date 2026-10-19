/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Dark Obsidian & Leather Base
        dark: {
          950: '#0B0A09', // Main deep background
          900: '#12110F', // Card background
          850: '#171513', // Card elevation
          800: '#221F1B', // Card border / divider
          700: '#34302A', // Muted border
          600: '#4A443C', // Border subtle
        },
        // Gold & Amber Accents (Refinement & Vintage Luxury)
        gold: {
          DEFAULT: '#D4AF37', // Pure Classic Gold
          light: '#F3E5AB',   // Soft pale gold highlight
          dark: '#AA820A',    // Deep antique bronze gold
          hover: '#E5C048',   // Bright gold on hover
          muted: '#8F7526',   // Muted gold
        },
        amber: {
          brand: '#E6A742',
          glow: 'rgba(230, 167, 66, 0.25)',
        },
        // Text tones
        cream: {
          50: '#FAF8F5',
          100: '#F5F2EB',
          200: '#E8E2D5',
          300: '#D5CCBD',
          400: '#A89E8F',
          500: '#7A7265',
        },
      },
      fontFamily: {
        display: ['"Cinzel"', '"Playfair Display"', 'Georgia', 'serif'],
        heading: ['"Cabinet Grotesk"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', '"Manrope"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '42rem',
        editorial: '1240px',
      },
      boxShadow: {
        'gold-glow': '0 8px 30px -6px rgba(212, 175, 55, 0.3)',
        'gold-glow-lg': '0 14px 40px -4px rgba(212, 175, 55, 0.45)',
        'dark-card': '0 10px 30px -10px rgba(0, 0, 0, 0.6)',
        'dark-card-lg': '0 20px 45px -15px rgba(0, 0, 0, 0.85)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-soft': 'cubic-bezier(0.25, 0.9, 0.25, 1)',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translate(0px, 0px)' },
          '50%': { transform: 'translate(4px, -10px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translate(0px, 0px)' },
          '50%': { transform: 'translate(-6px, 8px)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '0.12', transform: 'scale(1)' },
          '50%': { opacity: '0.22', transform: 'scale(1.05)' },
        },
        'shimmer-sweep': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
      },
      animation: {
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'float-reverse': 'float-reverse 10s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 6s ease-in-out infinite',
        'shimmer-sweep': 'shimmer-sweep 2.5s infinite',
        'fade-in-up': 'fade-in-up 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scale-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
