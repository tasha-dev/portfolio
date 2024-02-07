// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from 'react';
import OpenableDashboardComponent from "@/component/dashboard/openableDashboardComponent";

// Creating And Exporting Years Of Experience Component As Default
export default function DashboardYearsComponent():ReactNode {
    // Returning JSX
    return (
        <OpenableDashboardComponent
            wholeClassName={'overflow'}
            className={'h-full flex flex-col sm:justify-between justify-center items-center w-full'}
        >
            <div className={'flex justify-between items-center gap-[20px] w-full'}>
                <div className={'w-[10px] h-[10px] bg-darker-theme rounded-full'} />
                <div className={'w-[10px] h-[10px] bg-darker-theme rounded-full'} />
            </div>
            <div>
                <div className={'mb-[20px] w-[50px] h-[50px] mx-auto bg-theme-orange flex items-center justify-center rounded-full shadow-[0_0.5em_0] shadow-theme-orange-dark'}>
                    <span className={'text-theme font-bold text-[25px]'}>{new Date().getFullYear() - new Date('2021/3/21').getFullYear()}</span>
                </div>
                <span className={'text-gray-500 font-bold text-[14px] text-center block'}>YEARS <br/> OF EXPERIENCE</span>
            </div>
            <div className={'flex justify-between items-center gap-[20px] w-full'}>
                <div className={'w-[10px] h-[10px] bg-darker-theme rounded-full'} />
                <div className={'w-[10px] h-[10px] bg-darker-theme rounded-full'} />
            </div>
        </OpenableDashboardComponent>
    );
}