// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
'use client';

// Importing part
import {ReactNode, useEffect, useState} from "react";
import useScrollPercentage from "@/hook/useScrollPercentage";
import Confetti from 'react-dom-confetti';

// Creating and exporting scroll percentage component as default
export default function ScrollPercentage(): ReactNode {
    // Defining states of component
    const [confettiCount, setConfettiCount] = useState(0);

    // Defining scrollPercentage
    const scrollPercentageValue = useScrollPercentage();

    // Using useEffect to add to confetti count state when user completes page once
    useEffect(() => {
        if (confettiCount < 1) {
            setConfettiCount(prevState => prevState + 1)
        }
    }, [])

    // Returning JSx
    return (
        <div>
            <div
                data-showing={(scrollPercentageValue > 0)}
                className={'lg:block hidden dark:bg-zinc-300 bg-zinc-600 overflow-hidden fixed z-[120] w-[20px] rounded-xl h-[300px] -translate-y-[50%] top-[50%] transition-all duration-1000 data-[showing="false"]:right-[-50%] data-[showing="true"]:right-[20px]'}
            >
                <div
                    className={'bg-violet-600 w-full rounded-xl'}
                    style={{height: `${scrollPercentageValue}%`}}
                />
            </div>
            <div
                data-showing={(scrollPercentageValue > 0)}
                className={'lg:block hidden fixed z-[150] top-[60%] left-[97%] w-[200px] h-[200px] pointer-events-none transition-all duration-1000 data-[showing="false"]:right-[-50%] data-[showing="true"]:right-[20px]'}
            >
                <Confetti
                    active={(scrollPercentageValue === 100)}
                    config={{
                        angle: 90,
                        spread: 360,
                        startVelocity: 40,
                        elementCount: 150,
                        dragFriction: 0.12,
                        duration: 3000,
                        stagger: 3,
                        width: '10px',
                        height: '10px',
                        colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
                    }}
                />
            </div>
        </div>
    )
        ;
}