// Codes byu mahdi tasha
// Importing part
import {ReactNode} from "react";
import PlusSvgDivider from "@/component/ui/plusSvgDivider";
import Container from "@/component/ui/container";
import Link from "next/link";
import {Button} from "@/component/ui/button";

// Creating and exporting footer component as default
export default function Footer():ReactNode {
    // Returning JSX
    return (
        <footer className={'dark:bg-white/20 bg-black/20 border-t dark:border-t-white/20 border-t-black/20 backdrop-blur-2xl'}>
            <Container className={'relative'}>
                <PlusSvgDivider position={'top'}/>
                <div className={'flex gap-5 flex-col mb-5 mt-10'}>
                    <div className={'flex items-center flex-wrap justify-start gap-3'}>
                        <h3 className="heading-3">Mahdi Tasha</h3>
                        <Link href={'https://github.com/tasha-dev'} className={'link-text'}>Github</Link>
                        <Link href={'https://linkedin.com/in/mahditasha'} className={'link-text'}>Linkedin</Link>
                    </div>
                    <div className={'flex items-center flex-wrap justify-start gap-3'}>
                        <h3 className="heading-3">Contact</h3>
                        <Link href={'mailto:imwhdiiii@gmail.com'} className={'link-text'}>imwhdiiii@gmail.com</Link>
                        <span className={'small'}>Tehran, Iran</span>
                    </div>
                    <div className={'flex items-center flex-wrap justify-start gap-3'}>
                        <h3 className="heading-3">Quick Links</h3>
                        <Link href={'/'} className={'link-text'}>Home</Link>
                        <Link href={'/blog'} className={'link-text'}>Blog</Link>
                    </div>
                </div>
                <div className={'my-5 w-full h-1 dark:bg-white bg-black'}/>
                <div className={'p-5 rounded-xl dark:bg-white/20 bg-black/20 backdrop-blur-2xl mb-[50px]'}>
                    <h1>Let’s Build Something Amazing Together!</h1>
                    <p className={'p mb-8'}>Are you looking for a dedicated front-end developer with expertise in React,
                        Next.js, and TailwindCSS? Whether you need help with a new project, want to collaborate on a
                        team, or need improvements on your current website, I’m here to bring your ideas to life. Let’s
                        connect and create something outstanding! Feel free to reach out to me at [your email address]
                        or send me a message through the contact form below. I’m excited to hear about your project!</p>
                    <Link href={'/contact'}><Button>Let’s work together !</Button></Link>
                </div>
                <div className={'flex items-center justify-between gap-5'}>
                    <p className="small">
                        © {new Date().getFullYear()} Mahdi Tasha. All rights reserved.
                    </p>
                    <span className={'small'}>Built with Next.js and TailwindCSS</span>
                </div>
            </Container>
        </footer>
    );
}