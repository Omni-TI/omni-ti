/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Paleta Omni-TI: blanco (base), morado (secundario), azul y verde (detalles)
        brand: {
          50: '#F6F2FF', 100: '#EDE4FF', 200: '#DACBFF', 300: '#BDA0FF',
          400: '#9D72F2', 500: '#7F4BDB', 600: '#6A33C2', 700: '#55269F',
          800: '#421D7C', 900: '#2E1456', 950: '#1C0B3A',
        },
        azul: {
          50: '#EEF4FF', 100: '#DCE8FF', 200: '#B9D1FF', 500: '#2F6FED',
          600: '#1F5BD6', 700: '#1A49AB',
        },
        verde: {
          50: '#E8FAF3', 100: '#C9F2E1', 200: '#98E4C6', 500: '#12B886',
          600: '#0E9970', 700: '#0B7857',
        },
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up .6s ease-out both',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
