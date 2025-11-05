import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'var(--font-inter)',
          'var(--font-noto-sans-jp)',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        jp: [
          'var(--font-noto-sans-jp)',
          'var(--font-inter)',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
      },
      fontWeight: {
        headline: '900', // 超太字見出し（h1）
        title: '700',    // 太字見出し（h2/h3）
        medium: '500',   // 中間（強調テキスト）
        normal: '400',   // 本文
      },
      letterSpacing: {
        tight2: '-0.02em',
        tight3: '-0.03em',
      },
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
        brand: {
          blue: '#2563eb', // ブランドカラー（primary と同じ）
        },
        heroPanel: '#0a2540',
      },
    },
  },
  plugins: [],
};
export default config;
