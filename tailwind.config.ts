import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: {
          DEFAULT: '#FF6B6B',
          light: '#FF8787',
        },
        amber: {
          DEFAULT: '#FFA94D',
          light: '#FFD43B',
        },
        sage: {
          DEFAULT: '#8BC34A',
          light: '#AED581',
        },
        neutral: {
          dark: '#2D2D2D',
          light: '#F8F9FA',
        },
        background: '#FFFCF7',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;

