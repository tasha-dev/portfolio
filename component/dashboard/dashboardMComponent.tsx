// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from 'react';
import OpenableDashboardComponent from "@/component/dashboard/openableDashboardComponent";

// Creating Amd Exporting Dashboard M Component As Default
export default function DashboardMComponent():ReactNode {
    // Returning JSX
    return (
        <OpenableDashboardComponent
            wholeClassName={'overflow-hidden'}
            className={'h-full flex flex-col sm:justify-between justify-center items-center w-full'}
        >
            <div className={'flex justify-between items-center gap-[20px] w-full'}>
                <div className={'w-[10px] h-[10px] bg-darker-theme rounded-full'} />
                <div className={'w-[10px] h-[10px] bg-darker-theme rounded-full'} />
            </div>
            <span className={'text-white font-bold text-[32px]'}>M</span>
            <div className={'flex justify-between items-center gap-[20px] w-full'}>
                <div className={'w-[10px] h-[10px] bg-darker-theme rounded-full'} />
                <div className={'w-[10px] h-[10px] bg-darker-theme rounded-full'} />
            </div>
        </OpenableDashboardComponent>
    );
}
