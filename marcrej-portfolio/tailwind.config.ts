import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F2F2E2",
        forest: "#344E41",
        sage: "#A3B18A",
        stone: "#DAD7CD",
      }
    },
  },
  plugins: [],
};
export default config;