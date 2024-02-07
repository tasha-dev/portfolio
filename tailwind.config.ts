// Importing Config Type Of TailwindCSS
import type { Config } from 'tailwindcss'

// Defining Configs Of TailwindCSS
const config: Config = {
  content: [
      './app/page.tsx',
      './app/layout.tsx',
      './component/*.{tsx,jsx}',
      './component/**/*.{tsx,jsx}',
      './chunk/*.{tsx,jsx}',
      './chunk/**/*.{tsx,jsx}',
  ],
  theme: {
      extend: {
          colors: {
              "theme": '#240046',
              "darker-theme": '#0f0028',
              'theme-orange': '#fb6e04',
              'theme-orange-dark': '#b05504',
          },
      }
  },
  plugins: [],
}

// Exporting Configs Of TailwindCSS
export default config;