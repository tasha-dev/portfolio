// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode, useState} from "react";
import IconComponent from "@/chunk/iconComponent";

// Creating and exporting theme Toggler as default
export default function ThemeTogglerComponent():ReactNode {
    // Defining state of component
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');

    // Returning JSX
    return (
        <button
            onClick={() => {
                const htmlElement = document.querySelector('html');

                if (theme === 'dark') {
                    htmlElement?.classList.remove('dark');
                    setTheme('light');
                } else {
                    htmlElement?.classList.add('dark');
                    setTheme('dark');
                }
            }}
            className={'w-[50px] h-[50px] flex items-center justify-center dark:bg-light bg-dark border dark:border-light/20 border-dark:20 rounded-[10px] dark:text-dark text-light'}
        >
            <IconComponent name={(theme === 'dark') ? 'sun' : 'moon'} />
        </button>
    );
}