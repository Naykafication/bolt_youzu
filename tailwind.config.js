/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        progress: 'progress 2s ease-out infinite',
        pulse: 'pulse 2s infinite',
      },
      colors: {
        'primary-black': 'var(--primary-black)',
        'primary-green': 'var(--primary-green)',
        'accent-green': 'var(--accent-green)',
        'primary-orange': 'var(--primary-orange)',
        'warm-orange': 'var(--warm-orange)',
        'primary-yellow': 'var(--primary-yellow)',
        'bg-light-yellow': 'var(--bg-light-yellow)',
        'bg-off-white': 'var(--bg-off-white)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};