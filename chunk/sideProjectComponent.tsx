// Codes By Mahdi Tasha
// Importing Part
import {MouseEventHandler, ReactNode} from "react";
import ButtonComponent from "@/chunk/buttonComponent";

// Defining Type Of Props
interface propsType {
    icon: string;
    onClick: MouseEventHandler;
}

// Creating And Exporting Side Project Component As Default
export default function SideProjectComponent({icon, onClick}:propsType):ReactNode {
    // Returning JSX
    return (
        <div className={'bg-darker-theme/60 p-[20px] flex flex-col justify-between rounded-[10px]'}>
            <div className={'flex items-center justify-between gap-[10px] mb-[10px]'}>
                <div className={'w-[10px] h-[10px] bg-theme rounded-full'} />
                <div className={'w-[10px] h-[10px] bg-theme rounded-full'} />
            </div>
            <ButtonComponent
                iconName={icon}
                hasBorder={false}
                bgColor={'bg-theme'}
                iconColor={'text-white/80'}
                shadowColor={'shadow-darker-theme active:shadow-darker-theme'}
                className={'mx-auto'}
                onClick={onClick}
            />
            <div className={'flex items-center justify-between gap-[10px] mt-[10px]'}>
                <div className={'w-[10px] h-[10px] bg-theme rounded-full'} />
                <div className={'w-[10px] h-[10px] bg-theme rounded-full'} />
            </div>
        </div>
    );
}