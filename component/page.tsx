// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode} from "react";
import {motion} from 'framer-motion';
import Container from "@/component/ui/container";
import {pageType} from "@/types/uiComponent";
import Footer from "@/component/footer";

// Creating and exporting page component as default
export default function Page({children, className}:pageType):ReactNode {
    // Returning JSX
    return (
        <motion.div
            variants={{
                'showing' : {y: 0, opacity: 100},
                'hidden' : {y: 50, opacity: 0}
            }}
            initial={'hidden'}
            animate={'showing'}
            className={className}
        >
            <Container size={'sm'} className={'lg:mt-[100px] mt-0'}>
                {children}
                <Footer />
            </Container>
        </motion.div>
    );
}