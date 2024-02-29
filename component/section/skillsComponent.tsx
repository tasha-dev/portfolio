// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import TitleComponent from "@/chunk/titleComponent";
import UnordredListComponent from "@/chunk/list/unordredListComponent";
import ListItemComponent from "@/chunk/list/listItemComponent";

// Creating and exporting skills component as default
export default function SkillsComponent():ReactNode {
    // Returning JSX
    return (
        <section>
            <header>
                <TitleComponent tier={2}>Skills</TitleComponent>
            </header>
            <main>
                <UnordredListComponent>
                    <ListItemComponent title={'Language'}>JavaScript, TypeScript</ListItemComponent>
                    <ListItemComponent title={'Frameworks/Libraries'}>ReactJS, Next.js, React Native, Electron.js</ListItemComponent>
                    <ListItemComponent title={'Web Technologies'}>HTML, CSS, Bootstrap, Tailwind CSS, BEM, Sass, Vite</ListItemComponent>
                    <ListItemComponent title={'Version Controls'}>Git, GitHub</ListItemComponent>
                    <ListItemComponent title={'Package Manager'}>npm</ListItemComponent>
                    <ListItemComponent title={'Testing'}>Jest</ListItemComponent>
                    <ListItemComponent title={'Progressive Web Apps (PWA)'}>Implementation and optimization</ListItemComponent>
                    <ListItemComponent title={'Mobile Development'}>React Native</ListItemComponent>
                    <ListItemComponent title={'Desktop Applications'}>Electron.js</ListItemComponent>
                </UnordredListComponent>
            </main>
        </section>
    );
}