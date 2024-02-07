// Codes By Mahdi tasha
// Importing Part
import {MouseEventHandler, ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";
import {motion} from 'framer-motion';

// Defining Type Of Props
interface propsType {
    isOpened: boolean;
    children: ReactNode;
    title: string;
    link: string;
    closeFunction: MouseEventHandler;
    icon: string;
}

// Creating And Exporting Dashboard Inner Side Projects Component As Default
export default function DashboardInnerSideProjectComponent({isOpened, title, closeFunction, link, children, icon}:propsType):ReactNode {
    // Returning JSX
    return (
        <motion.div
            variants={{
                hidden: {opacity: 0},
                visible: {opacity: 1}
            }}
            initial={'visible'}
            transition={{duration: .5}}
            animate={(isOpened) ? 'visible' : 'hidden'}
            className={`absolute top-0 left-0 w-full h-full bg-black/60 z-[20] rounded-[20px] flex ${(isOpened) ? 'pointer-events-auto' : 'pointer-events-none'}`}
        >
            <button tabIndex={(isOpened) ? 0 : -1} onClick={closeFunction} className={'absolute top-[0] right-[20px] -translate-y-[50%] w-[50px] h-[50px] bg-red-600 text-red-900 flex justify-center items-center rounded-full transition duration-300 active:shadow-[0_inset_-0.5em_0] active:shadow-red-900'}>
                <IconComponent size={20} name={'x'} />
            </button>
            <div className={'h-full w-full flex justify-center items-center py-[50px] p-[20px]'}>
                <div className={'p-[20px] bg-theme rounded-[20px] shadow-lg w-full'}>
                    <div className={'bg-darker-theme flex gap-[10px] items-center p-[10px] rounded-[10px] mb-[20px]'}>
                        <div className={'w-[50px] h-[50px] rounded-[10px] flex justify-center items-center bg-theme text-white'}><IconComponent size={20} name={icon} /></div>
                        <span className={'text-white text-[15px] font-bold uppercase tracking-wide truncate'}>{title}</span>
                    </div>
                    <p className={'text-white/80 mb-[20px] text-[16px] font-light'}>{children}</p>
                    <a tabIndex={(isOpened) ? 0 : -1} href={link} className={'block'}>
                        <button className={'primary-btn'} tabIndex={-1}>GO !</button>
                    </a>
                </div>
            </div>
        </motion.div>
    );
}