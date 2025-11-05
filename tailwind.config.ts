import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          hover: '#1d4ed8',
          foreground: '#ffffff',
        },
        accent: {
          DEFAULT: '#0284c7', // sky-600
          hover: '#0369a1', // sky-700
          weak: '#e0f2fe', // sky-100
        },
        heroPanel: '#0a2540',
      },
    },
  },
  plugins: [],
};
export default config;
