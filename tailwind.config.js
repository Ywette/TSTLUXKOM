/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#001B3D',
        secondary: '#0047AB',
        'accent-highlight': '#FF4D8D',
        'text-light': '#FFFFFF',
      },
      keyframes: {
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
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'fade-in': 'fade-in 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
  safelist: [
    'transform',
    'transition-all',
    'duration-300',
    'duration-500',
    'opacity-0',
    'opacity-60',
    'opacity-100',
    'translate-x-0',
    'translate-x-25',
    'translate-x-35',
    'translate-x-[25%]',
    'translate-x-[35%]',
    'translate-x-[-10%]',
    'translate-x-[-34.5%]',
    'translate-y-0',
    'translate-y-8',
    'z-0',
    'z-1',
    'z-2',
    'z-10',
    'z-20',
    'w-[46%]',
    'ml-[-34.5%]',
    'animate-fade-in',
    'all-visible',
    {
      pattern: /^hover:/,
      variants: ['hover'],
    },
    {
      pattern: /^group-hover:/,
      variants: ['group-hover'],
    },
    {
      pattern: /(from|via|to)-(blue|purple|accent)-(highlight|[0-9]+)/,
      variants: ['hover'],
    },
    {
      pattern: /shadow-/,
      variants: ['hover'],
    },
    {
      pattern: /animate-/,
      variants: ['group-hover'],
    },
    {
      pattern: /border-/,
      variants: ['hover'],
    }
  ],
} 