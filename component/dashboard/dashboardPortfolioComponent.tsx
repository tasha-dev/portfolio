// Codes By Mahdi Tasha
// Forcing nextJS To Render This Component As Client Side Component
'use client';

// Importing Part
import {ReactNode, useState} from "react";
import {motion} from 'framer-motion';
import {SwiperSlide} from "swiper/react";

// Defining Type Of Props
interface propsType {
    img: string;
    title: string;
    link: string;
}

// Creating And Exporting Dashboard Portfolio Component As Default
export default function DashboardPortfolioComponent({img, title, link}:propsType):ReactNode {
    // Defining States Of Component
    const [isImageLoaded, setImageLoaded] = useState(false);

    // Returning JSX
    return (
        <div className={'relative overflow-hidden h-full w-full'}>
            <a tabIndex={-1} target={'_blank'} href={link} className={'relative overflow-hidden h-full w-full block'}>
                <motion.div
                    variants={{
                        hidden: {opacity: 0, y: '-100%'},
                        visible: {opacity: 100, y: '0'}
                    }}
                    transition={{duration: .5, delay: .5}}
                    initial={'visible'}
                    animate={isImageLoaded ? 'visible' : 'hidden'}
                    className={'w-full h-full object-cover absolute top-0 left-0'}
                >
                    <img onLoad={() => setImageLoaded(true)} src={img} alt={title} className={'w-full h-full object-cover absolute top-0 left-0'} />
                </motion.div>
            </a>
            <motion.div
                variants={{
                    hidden: {opacity: 0, y: '100%'},
                    visible: {opacity: 100, y: '0'}
                }}
                transition={{duration: .5}}
                initial={(isImageLoaded) ? 'hidden' : 'visible'}
                animate={(isImageLoaded) ? 'hidden' : 'visible'}
                className={'small-lines-on-door absolute w-full h-full bg-red-600 top-0 left-0 flex items-center justify-center overflow-hidden'}
            >
                <span className={'text-[32px] font-bold text-white'}>w8</span>
            </motion.div>
        </div>
    );
}