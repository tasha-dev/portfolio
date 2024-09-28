// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
'use client';

// Importing part
import {ReactNode} from "react";
import {Button} from "@/component/ui/button";
import {Moon, Sun} from "lucide-react";
import {useTheme} from 'next-themes'
import {ThemeToggleType} from "@/type";
import {cn} from "@/util";

// Creating and exporting theme toggler component as default
export default function ThemeToggle({hasText = false}:ThemeToggleType): ReactNode {
    // Defining theme
    const {theme, setTheme} = useTheme()

    // Returning JSX
    return (
        <Button
            data-theme={theme}
            size={(hasText) ? 'default' : 'icon'}
            className={cn(
                'overflow-hidden',
                (hasText)
                    ? 'flex items-center justify-start gap-5'
                    : ''
            )}
            onClick={() => {
                (theme === 'light')
                    ? setTheme('dark')
                    : setTheme('light')
            }}
        >
            <div
                className={'text-current transition-all duration-500 w-10 h-auto data-[active="true"]:translate-y-5 data-[active="false"]:-translate-y-5'}
                data-active={(theme === 'dark')}
            >
                <div className={'flex items-center justify-center h-10 w-10'}><Sun className={'w-6 h-6'}/></div>
                <div className={'flex items-center justify-center h-10 w-10'}><Moon className={'w-6 h-6'}/></div>
            </div>
            {
                (hasText)
                    ? (
                        <>
                            <div
                                className={'text-current transition-all duration-500 data-[active="true"]:translate-y-5 data-[active="false"]:-translate-y-5'}
                                data-active={(theme === 'dark')}
                            >
                                <div className={'flex items-center justify-center h-10 w-10'}><span className={'text-4'}>Light</span></div>
                                <div className={'flex items-center justify-center h-10 w-10'}><span className={'text-4'}>Dark</span></div>
                            </div>
                        </>
                    ) : false
            }
        </Button>
    );
}