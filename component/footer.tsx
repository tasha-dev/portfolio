// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Container from "@/component/ui/container";
import SocialIcon from "@/component/ui/socialIcon";

// Creating and exporting footer component as default
export default function Footer():ReactNode {
    // Returning JSX
    return (
        <footer className={'bg-richBlack py-[20px]'}>
            <Container className={'flex lg:flex-row flex-col justify-between items-center gap-[20px]'}>
                <span className={'text-[14px] font-normal text-white'}>Copyright ©{new Date().getFullYear()} Mahdi Tasha</span>
                <div className={'flex items-center justify-between gap-[20px]'}>
                    <SocialIcon icon={'ig'} link={'https://www.instagram.com/1tashadev/'} />
                    <SocialIcon icon={'ld'} link={'https://www.linkedin.com/in/mahditasha/'} />
                    <SocialIcon icon={'gh'} link={'https://github.com/tasha-dev'} />
                </div>
            </Container>
        </footer>
    );
}