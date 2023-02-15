/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      aspectRatio: {
        landscape: '3 / 2',
        portrait: '2 / 3',
      },
      animation: {
        'spin-fast': 'spin 0.5s linear infinite',
      },
    },
    fontSize: {
      '4xl': ['3.75rem', '3.75rem'],
      '3xl': ['3rem', '3rem'],
      '2xl': ['2.25rem', '2.5rem'],
      base: ['1rem', '1.5rem'],
      sm: ['0.875rem', '1.25rem'],
    },
    colors: {
      transparent: 'transparent',
      neutral: {
        one: '#F8FAFC',
        two: '#F1F5F9',
        three: '#E2E8F0',
        four: '#CBD5E1',
        five: '#94A3B8',
        six: '#64748B',
        seven: '#475569',
        eight: '#334155',
        nine: '#1E293B',
        ten: '#0F172A',
      },
      rose: {
        one: '#FFF1F2',
        two: '#FFE4E6',
        three: '#FECDD3',
        four: '#FDA4AF',
        five: '#FB7185',
        six: '#F43F5E',
        seven: '#E11D48',
        eight: '#BE123C',
        nine: '#9F1239',
        ten: '#881337',
      },
    },
  },
  plugins: [],
}
