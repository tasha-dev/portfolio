// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import TitleComponent from "@/chunk/titleComponent";

// Creating and exporting skills component as default
export default function SkillsComponent():ReactNode {
    // Returning JSX
    return (
        <section>
            <header>
                <TitleComponent tier={2}>Skills</TitleComponent>
            </header>
            <main>
                <ul className={'list-disc ml-[20px]'}>
                    <li className={'dark:text-light500 text-dark500 lg:text-[14px] text-[12px] font-normal'}><b>Language :</b> JavaScript, TypeScript</li>
                    <li className={'dark:text-light500 text-dark500 lg:text-[14px] text-[12px] font-normal'}><b>Frameworks/Libraries :</b> ReactJS, Next.js, React Native, Electron.js</li>
                    <li className={'dark:text-light500 text-dark500 lg:text-[14px] text-[12px] font-normal'}><b>Web Technologies :</b> HTML, CSS, Bootstrap, Tailwind CSS, BEM, Sass, Vite</li>
                    <li className={'dark:text-light500 text-dark500 lg:text-[14px] text-[12px] font-normal'}><b>Version Controls :</b> Git, GitHub</li>
                    <li className={'dark:text-light500 text-dark500 lg:text-[14px] text-[12px] font-normal'}><b>Package Manager :</b> npm</li>
                    <li className={'dark:text-light500 text-dark500 lg:text-[14px] text-[12px] font-normal'}><b>Testing :</b> Jest</li>
                    <li className={'dark:text-light500 text-dark500 lg:text-[14px] text-[12px] font-normal'}><b>Progressive Web Apps (PWA) :</b> Implementation and optimization</li>
                    <li className={'dark:text-light500 text-dark500 lg:text-[14px] text-[12px] font-normal'}><b>Mobile Development :</b> React Native</li>
                    <li className={'dark:text-light500 text-dark500 lg:text-[14px] text-[12px] font-normal'}><b>Desktop Applications :</b> Electron.js</li>
                </ul>
            </main>
        </section>
    );
}