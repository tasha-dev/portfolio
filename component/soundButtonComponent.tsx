// Codes By Mahdi Tasha
// Forcing NextJS To Render This Component As Client Side Component
'use client';

// Importing Part
import {ReactNode} from "react";
import {useState} from "react";
import IconComponent from "@/chunk/iconComponent";

// Creating And Exporting Sound Button Component As Default
export default function SoundButtonComponent():ReactNode {
    // Defining State Of Component
    const [isMuted, setMuted] = useState(false);

    // Returning JSX
    return (
        <button className={'fixed top-[20px] lg:right-[20px] right-[10px] w-[50px] h-[50px] z-[80] transition duration-500 bg-darker-theme hover:bg-theme overflow-hidden rounded-[10px]'}
                onClick={() => {
                    setMuted(prevState => !prevState);
                    document.body.setAttribute('data-muted', `${isMuted}`);
                }}
        >
            <div data-muted={isMuted} className={'flex flex-col gap-[20px] justify-center items-center data-[muted="true"]:translate-y-[-70px] transition-all duration-500'}>
                <span className={'text-gray-300 flex justify-center items-center h-[50px]'}><IconComponent name={'sound'} size={20} /></span>
                <span className={'text-red-500 flex justify-center items-center h-[50px]'}><IconComponent name={'sound-off'} size={20} /></span>
            </div>
        </button>
    );
}
