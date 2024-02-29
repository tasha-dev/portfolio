// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import TitleComponent from "@/chunk/titleComponent";
import { differenceInYears } from 'date-fns';
import UnordredListComponent from "@/chunk/list/unordredListComponent";
import ListItemComponent from "@/chunk/list/listItemComponent";

// Creating and exporting personal info component as default
export default function PersonalInfoComponent():ReactNode {
    // Returning JSX
    return (
        <section>
            <header>
                <TitleComponent tier={2}>Personal Information</TitleComponent>
            </header>
            <main>
                <UnordredListComponent>
                    <ListItemComponent title={'Name'}>Mahdi Tasha</ListItemComponent>
                    <ListItemComponent title={'Location'}>Tehran, iran</ListItemComponent>
                    <ListItemComponent title={'Age'}>{differenceInYears(new Date(), new Date('2006-09-18'))} years old</ListItemComponent>
                    <ListItemComponent title={'Education'}>Computer Engineering at Azad University of South Tehran</ListItemComponent>
                </UnordredListComponent>
            </main>
        </section>
    );
}