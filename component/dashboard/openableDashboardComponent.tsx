// Codes By Mahdi Tasha
// Forcing NextJS To Render This Component As Client Side Component
'use client';

// Importing Part
import {ReactNode, useState} from "react";
import ButtonComponent from "@/chunk/buttonComponent";
import IconComponent from "@/chunk/iconComponent";
import {motion} from 'framer-motion';

// Defining Type Of Props
interface propsType {
    children: ReactNode;
    className?: string;
    wholeClassName?: string;
}

// Creating And Exporting Openable Dashboard Component Asd Default
export default function OpenableDashboardComponent({children, className, wholeClassName}:propsType):ReactNode {
    // Defining States Of Component
    const [isOpened, setOpened] = useState(false);

    // Returning JSX
    return (
        <div
            onClick={() => {if (!isOpened) {setOpened(true);}}}
            className={`relative bg-theme rounded-[20px] group hover:border-white transition duration-500 border border-transparent ${(wholeClassName !== null) ? wholeClassName : false} ${(!isOpened) ? 'cursor-pointer overflow-hidden' : 'overflow-visible'}`}
        >
            <div className={`absolute top-0 left-0 w-full h-full z-[20] ${(isOpened) ? 'pointer-events-none' : 'pointer-events-auto'}`}>
                <div>
                    <motion.div
                        variants={{
                            visible: {opacity: 1, x: 0},
                            hidden: {opacity: 0, x: '-50%'}
                        }}
                        transition={{duration: .5,}}
                        initial={'visible'}
                        animate={(isOpened) ? 'hidden' : 'visible'}
                        className={'bg-theme absolute left-0 top-0 w-[50%] h-full z-[21] p-[15px]'}
                    >
                        <div className={'flex justify-between items-start flex-col p-[20px] small-lines-on-door w-full h-full'}>
                            <div className={'bg-darker-theme w-[10px] h-[10px] rounded-full aspect-square'} />
                            <div className={'bg-darker-theme w-[10px] h-[10px] rounded-full aspect-square'} />
                        </div>
                    </motion.div>
                    <motion.div
                        variants={{
                            visible: {opacity: 1},
                            hidden: {opacity: 0}
                        }}
                        transition={{duration: .5,}}
                        initial={'visible'}
                        animate={(isOpened) ? 'hidden' : 'visible'}
                    >
                        <ButtonComponent
                            onClick={() => false}
                            tabIndex={(isOpened) ? -1 : 0}
                            className={'absolute top-[calc(50%-30px)] left-[50%] translate-x-[-50%] z-[50] border border-darker-theme'}
                            iconName={'lock'}
                            shadowColor={'shadow-darker-theme active:shadow-darker-theme'}
                            bgColor={'bg-theme'}
                            iconColor={'text-theme-orange'}
                            hasBorder={false}
                        />
                    </motion.div>
                    <motion.div
                        variants={{
                            visible: {opacity: 1, x: '0'},
                            hidden: {opacity: 0, x: '50%'}
                        }}
                        transition={{duration: .5,}}
                        initial={'visible'}
                        animate={(isOpened) ? 'hidden' : 'visible'}
                        className={'bg-theme absolute right-0 top-0 w-[50%] h-full z-[21] p-[15px]'}
                    >
                        <div className={'flex justify-between items-end flex-col p-[20px] small-lines-on-door w-full h-full'}>
                            <div className={'bg-darker-theme w-[10px] h-[10px] rounded-full aspect-square'} />
                            <div className={'bg-darker-theme w-[10px] h-[10px] rounded-full aspect-square'} />
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    variants={{
                        visible: {opacity: 1},
                        hidden: {opacity: 0}
                    }}
                    transition={{duration: .5,}}
                    initial={'visible'}
                    animate={(isOpened) ? 'hidden' : 'visible'}
                >
                    <div className={'w-[20px] group-hover:w-full ml-[15px] absolute top-[15px] right-[15px] overflow-hidden bg-theme h-[30px] z-[25] text-gray-500 flex items-center justify-end gap-[10px] transition-all duration-500'}>
                        <span className={'whitespace-nowrap truncate shrink-0 text-[14px] tracking-wide font-bold block w-full text-end'}>CLICK TO OPEN</span>
                        <span className={'whitespace-nowrap shrink-0'}><IconComponent size={20} name={'info'} /></span>
                    </div>
                </motion.div>
            </div>
            <motion.div
                variants={{
                    visible: {opacity: 1, y: 0},
                    hidden: {opacity: 0, y: 10}
                }}
                transition={{duration: 1, delay: .5}}
                initial={'hidden'}
                animate={(isOpened) ? 'visible' : 'hidden'}
                className={(className !== null) ? `${className} p-[20px] ${(isOpened) ? 'lg:visible' : 'lg:hidden'}` : `p-[20px] ${(isOpened) ? 'lg:visible' : 'lg:hidden'}`}
            >
                {children}
            </motion.div>
        </div>
    );
}