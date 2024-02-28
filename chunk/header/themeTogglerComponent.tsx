// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode} from "react";

// Creating and exporting theme Toggler as default
export default function ThemeTogglerComponent():ReactNode {
    // Returning JSX
    return (
        <button
            onClick={() => {
                const htmlElement = document.querySelector('html');
                const theme = (htmlElement?.classList.contains('dark')) ? 'dark' : 'light';

                (theme === 'dark')
                    ? htmlElement?.classList.remove('dark')
                    : htmlElement?.classList.add('dark');
            }}
            className={'w-[50px] h-[50px] flex items-center justify-center dark:bg-light bg-dark border dark:border-light/20 border-dark:20 rounded-[10px]'}
        >

        </button>
    );
}