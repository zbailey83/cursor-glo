/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-syncopate)", "sans-serif"],
        body: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["monospace"],
      },
      colors: {
        lumina: {
          bg: '#fbf6ba', // Cream
          primary: '#b9a46b', // Gold
          text: '#000000',
          white: '#ffffff',
          subtle: 'rgba(0, 0, 0, 0.1)',
          strong: 'rgba(0, 0, 0, 0.2)',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "lumina-gradient": "linear-gradient(to bottom right, #fbf6ba, #f0e68c, #b9a46b)",
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
