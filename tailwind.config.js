/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#9B1C47',
          50: '#F9E1E8',
          100: '#F3C3D1',
          200: '#E787A3',
          300: '#DB4B75',
          400: '#9B1C47',
          500: '#7F1639',
          600: '#63112C',
          700: '#470C1F',
          800: '#2B0712',
          900: '#0F0305',
        },
        dark: {
          DEFAULT: '#0A0A0F',
          50: '#1E1E2E',
          100: '#1A1A25',
          200: '#16161C',
          300: '#121215',
          400: '#0A0A0F',
          500: '#08080B',
          600: '#060608',
          700: '#040405',
          800: '#020203',
          900: '#000000',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'floating': 'floating 3s ease-in-out infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'floating': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};