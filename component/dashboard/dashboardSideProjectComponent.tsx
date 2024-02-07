// Codes By mahdi Tasha
// Forcing NextJS To Render This Component Asd Client Side Component
'use client';

// Importing Part
import {ReactNode, useState} from 'react';
import OpenableDashboardComponent from "@/component/dashboard/openableDashboardComponent";
import IconComponent from "@/chunk/iconComponent";
import SideProjectComponent from "@/chunk/sideProjectComponent";
import ScrewComponent from "@/chunk/screwComponent";
import SoundImage from '@/public/img/dashboard/img-sound-dot.svg';
import DashboardInnerSideProjectComponent from "@/component/dashboard/dashboardInnerSideProjectComponent";
import {motion} from 'framer-motion';

// Creating And Exporting Dashboard Side Project Component As Default
export default function DashboardSideProjectComponent():ReactNode {
    // Defining States Of Component
    const [coffeeCatchUpInnerOpened, setCoffeeCatchUpInnerOpened] = useState(false);
    const [medictaionInnerOpened, setmedictaionInnerOpened] = useState(false);

    const [isScrew1Opened, setScrew1Opened] = useState(false);
    const [isScrew2Opened, setScrew2Opened] = useState(false);
    const [isScrew3Opened, setScrew3Opened] = useState(false);
    const [isScrew4Opened, setScrew4Opened] = useState(false);

    // Returning JSX
    return (
        <OpenableDashboardComponent wholeClassName={'lg:col-span-1 sm:col-span-2 col-span-1'} className={'grid grid-rows-[.5fr_1fr_4fr] h-full relative'}>
            <DashboardInnerSideProjectComponent title={'Coffee Catch Up'} icon={'coffee-catch-up'} isOpened={coffeeCatchUpInnerOpened} closeFunction={() => setCoffeeCatchUpInnerOpened(false)} link={'https://coffe-catch-up.vercel.app/'}>
                Coffee Catch Up is daily vlog of me about challenges, my routine, my projects and many more ...
            </DashboardInnerSideProjectComponent>
            <DashboardInnerSideProjectComponent title={'I Will Be Good'} icon={'i-will-be-good'} isOpened={medictaionInnerOpened} closeFunction={() => setmedictaionInnerOpened(false)} link={'https://i-will-be-good-web.vercel.app/'}>
                I Will Be Good is web app which its purpose is to make you overcome DP/DR with tracking medications and meditations which you have done in today and before
            </DashboardInnerSideProjectComponent>
            <div className={'flex items-center gap-[30px] bg-darker-theme rounded-[10px] p-[20px] mb-[20px]'}>
                <span className={'block text-theme-orange'}><IconComponent name={'coffee'} size={20} /></span>
                <span className={'block truncate text-white font-bold tracking-wide'}>SIDE-PROJECTS</span>
            </div>
            <div className={'grid grid-cols-2 gap-[20px] mb-[20px]'}>
                <SideProjectComponent onClick={() => setmedictaionInnerOpened(true)} icon={'i-will-be-good'} />
                <SideProjectComponent onClick={() => setCoffeeCatchUpInnerOpened(true)} icon={'coffee-catch-up'} />
            </div>
            <div className={'bg-darker-theme rounded-[20px] overflow-hidden relative'}>
                <div data-opened={(isScrew1Opened && isScrew2Opened && isScrew3Opened && isScrew4Opened)}
                     className={'absolute bg-darker-theme rounded-[20px] p-[20px] w-full h-full top-0 left-0 flex flex-col gap-[20px] justify-between items-center data-[opened="true"]:opacity-0 data-[opened="true"]:pointer-events-none data-[opened="true"]:translate-x-[10px] data-[opened="true"]:transform-y-[10px] data-[opened="true"]:pointer-events-none data-[opened="true"]:-rotate-45 transition-all duration-500'}
                >
                    <div className={'flex justify-between items-center w-full'}>
                        <ScrewComponent dataOpened={`${isScrew1Opened}`} className={'sideprojects-screw'} tabIndex={(isScrew1Opened) ? -1 : 0} clickable={true} onClick={() => setScrew1Opened(true)} />
                        <ScrewComponent dataOpened={`${isScrew2Opened}`} className={'sideprojects-screw'} tabIndex={(isScrew2Opened) ? -1 : 0} clickable={true} onClick={() => setScrew2Opened(true)} />
                    </div>
                    <img src={SoundImage.src} className={'mx-auto w-[60%] aspect-square'} alt="Sound Dots Image"/>
                    <div className={'flex justify-between items-center w-full'}>
                        <ScrewComponent dataOpened={`${isScrew3Opened}`} className={'sideprojects-screw'} tabIndex={(isScrew3Opened) ? -1 : 0} clickable={true} onClick={() => setScrew3Opened(true)} />
                        <ScrewComponent dataOpened={`${isScrew4Opened}`} className={'sideprojects-screw'} tabIndex={(isScrew4Opened) ? -1 : 0} clickable={true} onClick={() => setScrew4Opened(true)} />
                    </div>
                </div>
                <div className={'p-[20px] w-full h-full flex justify-center items-center'}>
                    <h6 className={'text-center text-white font-bold text-[28px]'}>Thanks For Visiting :)</h6>
                </div>
            </div>
        </OpenableDashboardComponent>
    );
}
