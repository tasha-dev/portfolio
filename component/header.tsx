// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Logo from "@/component/ui/logo";
import Container from "@/component/ui/container";

// Creating and exporting header component as default
export default function Header():ReactNode {
    // Returning JSX
    return (
        <header className={'bg-red-600 backdrop-blur-2xl dark:bg-white/20 bg-black/20'}>
            <Container>
                <Logo />
            </Container>
        </header>
    );
}