// Codes By Mahdi Tasha
// Forcing NextJS To Render This Component As Client Side Component
'use client';

// Importing Part
import {MouseEventHandler, ReactNode, useEffect} from "react";
import ImageOfCabel from "@/public/img/device/img-cable.svg";
import IconComponent from "@/chunk/iconComponent";
import MonitorComponent from "@/component/monitorComponent";
import ButtonComponent from "@/chunk/buttonComponent";
import {motion} from "framer-motion";
import ScrewComponent from "@/chunk/screwComponent";
import ImageOfDots from "@/public/img/device/img-device-dots.png";

// Defining Type Of Props
interface propsType {
    isOpened: boolean;
    children: ReactNode;
    title: string;
    icon: string;
    closeFunction: MouseEventHandler;
    showsMonitorForHiring: boolean;
}

// CreatingAnd Exporting Modal Component As Default
export default function ModalComponent({isOpened, children, title, icon, closeFunction, showsMonitorForHiring}:propsType):ReactNode {
    // Using useEffect Hook To Remove Scroll Behaviour Of Body When Modal Is Opened
    useEffect(() => {
        if (isOpened) {
            document.body.classList.remove('overflow-hidden')
            document.body.classList.add('overflow-x-hidden')
            document.body.classList.add('overflow-y-hidden')
        } else {
            document.body.classList.remove('overflow-x-hidden')
            document.body.classList.remove('overflow-y-hidden')
            document.body.classList.add('overflow-hidden')
        }
    }, [isOpened])

    // Returning JSX
    return (
        <div className={`fixed top-0 left-0 w-full h-full z-[100] ${(isOpened) ? 'pointer-events-auto' : 'pointer-events-none'}`}>
            <motion.div
                variants={{
                    hidden: {opacity: 0, pointerEvents: 'none'},
                    visible: {opacity: 1,pointerEvents: 'visible'}
                }}
                initial={'hidden'}
                transition={{duration: .4}}
                animate={(isOpened) ? 'visible' : 'hidden'}
                onClick={closeFunction}
                className={'fixed top-0 left-0 w-full h-full bg-black/50 z-[1]'}
            />
            <motion.div
                variants={{
                    hidden: {opacity: 0,y: -10},
                    visible: {opacity: 1,y: 0}
                }}
                initial={'hidden'}
                transition={{duration: .4}}
                animate={(isOpened) ? 'visible' : 'hidden'}
                className={'z-[2]'}
            >
                <div className={'relative h-[150px] lg:flex hidden items-center justify-center z-[2]'}>
                    <div className={'w-[5px] h-full bg-theme-orange-dark absolute left-[50%] translate-x-[-50%] z-[1]'} />
                    <img src={ImageOfCabel.src} alt="Cable Image" className={'w-[20px] z-[2]'} />
                    <div className={'bg-theme w-[75px] rounded-[50rem] absolute left-[50%] z-[3] translate-x-[-50%] top-full rotate-90 h-[20px]'} />
                </div>
                <div className={'bg-theme-orange lg:relative fixed shadow-lg lg:w-[700px] w-full mx-auto lg:rounded-[20px] mb-[30px] z-[100] lg:h-[400px] h-full overflow-auto'}>
                    <div className={'lg:grid flex overflow-x-auto overflow-y-hidden grid-cols-7 gap-[20px] p-[20px] border-b-4 border-b-theme-orange-dark'}>
                        <div className={`${(showsMonitorForHiring) ? 'lg:col-span-4' : 'lg:col-span-6'} shrink-0 flex justify-start items-center rounded-[10px] p-[10px] bg-theme gap-[10px]`}>
                            <div className={'aspect-square w-[50px] bg-darker-theme text-theme-orange rounded-[10px] flex justify-center items-center'}>
                                <IconComponent name={icon} size={20} />
                            </div>
                            <span className={'text-white uppercase tracking-wide truncate text-[16px] font-bold'}>{title}</span>
                        </div>
                        {
                            (showsMonitorForHiring)
                                ? (
                                    <MonitorComponent hasWhiteSide={false} noPadding className={'lg:col-span-2 shrink-0'} smallOuterPading>
                                        <div className={'overflow-hidden p-[5px] lg:w-auto w-[150px]'}>
                                            <h1 className={'text-white whitespace-nowrap text-[30px] font-bold hiring-animation'}>AVAILABLE FOR HIRING</h1>
                                        </div>
                                    </MonitorComponent>
                                ) : false
                        }
                        <div className={'bg-theme-orange-dark p-[10px] aspect-square rounded-full shrink-0 lg:w-auto lg:h-auto w-[80px] h-[80px]'}>
                            <button
                                onClick={closeFunction}
                                className={'flex justify-center items-center duration-400 transition-all w-full h-full hover:translate-y-0 hover:shadow-transparent active:translate-y-0 active:shadow-[0_inset_-0.5em_0] active:shadow-red-900 rounded-full bg-red-500 shadow-[0_0.5em_0] shadow-red-900 -translate-y-[6px]'}
                            >
                                <IconComponent size={20} name={'x'} />
                            </button>
                        </div>
                    </div>
                    <div className={'p-[20px]'}>
                        {children}
                        <div className={'flex items-center gap-[20px] justify-between mt-[20px]'}>
                            <span className={'text-white/50'}><ScrewComponent clickable={false} /></span>
                            <img className={'w-[50px]'} src={ImageOfDots.src} alt="Dots Image"/>
                            <span className={'text-white/50'}><ScrewComponent clickable={false} /></span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}