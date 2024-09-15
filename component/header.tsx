// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Logo from "@/component/ui/logo";
import Container from "@/component/ui/container";
import ThemeToggle from "@/component/ui/themeToggle";
import Link from "next/link";

// Creating and exporting header component as default
export default function Header():ReactNode {
    // Returning JSX
    return (
        <header className={'backdrop-blur-2xl dark:bg-white/20 bg-black/20'}>
            <Container className={'flex items-center justify-between'}>
                <Logo />
                <div className={'flex items-center justify-center gap-5'}>
                    <Link className={'link-text'} href={'/'}>Home</Link>
                    <Link className={'link-text'} href={'/blog'}>Blog</Link>
                    <Link className={'link-text'} href={'/contact'}>Contact</Link>
                    <ThemeToggle />
                </div>
            </Container>
        </header>
    );
}