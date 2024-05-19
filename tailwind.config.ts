// Codes by mahdi tasha
// Importing type of tailwind configs
import type { Config } from "tailwindcss";

// Defining the configs
const config: Config = {
  content: [
      './app/page.tsx',
      './component/*.{tsx,jsx}',
      './component/**/*.{tsx,jsx}',
  ],
  theme: {},
  plugins: [],
};

// Exporting the configs as default
export default config;
