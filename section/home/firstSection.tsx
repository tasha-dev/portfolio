// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Container from "@/component/ui/container";
import Button from "@/component/ui/button";
import Image from 'next/image';
import lightingImage from '@/image/lighting.png';

// Creating and exporting first section of home page as default
export default function FirstSection():ReactNode {
    // Returning JSX
    return (
        <section className={'bg-[url(../image/grid-pattern.png)] bg-cover relative bg-richBlack z-10 lg:min-h-screen flex items-center justify-center overflow-hidden'}>
            <Image src={lightingImage.src} alt={'Lighting image'} width={1041} height={1080} className={'w-full h-full z-20 absolute lg:top-0 top-auto lg:bottom-auto bottom-[20%] lg:scale-100 scale-150 lg:rotate-0 rotate-[20deg] left-0 pointer-events-none'} />
            <Container className={'z-20 lg:pt-[150px] pt-[150px]'}>
                <span className={'lg:text-[16px] text-[12px] font-normal tracking-wide block text-center uppercase text-lavenderGray lg:mb-[32px] mb-[25px]'}>Dynamic Web Magic with Next.js</span>
                <h1 className={'font-bold text-center lg:text-[72px] text-[48px] lg:tracking-[-3.6px] tracking-[-1.6px] leading-[100%] text-white lg:mb-[42px] mb-[20px]'}>
                    Transforming Concepts into <br/>
                    Seamless <span className={'text-purple-500'}>User Experiences</span>
                </h1>
                <p className={'lg:text-[24px] text-[16px] text-lavenderGray font-normal text-center lg:mb-[20px] mb-[10px]'}>Hi! I’m Mahdi, a Next.js Developer based in Iran.</p>
                <div className={'lg:flex hidden items-center justify-center'}><Button hasIcon link={'#projects'} className={'lg:w-auto w-full'}>See my work</Button></div>
                <div className={'lg:hidden block'}><Button hasIcon link={'#projects'} className={'lg:w-auto w-full'}>See my work</Button></div>
            </Container>
        </section>
    );
}