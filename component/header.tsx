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

// Creating and exporting header component as default
export default function Header():ReactNode {
    // Returning JSX
    return (
        <header className={'backdrop-blur-2xl dark:bg-white/20 bg-black/20 fixed top-0 left-0 w-full z-50'}>
            <Container className={'flex items-center lg:justify-between justify-center relative'}>
                <PlusSvgDivider />
                <Logo mq/>
                <div className={'lg:flex hidden items-center justify-center gap-5'}>
                    <Link className={'link-text'} href={'/'}>Home</Link>
                    <Link className={'link-text'} href={'/blog'}>Blog</Link>
                    <Link className={'link-text'} href={'/contact'}>Contact</Link>
                    <ThemeToggle/>
                </div>
            </Container>
        </header>
    );
}