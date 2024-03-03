// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode} from "react";
import Container from "@/component/ui/container";
import {motion} from 'framer-motion';
import Image from "next/image";
import Logo from '@/images/logo.jpg';
import {Button} from "@/component/ui/button";
import {Moon} from 'lucide-react';
import Link from "next/link";
import ThemeToggle from "@/component/themeToggle";

// Creating and exporting header component as default
export default function Header():ReactNode {
    // Returning JSX
    return (
        <motion.header
            variants={{
                'showing' : {y: 0, opacity: 100},
                'hidden' : {y: -50, opacity: 0}
            }}
            initial={'hidden'}
            animate={'showing'}
            transition={{delay: 1}}
            className={'dark:bg-white/20 bg-black/20 backdrop-blur lg:fixed lg:top-0 lg:left-0 w-full'}
        >
            <Container size={'lg'} className={'flex justify-between items-center'}>
                <Link href={'/'}>
                    <Image width={40} height={40} alt={'@tasha-dev'} src={Logo.src} className={'aspect-square rounded-[10px]'} />
                </Link>
                <ThemeToggle />
            </Container>
        </motion.header>
    );
}