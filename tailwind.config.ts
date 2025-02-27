import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#001F3F',      // Navy Blue
        secondary: '#0047AB',    // Royal Blue
        'text-light': 'rgba(255, 255, 255, 0.95)',
      },
    },
  },
  plugins: [],
};

export default config;