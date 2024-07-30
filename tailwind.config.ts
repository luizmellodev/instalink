import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'default': '#17171C',
      },
      colors: {
        primary: {
          100: '#D2EEE9',
          200: '#A5DED3',
          300: '#77CDBE',
          400: '#4ABDA8',
          DEFAULT: '#1DAC92',
        },
        secondary: {
          100: '#C5CCE0',
          200: '#B1BBD6',
          300: '#6378AE',
          400: '#4A5A82',
          DEFAULT: '#252D41',
        },
        grayscale: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#121826',
        },
        gradienteGreen: {
          left: '#1DAC92',
          right: '#228E8E',
        },
      },
    },
  },
  plugins: [],
};

export default config;
