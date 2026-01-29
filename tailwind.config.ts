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
        primary: '#2563EB',
        secondary: '#64748B',
        accent: '#F59E0B',
        background: '#FFFFFF',
        card: '#F8FAFC',
        text: '#0F172A',
        border: '#E2E8F0',
      },
    },
  },
  plugins: [],
};

export default config;
