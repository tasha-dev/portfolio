// Codes by mahdi tasha
// Importing part
import type {Config} from "tailwindcss";

// Defining configs of tailwindCSS
const config: Config = {
    content: [
        './app/*.{tsx,jsx}',
        './app/**/*.{tsx,jsx}',
        './app/**/**/*.{tsx,jsx}',
        './component/*.{tsx,jsx}',
        './component/**/*.{tsx,jsx}',
    ],
    theme: {},
    plugins: [],
};

// Exporting the configs
export default config;
