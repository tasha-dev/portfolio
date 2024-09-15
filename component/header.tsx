// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Logo from "@/component/ui/logo";
import Container from "@/component/ui/container";
import ThemeToggle from "@/component/ui/themeToggle";

// Creating and exporting header component as default
export default function Header():ReactNode {
    // Returning JSX
    return (
        <header className={'backdrop-blur-2xl dark:bg-white/20 bg-black/20'}>
            <Container className={'flex items-center justify-between'}>
                <Logo />
                <ThemeToggle />
            </Container>
        </header>
    );
}