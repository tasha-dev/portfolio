// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode, useState} from "react";
import {Moon, Sun} from "lucide-react";
import {Button} from "@/component/ui/button";

// Creating and exporting theme toggle component as default
export default function ThemeToggle():ReactNode {
    // Defining states of component
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');

    // Returning JSX
    return (
        <Button
            size={'icon'}
            onClick={() => {
                const htmlElement = document.querySelector('html');

                if (theme === 'dark') {
                    setTheme('light');
                    htmlElement?.classList.remove('dark');
                } else {
                    setTheme('dark');
                    htmlElement?.classList.add('dark');
                }
            }}
        >
            {
                (theme === 'dark')
                    ? <Moon color={'currentColor'} size={20} />
                    : <Sun color={'currentColor'} size={20} />
            }
        </Button>
    );
}
