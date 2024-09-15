// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
'use client';

// Importing part
import {ReactNode} from "react";
import {Button} from "@/component/ui/button";
import {Moon, Sun} from "lucide-react";
import {useTheme} from 'next-themes'

// Creating and exporting theme toggler component as default
export default function ThemeToggle(): ReactNode {
    // Defining theme
    const {theme, setTheme} = useTheme()

    // Returning JSX
    return (
        <Button
            data-theme={theme}
            className={'overflow-hidden relative'}
            size={'icon'}
            onClick={() => {
                (theme === 'light')
                    ? setTheme('dark')
                    : setTheme('light')
            }}
        >
            <Sun
                className={'w-6 h-6 absolute top-[50%] -translate-x-[50%] transition-all duration-500 -translate-y-[50%] left-[50%] dark:left-[150%]'}
                data-active={(theme === 'light')}
            />
            <Moon
                className={'w-6 h-6 absolute top-[50%] translate-x-[50%] transition-all duration-500 -translate-y-[50%] dark:right-[50%] right-[150%]'}
                data-active={(theme === 'dark')}
            />
        </Button>
    );
}