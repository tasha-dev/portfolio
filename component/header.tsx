// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
'use client';

// Importing part
import {ReactNode} from "react";
import Logo from "@/component/ui/logo";
import Container from "@/component/ui/container";
import ThemeToggle from "@/component/ui/themeToggle";
import Link from "next/link";
import PlusSvgDivider from "@/component/ui/plusSvgDivider";
import {motion} from 'framer-motion';
import {Button} from "@/component/ui/button";
import {Menu} from "lucide-react";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/component/ui/drawer";

// Creating and exporting header component as default
export default function Header():ReactNode {
    // Returning JSX
    return (
        <header className={'backdrop-blur-2xl dark:bg-white/20 bg-black/20 fixed top-0 left-0 w-full z-50'}>
            <Container className={'flex items-center justify-between relative'}>
                <PlusSvgDivider/>
                <Logo/>
                <motion.div
                    className={'lg:flex hidden items-center justify-center gap-5'}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.5, delay: 3}}
                >
                    <Link className={'link-text'} href={'/'}>Home</Link>
                    <Link className={'link-text'} href={'/blog'}>Blog</Link>
                    <Link className={'link-text'} href={'/contact'}>Contact</Link>
                    <ThemeToggle/>
                </motion.div>
                <motion.div
                    className={'lg:hidden block'}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.5, delay: 3}}
                >
                    <Drawer>
                        <DrawerTrigger asChild>
                            <Button size={'icon'}>
                                <Menu className={'w-4 h-4'} />
                            </Button>
                        </DrawerTrigger>
                        <DrawerContent>
                            <DrawerHeader>
                                <DrawerTitle>Menu</DrawerTitle>
                                <DrawerDescription>Navigate through my portfolio using the links below. You can also
                                    switch between light and dark mode to personalize your
                                    experience!</DrawerDescription>
                            </DrawerHeader>
                            <div className={'px-4 pt-2 space-y-3 h-[30dvh] overflow-auto'}>
                                <h6>Links :</h6>
                                <ul className={'flex flex-col gap-2 ml-5'}>
                                    <li><Link className={'link-text'} href={'/'}>Home</Link></li>
                                    <li><Link className={'link-text'} href={'/blog'}>Blog</Link></li>
                                    <li><Link className={'link-text'} href={'/contact'}>Contact</Link></li>
                                </ul>
                            </div>
                            <DrawerFooter>
                                <ThemeToggle hasText/>
                                <DrawerClose asChild>
                                    <Button variant="outline">Close</Button>
                                </DrawerClose>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </motion.div>
            </Container>
        </header>
    );
}