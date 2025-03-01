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
    // Core utility classes
    'transform',
    'transform-gpu',
    'transition-all',
    'duration-300',
    'duration-500',
    'opacity-0',
    'opacity-40',
    'opacity-60',
    'opacity-100',
    'z-0',
    'z-1',
    'z-2',
    'z-3',
    'z-10',
    'z-20',
    'w-[23%]',
    'w-[46%]',
    'h-[550px]',
    'left-0',
    'left-[25%]',
    'left-[50%]',
    'left-[75%]',
    'ml-[-11.5%]',
    'ml-[-34.5%]',
    'translate-x-0',
    'translate-x-[35%]',
    'translate-x-[65%]',
    'translate-x-[-35%]',
    'translate-x-[-45%]',
    'translate-x-[-65%]',
    'translate-y-0',
    'translate-y-[20px]',
    'translate-z-0',
    'animate-fade-in',
    'all-visible',
    'hovered',
    'preserve-3d',
    'backface-hidden',

    // Hover utilities
    {
      pattern: /hover:(opacity|text|bg|border|shadow)-.*/
    },
    // Group hover utilities
    {
      pattern: /group-hover:(rotate|scale|opacity|text)-.*/
    },
    // Animation utilities
    {
      pattern: /animate-.*/
    },
    // Transform utilities
    {
      pattern: /transform-.*/
    },
    // Gradient utilities
    {
      pattern: /(from|via|to)-(blue|purple|accent)-(highlight|[0-9]+)/,
      variants: ['hover']
    }
  ]
} 