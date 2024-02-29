// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import TitleComponent from "@/chunk/titleComponent";
import { differenceInYears } from 'date-fns';

// Creating and exporting personal info component as default
export default function PersonalInfoComponent():ReactNode {
    // Returning JSX
    return (
        <section>
            <header>
                <TitleComponent tier={2}>Personal Information</TitleComponent>
            </header>
            <main>
                <ul className={'list-disc ml-[20px]'}>
                    <li className={'dark:text-light500 text-dark500 lg:text-[14px] text-[12px] font-normal'}><b>Name :</b> Mahdi Tasha</li>
                    <li className={'dark:text-light500 text-dark500 lg:text-[14px] text-[12px] font-normal'}><b>Location :</b> Tehran, iran</li>
                    <li className={'dark:text-light500 text-dark500 lg:text-[14px] text-[12px] font-normal'}><b>Age :</b> {differenceInYears(new Date(), new Date('2006-09-18'))} years old</li>
                    <li className={'dark:text-light500 text-dark500 lg:text-[14px] text-[12px] font-normal'}><b>Education :</b> Computer Engineering at Azad University of South Tehran</li>
                </ul>
            </main>
        </section>
    );
}