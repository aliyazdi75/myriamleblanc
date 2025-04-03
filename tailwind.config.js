/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-beige': '#F5F5F0',
        'accent': '#4A5568',
        'text-primary': '#2D3748',
        'text-secondary': '#4A5568',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#4A5568',
            a: {
              color: '#2D3748',
              textDecoration: 'none',
              '&:hover': {
                color: '#4A5568',
                textDecoration: 'underline',
              },
            },
            h1: {
              color: '#1A202C',
            },
            h2: {
              color: '#1A202C',
            },
            h3: {
              color: '#1A202C',
            },
          },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 