// Codes byu mahdi tasha
// Forcing next.js to render this component as client side component
'use client';

// Importing part
import {ReactNode, useEffect, useRef} from "react";
import PlusSvgDivider from "@/component/ui/plusSvgDivider";
import Container from "@/component/ui/container";
import Link from "next/link";
import {Button} from "@/component/ui/button";
import HandwritingImage from '@/image/handWriting.svg';
import {motion, useInView} from 'framer-motion';

// Creating and exporting footer component as default
export default function Footer(): ReactNode {
    // Defining a reference to footer element
    const ref = useRef(null);

    // Checking if the element is viewable
    const isInView = useInView(ref, {once: true});

    useEffect(() => {
        console.log(isInView)
    }, [isInView])

    // Returning JSX
    return (
        <footer
            className={'dark:bg-white/20 bg-black/20 border-t dark:border-t-white/20 border-t-black/20 backdrop-blur-2xl'}
            ref={ref}
        >
            <Container className={'relative'}>
                <PlusSvgDivider position={'top'}/>
                <motion.div
                    initial={{opacity: 0, pointerEvents: 'none', visibility: 'hidden'}}
                    animate={isInView ? {opacity: 1, pointerEvents: 'visible', visibility: 'visible'} : {}}
                    transition={{duration: 1, delay: 3}}
                >
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
                        <p className={'p mb-8'}>Are you looking for a dedicated front-end developer with expertise in
                            React,
                            Next.js, and TailwindCSS? Whether you need help with a new project, want to collaborate on a
                            team, or need improvements on your current website, I’m here to bring your ideas to life.
                            Let’s
                            connect and create something outstanding! Feel free to reach out to me at [your email
                            address]
                            or send me a message through the contact form below. I’m excited to hear about your
                            project!</p>
                        <Link href={'/contact'}><Button>Let’s work together !</Button></Link>
                    </div>
                    <div className={'flex items-center justify-between gap-5'}>
                        <p className="small">
                            © {new Date().getFullYear()} Mahdi Tasha. All rights reserved.
                        </p>
                        <span className={'small'}>Built with Next.js and TailwindCSS</span>
                    </div>
                </motion.div>
                <motion.img
                    initial={{opacity: 1, pointerEvents: 'visible', visibility: 'visible'}}
                    animate={isInView ? {opacity: 0, pointerEvents: 'none', visibility: 'hidden'} : {}}
                    transition={{duration: 1, delay: 3}}
                    width={500}
                    height={500}
                    alt={'Handwriting of mahdi tasha'}
                    src={HandwritingImage.src}
                    className={'absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'}
                />
            </Container>
        </footer>
    );
}