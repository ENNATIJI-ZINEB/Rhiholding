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
          DEFAULT: "#142550",
          dark: "#0f1d3d",
          light: "#1a2f66",
        },
        accent: {
          DEFAULT: "#3459A6",
          light: "#4a6bb8",
        },
        background: {
          DEFAULT: "#ffffff",
          light: "#f5f5f5",
        },
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

