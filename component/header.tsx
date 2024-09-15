// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Logo from "@/component/ui/logo";
import Container from "@/component/ui/container";
import ThemeToggle from "@/component/ui/themeToggle";
import Link from "next/link";
import {Plus} from "lucide-react";

// Creating and exporting header component as default
export default function Header():ReactNode {
    // Returning JSX
    return (
        <header className={'backdrop-blur-2xl dark:bg-white/20 bg-black/20'}>
            <Container className={'flex items-center lg:justify-between justify-center relative'}>
                <Plus className={'pointer-events-none absolute left-0 bottom-0 -translate-x-[50%] translate-y-[50%] block w-5 h-5 dark:text-white text-black'} />
                <Plus className={'pointer-events-none absolute right-0 bottom-0 translate-x-[50%] translate-y-[50%] block w-5 h-5 dark:text-white text-black'} />
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