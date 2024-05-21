// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
'use client';

// Importing part
import {ReactNode} from "react";
import HeaderItem from "@/component/ui/headerItem";

// Creating and exporting header component as default
export default function Header():ReactNode {
    // Returning JSX
    return (
        <div className={'fixed lg:top-[50px] top-[30px] flex items-center justify-center lg:px-0 px-[20px] w-full z-50'}>
            <header className={'overflow-hidden lg:w-auto w-full flex justify-center items-center lg:px-[50px] px-[20px] lg:py-[28px] py-[20px] rounded-[13px] border border-gunMetal bg-gradient-to-r from-richBlack to-chineseBlack'}>
                <ul className={'flex items-center justify-between w-auto gap-[32px]'}>
                    <HeaderItem href={'#about'}>About</HeaderItem>
                    <HeaderItem href={'#projects'}>Projects</HeaderItem>
                    <HeaderItem href={'#testimonials'}>Testimonials</HeaderItem>
                    <HeaderItem href={'#contact'}>Contact</HeaderItem>
                </ul>
            </header>
        </div>
    );
}