// Codes by mahdi tasha
// Importing configs of tailwindCSS
import type {Config} from "tailwindcss";

// Defining configs
const config: Config = {
    darkMode: 'class',
    content: [
        './component/*.{ts,tsx,js,jsx}',
        './component/**/*.{ts,tsx,js,jsx}',
        './chunk/*.{ts,tsx,js,jsx}',
        './chunk/**/*.{ts,tsx,js,jsx}',
        './app/*.{ts,tsx,js,jsx}'
    ],
    theme: {
        extend: {
            colors: {
                light: '#F4F4F4',
                light500: '#bbbbbb',
                light200: '#919191',
                dark: '#333333',
                dark500: '#646464',
                dark200: '#868686',
                primary: '#7E57C2'
            }
        }
    },
    plugins: [],
};

// Exporting the configs
export default config;