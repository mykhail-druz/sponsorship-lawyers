import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        dark: "#000000",
        "light-dark": "#1E1E1E",
        "light-biege": "#FFFAF4",
        biege: "#FADAB7",
        "dark-biege": "#BF996F",
        brown: "#916330",
      },
    },
  },
  plugins: [],
};
export default config;
