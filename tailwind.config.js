/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Primary Colors
        'primary': {
          DEFAULT: '#2D5016', // deep-forest-green
          50: '#F0F4ED', // light-forest-tint
          100: '#D9E5D0', // forest-tint
          200: '#B8CFA3', // medium-forest-tint
          300: '#96B876', // forest-light
          400: '#75A249', // forest-medium
          500: '#548C1C', // forest-base
          600: '#2D5016', // deep-forest-green
          700: '#234012', // darker-forest
          800: '#19300E', // darkest-forest
          900: '#0F200A', // forest-black
          foreground: '#FFFFFF', // white
        },
        // Secondary Colors
        'secondary': {
          DEFAULT: '#8B4513', // rich-earth-brown
          50: '#F5F0EB', // light-earth-tint
          100: '#E8D7C7', // earth-tint
          200: '#D4B89F', // medium-earth-tint
          300: '#C09977', // earth-light
          400: '#AC7A4F', // earth-medium
          500: '#985B27', // earth-base
          600: '#8B4513', // rich-earth-brown
          700: '#6F370F', // darker-earth
          800: '#53290B', // darkest-earth
          900: '#371B07', // earth-black
          foreground: '#FFFFFF', // white
        },
        // Accent Colors
        'accent': {
          DEFAULT: '#FF6B35', // warm-sunset-orange
          50: '#FFF4F0', // light-sunset-tint
          100: '#FFE4D9', // sunset-tint
          200: '#FFC9B3', // medium-sunset-tint
          300: '#FFAE8D', // sunset-light
          400: '#FF9367', // sunset-medium
          500: '#FF7841', // sunset-base
          600: '#FF6B35', // warm-sunset-orange
          700: '#E5502A', // darker-sunset
          800: '#CC351F', // darkest-sunset
          900: '#B21A14', // sunset-red
          foreground: '#FFFFFF', // white
        },
        // Background Colors
        'background': {
          DEFAULT: '#FAFAF9', // warm-off-white
          secondary: '#F5F5F4', // subtle-warm-gray
        },
        // Surface Colors
        'surface': {
          DEFAULT: '#F5F5F4', // subtle-warm-gray
          hover: '#F0F0EF', // surface-hover
          active: '#EBEBEA', // surface-active
        },
        // Text Colors
        'text': {
          primary: '#1C1C1C', // near-black
          secondary: '#6B7280', // medium-gray
          muted: '#9CA3AF', // light-gray
          inverse: '#FFFFFF', // white
        },
        // Status Colors
        'success': {
          DEFAULT: '#059669', // natural-green
          50: '#ECFDF5', // light-success-tint
          100: '#D1FAE5', // success-tint
          200: '#A7F3D0', // medium-success-tint
          300: '#6EE7B7', // success-light
          400: '#34D399', // success-medium
          500: '#10B981', // success-base
          600: '#059669', // natural-green
          700: '#047857', // darker-success
          800: '#065F46', // darkest-success
          900: '#064E3B', // success-black
          foreground: '#FFFFFF', // white
        },
        'warning': {
          DEFAULT: '#D97706', // amber
          50: '#FFFBEB', // light-warning-tint
          100: '#FEF3C7', // warning-tint
          200: '#FDE68A', // medium-warning-tint
          300: '#FCD34D', // warning-light
          400: '#FBBF24', // warning-medium
          500: '#F59E0B', // warning-base
          600: '#D97706', // amber
          700: '#B45309', // darker-warning
          800: '#92400E', // darkest-warning
          900: '#78350F', // warning-black
          foreground: '#FFFFFF', // white
        },
        'error': {
          DEFAULT: '#DC2626', // clear-red
          50: '#FEF2F2', // light-error-tint
          100: '#FEE2E2', // error-tint
          200: '#FECACA', // medium-error-tint
          300: '#FCA5A5', // error-light
          400: '#F87171', // error-medium
          500: '#EF4444', // error-base
          600: '#DC2626', // clear-red
          700: '#B91C1C', // darker-error
          800: '#991B1B', // darkest-error
          900: '#7F1D1D', // error-black
          foreground: '#FFFFFF', // white
        },
        // Border Colors
        'border': {
          DEFAULT: '#E5E7EB', // light-border
          muted: '#F3F4F6', // muted-border
        },
      },
      fontFamily: {
        'heading': ['Merriweather', 'serif'],
        'body': ['Inter', 'sans-serif'],
        'caption': ['Source Sans Pro', 'sans-serif'],
        'data': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.5rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        'full': '9999px',
      },
      boxShadow: {
        'organic': '0 4px 20px rgba(45, 80, 22, 0.1)',
        'organic-subtle': '0 1px 3px rgba(45, 80, 22, 0.05)',
        'organic-medium': '0 4px 12px rgba(45, 80, 22, 0.08)',
        'organic-pronounced': '0 8px 25px rgba(45, 80, 22, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 300ms cubic-bezier(0.4, 0.0, 0.2, 1)',
        'slide-down': 'slideDown 200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
        'slide-up': 'slideUp 200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionTimingFunction: {
        'organic': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      transitionDuration: {
        'fast': '200ms',
        'medium': '300ms',
      },
      screens: {
        'xs': '475px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}