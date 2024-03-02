// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode} from "react";
import {cn} from "@/lib/cn";
import {motion} from 'framer-motion';
import {cubicBezier} from "framer-motion";

// Defining type of props
interface propsType {
    size?: 'lg' | 'sm';
    children: ReactNode;
    className?: string;
}

// Creating and exporting page component as default
export default function page({children, className, size = 'lg'}:propsType):ReactNode {
    // Returning JSX
    return (
        <motion.div
            variants={{
                'showing' : {y: 0, opacity: 100},
                'hidden' : {y: 50, opacity: 0}
            }}
            className={cn(
                'mx-auto p-[20px]',
                (size === 'lg') ? 'max-w-[1200px]' : 'max-w-[600px]',
                className
            )}
            initial={'hidden'}
            animate={'showing'}
        >
            {children}
        </motion.div>
    );
}