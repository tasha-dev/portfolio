// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
'use client';

// Importing part
import {ReactNode} from "react";
import {motion} from 'framer-motion';
import {PageLayoutType} from "@/type";
import {cn} from "@/util";
import {usePathname} from "next/navigation";

// Creating and exporting page layout component as default
export default function PageLayout({className, children}:PageLayoutType):ReactNode {
    // Defining router
    const pathname = usePathname();

    // Returning JSX
    return (
        <div className={cn(
            'content',
            className
        )}>
            <motion.div
                key={pathname}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1, delay: 1}}
                exit={{opacity: 0, y: 20}}
            >
                <div className={'flex flex-col gap-20'}>
                    {children}
                </div>
            </motion.div>
        </div>
    );
}