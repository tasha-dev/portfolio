// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
'use client';

// Importing part
import {ReactNode} from "react";
import {motion} from 'framer-motion';
import {PageLayoutType} from "@/type";

// Creating and exporting page layout component as default
export default function PageLayout({className, children}:PageLayoutType):ReactNode {
    // Returning JSX
    return (
        <div className={className}>
            <motion.div
                initial={{
                    opacity: 0,
                    y: 20
                }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    duration: 1,
                    delay: 1
                }}
            >
                {children}
            </motion.div>
        </div>
    );
}