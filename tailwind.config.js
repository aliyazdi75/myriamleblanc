/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'soft-beige': '#F5F5F5',
        'warm-cream': '#F9F7FF',
        'soft-peach': '#F0E6FF',
        'dusty-rose': '#D4C1EC',
        'terracotta': '#7E57C2',
        'sage-green': '#78909C',
        'deep-teal': '#455A64',
        'navy': '#37474F',
        'text-primary': '#2D3748',
        'text-secondary': '#4A5568',
        'accent': '#9575CD',
      },
      fontFamily: {
        sans: ['Work Sans', 'system-ui', 'sans-serif'],
        serif: ['Petrona', 'Georgia', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#4A5568',
            h1: {
              color: '#2D3748',
              fontFamily: 'Petrona, serif',
            },
            h2: {
              color: '#2D3748',
              fontFamily: 'Petrona, serif',
            },
            h3: {
              color: '#2D3748',
              fontFamily: 'Petrona, serif',
            },
            a: {
              color: '#7E57C2',
              '&:hover': {
                color: '#9575CD',
              },
            },
          },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'gradient-x': 'gradient-x 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
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
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'warm': '0 4px 20px rgba(126, 87, 194, 0.08)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 