/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Tipografía principal (serif elegante)
        'serif': ['var(--font-playfair)', 'Playfair Display', 'serif'],
        // Tipografía secundaria (sans serif moderna)
        'sans': ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
        // Alias para uso específico
        'display': ['var(--font-playfair)', 'Playfair Display', 'serif'],
        'body': ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
      },
      colors: {
        // Nueva paleta de colores con excelente contraste
        background: '#1B2A49', // Azul oscuro - fondo principal
        foreground: '#FFFFFF', // Blanco puro - texto principal
        primary: {
          50: '#E6F0FF',
          100: '#CCE0FF',
          200: '#99C2FF',
          300: '#66A3FF',
          400: '#3385FF',
          500: '#0066FF', // Azul principal
          600: '#0052CC',
          700: '#003D99',
          800: '#002966',
          900: '#001433',
        },
        accent: {
          50: '#E6FFF2',
          100: '#CCFFE5',
          200: '#99FFCB',
          300: '#66FFB1',
          400: '#33FF97',
          500: '#00FF85', // Verde neón - acento principal
          600: '#00CC6A',
          700: '#009950',
          800: '#006635',
          900: '#00331A',
        },
        neutral: {
          50: '#F8F9FA',
          100: '#F1F3F4',
          200: '#E8EAED',
          300: '#DADCE0',
          400: '#BDC1C6',
          500: '#9AA0A6',
          600: '#80868B',
          700: '#5F6368',
          800: '#3C4043',
          900: '#202124',
        },
        surface: {
          primary: '#1B2A49', // Azul oscuro
          secondary: '#EDEDED', // Gris claro
          accent: '#2A3F6B', // Azul medio para elementos secundarios
          card: '#243B5C', // Azul más claro para tarjetas
        },
        text: {
          primary: '#FFFFFF', // Blanco puro
          secondary: '#EDEDED', // Gris claro
          muted: '#B8C5D6', // Azul grisáceo para texto secundario
          accent: '#00FF85', // Verde neón para texto destacado
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        glow: 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        glow: {
          '0%': {
            boxShadow: '0 0 5px #00FF85, 0 0 10px #00FF85, 0 0 15px #00FF85',
          },
          '100%': {
            boxShadow: '0 0 10px #00FF85, 0 0 20px #00FF85, 0 0 30px #00FF85',
          },
        },
      },
      boxShadow: {
        neon: '0 0 5px #00FF85, 0 0 10px #00FF85, 0 0 15px #00FF85',
        'neon-lg': '0 0 10px #00FF85, 0 0 20px #00FF85, 0 0 30px #00FF85',
      },
    },
  },
  plugins: [],
};
