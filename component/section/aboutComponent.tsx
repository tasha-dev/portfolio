// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Image from "next/image";
import MahdiImage from '@/public/img/img-mahdi-tasha.jpg';
import TitleComponent from "@/chunk/titleComponent";
import Link from "next/link";
import ParagraphComponent from "@/chunk/paragraphComponent";

// Creating and exporting about component as defualt
export default function AboutComponent():ReactNode {
    // Returning JSX
    return (
        <section>
            <header className={'flex gap-[20px] flex-wrap items-center justify-start lg:mb-[50px] mb-[20px]'}>
                <Image alt={'Image of mahdi tasha'} src={MahdiImage.src} width={100} height={100} className={'rounded-full aspect-square'} />
                <div>
                    <TitleComponent noMargin tier={1}>Mahdi Tasha</TitleComponent>
                    <TitleComponent tier={2}>Passionate Front End Developer</TitleComponent>
                    <Link href={'https://github.com/tasha-dev/'}>
                        <TitleComponent noMargin tier={3}>Github</TitleComponent>
                    </Link>
                </div>
            </header>
            <main>
                <TitleComponent tier={2}>About</TitleComponent>
                <ParagraphComponent noMargin>Hey there! 👋 I'm Mahdi, a passionate front-end developer from Tehran, rocking the coding scene since 2020. 🚀 Armed with a problem-solving superpower and an eye for design, I've earned my stripes as a top-notch developer. 🌐 Always hungry for knowledge and team collaborations🌟Fueled by my passion for coding, I channel my skills towards creating a better world through innovative solutions that transcend digital boundaries and positively impact lives. 🌍💻</ParagraphComponent>
            </main>
        </section>
    );
}