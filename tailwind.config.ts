// Codes by mahdi tasha
// Importing type of tailwind configs
import type { Config } from "tailwindcss";

// Defining the configs
const config: Config = {
  content: [
      './app/*.{tsx,jsx}',
      './component/*.{tsx,jsx}',
      './component/**/*.{tsx,jsx}',
  ],
  theme: {
      extend: {
          colors: {
              "gunMetal": '#272A3C',
              "richBlack": '#04071D',
              "chineseBlack": '#0C0E23',
              "lavenderGray": '#C1C2D3',
          }
      }
  },
  plugins: [],
};

// Exporting the configs as default
export default config;
