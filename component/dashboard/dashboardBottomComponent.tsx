// Codes By Mahdi Tasha
// Forcing NextJs To Render This Component As Client Side Component
'use client';

// Importing Part
import {ReactNode, useState} from "react";
import ModalComponent from "@/component/modalComponent";

// Creating And Exporting Bottom Component Of Dashboard Side As Default
export default function DashboardBottomComponent():ReactNode {
    // Defining States Of Component
    const [isCreditModalOpened, setCreditModalOpened] = useState(false);

    // Returning JSX
    return (
        <div className={'flex justify-between lg:flex-row flex-col gap-[20px]'}>
            <ModalComponent isOpened={isCreditModalOpened} closeFunction={() => setCreditModalOpened(false)} showsMonitorForHiring={false} title={'credits'} icon={'info'}>
                <div className={'bg-theme-orange-dark p-[10px] rounded-[10px]'}>
                    <p className={'text-[18px] font-light text-white'}>
                        Designed on Figma by Pierre-Louis Labonne & developed on Mahdi Tasha. <br/>
                        This Is Clone Of His Dashboard.
                    </p>
                </div>
            </ModalComponent>
            <div className={'w-full lg:h-auto h-[20px] lg:mb-0 mb-[10px] bg-red-600 small-lines-on-door'} />
            <div className={'flex lg:flex-row flex-col justify-center lg:gap-[20px] gap-0 items-center'}>
                <span className={'whitespace-nowrap text-white/80 text-[12px] font-bold tracking-wide'}>Mahdi Tasha 2023</span>
                <span className={'whitespace-nowrap text-white/80 text-[12px] font-bold tracking-wide'}>-</span>
                <span className={'whitespace-nowrap text-white/80 text-[12px] font-bold tracking-wide'}>ALL RIGHTS RESERVED</span>
                <span className={'whitespace-nowrap text-white/80 text-[12px] font-bold tracking-wide'}>-</span>
                <button onClick={() => setCreditModalOpened(true)} className={'whitespace-nowrap text-white/80 text-[12px] font-bold tracking-wide'}>Credits</button>
            </div>
        </div>
    );
}