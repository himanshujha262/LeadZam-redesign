/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#1264F5',
          600: '#0E52CD',
          700: '#0A3FA5',
          DEFAULT: '#1264F5',
        },
        primary: '#1264F5',
        'dark-text': '#0F172A',
        'secondary-text': '#64748B',
        'app-bg': '#F8FAFC',
        'surface': '#FFFFFF',
        'app-border': '#E2E8F0',
        'success': '#16A34A',
        'warning': '#F59E0B',
        'error': '#DC2626',
      },
      fontFamily: {
        sans: ['Inter', '"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'drawer': '-8px 0 32px -4px rgba(15, 23, 42, 0.12)',
        'modal': '0 20px 48px -12px rgba(15, 23, 42, 0.18)',
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}

