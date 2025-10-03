import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cor principal da Devz
        'devz-primary': '#31496E',
        'devz-primary-light': '#4A5F7A',
        'devz-primary-dark': '#1E2A3A',
        
        // Variações da cor principal
        'devz-blue': {
          50: '#F0F2F5',
          100: '#E1E6ED',
          200: '#C3CDDB',
          300: '#A5B4C9',
          400: '#879BB7',
          500: '#31496E', // Cor principal
          600: '#2A3E5A',
          700: '#233246',
          800: '#1C2632',
          900: '#151A1E',
        },
        
        // Manter cores existentes
        'primary': '#31496E',
        'accent': '#3B82F6',
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
