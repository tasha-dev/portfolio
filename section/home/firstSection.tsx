// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Container from "@/component/ui/container";

// Creating and exporting first section of home page as default
export default function FirstSection():ReactNode {
    // Returning JSX
    return (
        <section className={'bg-[url(../image/grid-pattern.png)] bg-[#000319] min-h-screen flex items-center justify-center'}>
            <Container>
                <span className={'lg:text-[16px] text-[12px] font-normal tracking-wide block text-center uppercase text-lavenderGray lg:mb-[32px] mb-[25px]'}>Dynamic Web Magic with Next.js</span>
                <h1 className={'font-bold text-center lg:text-[72px] text-[48px] lg:tracking-[-3.6px] tracking-[-1.6px] leading-[100%] text-white lg:mb-[42px] mb-[20px]'}>
                    Transforming Concepts into <br/>
                    Seamless <span className={'text-purple-500'}>User Experiences</span>
                </h1>
                <p className={'lg:text-[24px] text-[16px] text-lavenderGray font-normal text-center'}>Hi! I’m Mahdi, a Next.js Developer based in Iran.</p>
            </Container>
        </section>
    );
}