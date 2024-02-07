// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from 'react';
import ButtonComponent from "@/chunk/buttonComponent";
import {useRouter} from 'next/navigation';

// Defining Type Of Props
interface propsType {
    icon: 'instagram' | 'github' | 'ponisha';
}

// Creating And Exporting Social Component As Default
export default function SocialComponent({icon}:propsType):ReactNode {
    // Defining Navigate Hook To Use Later
    const navigateHook = useRouter();

    // Returning JSX
    return (
        <div className={'bg-darker-theme/60 p-[20px] flex flex-col justify-between rounded-[10px]'}>
            <div className={'flex items-center justify-between gap-[10px] mb-[10px]'}>
                <div className={'w-[10px] h-[10px] bg-theme rounded-full'} />
                <div className={'w-[10px] h-[10px] bg-theme rounded-full'} />
            </div>
                <ButtonComponent
                    iconName={icon}
                    onClick={() => {
                        (icon === 'instagram')
                            ? navigateHook.push('https://www.instagram.com/mahditasha_/')
                            : (icon === 'github')
                                ? navigateHook.push('https://github.com/MohamadMahdi-Tasha')
                                : navigateHook.push('https://www.ponisha.ir/profile/mahditasha')
                    }}
                    hasBorder={false}
                    bgColor={'bg-theme'}
                    iconColor={'text-white/80'}
                    shadowColor={'shadow-darker-theme active:shadow-darker-theme'}
                    className={'mx-auto'}
                />
            <div className={'flex items-center justify-between gap-[10px] mt-[10px]'}>
                <div className={'w-[10px] h-[10px] bg-theme rounded-full'} />
                <div className={'w-[10px] h-[10px] bg-theme rounded-full'} />
            </div>
        </div>
    );
}