// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Image from "next/image";
import LogoImage from '@/public/img/img-logo.jpg';
import ContainerComponent from "@/chunk/containerComponent";
import ThemeTogglerComponent from "@/chunk/header/themeTogglerComponent";
import Link from "next/link";

// Creating and exporting header component as default
export default function HeaderComponent():ReactNode {
    // Returning JSX
    return (
        <header className={'dark:bg-light/20 bg-dark/20 backdrop-blur fixed top-0 left-0 w-full'}>
            <ContainerComponent type={'large'} className={'flex items-center justify-between gap-[20px]'}>
                <Link href={'/'}>
                    <Image alt={'Logo of mahdi tasha'} src={LogoImage.src} width={50} height={50} className={'aspect-square rounded-[10px]'} />
                </Link>
                <ThemeTogglerComponent />
            </ContainerComponent>
        </header>
    );
}