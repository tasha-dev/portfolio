// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
'use client';

// Importing part
import {ReactNode} from "react";
import Link from 'next/link';
import {motion} from 'framer-motion';
import {LogoType} from "@/type";
import {cn} from "@/util";

// Creating and exporting logo component as default
export default function Logo({mq = false}:LogoType):ReactNode {
    // Returning JSX
    return (
        <Link
            href={'/'}
            className={cn(
                'flex items-center justify-start',
                (mq)
                    ? 'lg:flex-row flex-col lg:gap-5 gap-2'
                    : 'gap-5'
            )}
        >
            <svg
                width="50"
                height="50"
                viewBox="0 0 226 194"
                fill="black"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path
                    className={'dark:fill-white fill-black'}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.5}}
                    d="M225.333 149.079L116.541 1.37735C115.922 0.528491 114.936 0.0237631 113.882 0.000820919C112.828 -0.0221213 111.819 0.436722 111.154 1.26264L0.758115 138.228C0.116277 139.031 -0.135873 140.063 0.0704318 141.072C0.276737 142.082 0.941497 142.931 1.83549 143.39L99.5782 193.633C100.06 193.885 100.587 194 101.137 194C101.481 194 101.848 193.954 102.191 193.839L223.636 154.333C224.668 153.989 225.493 153.186 225.814 152.13C226.181 151.098 225.997 149.974 225.333 149.079ZM111.177 12.0684L99.4178 185.901L8.66648 139.237L111.177 12.0684ZM103.475 186.268L115.326 11.1737L217.08 149.332L103.475 186.268Z"
                />
            </svg>
            <motion.span
                initial={{opacity: 0, y: -30}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: 1}}
                className={'dark:text-white text-black text-[28px]'}
            >
                Mahdi Tasha
            </motion.span>
        </Link>
    );
}